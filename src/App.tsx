import Header from './components/layout/Header'
import Hero from './components/sections/hero/Hero'
import Skills from './components/sections/skills/Skills'
import Projects from './components/sections/projects/Projects'
import Experience from './components/sections/experience/Experience'
import About from './components/sections/about/About'
import Contact from './components/sections/contact/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <Header />
        <main>
          <Hero />
          <About />        
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      <Footer />
    </>
  )
}