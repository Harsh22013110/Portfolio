import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Harsh Shukla. Built with React + Vite.</p>
        </div>
      </footer>
    </>
  )
}

export default App
