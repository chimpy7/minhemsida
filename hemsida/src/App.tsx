import './App.css'
import About from './pages/about'
import Tech from './pages/tech'
import Home from './pages/home'
import Projects from './pages/projects'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tech" element={<Tech />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
