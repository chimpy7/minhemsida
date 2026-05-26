import { spawn } from "node:child_process"

const port = Number(process.argv[2] ?? process.env.PORT ?? 5173)

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error(`Invalid port: ${process.argv[2]}`)
  process.exit(1)
}

function run(command, args, options = {}) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: options.stdio ?? "ignore",
      windowsHide: true,
    })

    child.on("error", () => resolve(1))
    child.on("exit", (code) => resolve(code ?? 0))
  })
}

async function stopWindowsPort() {
  const command = [
    `$connections = Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue`,
    "$connections | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object {",
    "  Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue",
    "}",
  ].join("; ")

  return run("powershell.exe", [
    "-NoProfile",
    "-ExecutionPolicy",
    "Bypass",
    "-Command",
    command,
  ])
}

async function stopUnixPort() {
  const command = `lsof -ti tcp:${port} | xargs -r kill -9`
  return run("sh", ["-c", command])
}

const exitCode =
  process.platform === "win32" ? await stopWindowsPort() : await stopUnixPort()

process.exit(exitCode)
