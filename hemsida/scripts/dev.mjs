import { spawn } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const port = Number(process.env.PORT ?? 5173)
const viteBin = path.join(root, "node_modules", "vite", "bin", "vite.js")
const viteArgs = [viteBin, "--port", String(port), ...process.argv.slice(2)]

let shuttingDown = false

const vite = spawn(process.execPath, viteArgs, {
  cwd: root,
  env: process.env,
  stdio: "inherit",
  windowsHide: false,
})

function run(command, args) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: "ignore",
      windowsHide: true,
    })

    child.on("error", () => resolve(1))
    child.on("exit", (code) => resolve(code ?? 0))
  })
}

async function stopPort() {
  if (process.platform === "win32") {
    const command = [
      `$connections = Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue`,
      "$connections | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object {",
      "  Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue",
      "}",
    ].join("; ")

    await run("powershell.exe", [
      "-NoProfile",
      "-ExecutionPolicy",
      "Bypass",
      "-Command",
      command,
    ])

    return
  }

  await run("sh", ["-c", `lsof -ti tcp:${port} | xargs -r kill -9`])
}

async function shutdown(signal) {
  if (shuttingDown) {
    return
  }

  shuttingDown = true
  vite.kill(signal)

  await new Promise((resolve) => setTimeout(resolve, 400))
  await stopPort()

  process.exit(signal === "SIGINT" ? 130 : 143)
}

process.on("SIGINT", () => {
  void shutdown("SIGINT")
})

process.on("SIGTERM", () => {
  void shutdown("SIGTERM")
})

vite.on("exit", (code, signal) => {
  if (shuttingDown) {
    return
  }

  if (signal === "SIGINT") {
    process.exit(130)
  }

  if (signal === "SIGTERM") {
    process.exit(143)
  }

  process.exit(code ?? 0)
})
