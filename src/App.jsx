import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Achievements from './components/Achievements'
import Creative from './components/Creative'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Timeline />
        <Achievements />
        <Creative />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
