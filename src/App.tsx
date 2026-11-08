import Header from './components/layout/Header'
import Hero from './components/sections/hero/Hero'
import Skills from './components/sections/skills/Skills'
import Projects from './components/sections/projects/Projects'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  )
}