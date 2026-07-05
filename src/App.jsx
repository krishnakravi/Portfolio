import { useState } from 'react'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Now from './components/Now'
import Experience from './components/Experience'
import ApertureFeature from './components/ApertureFeature'
import Projects from './components/Projects'
import Kit from './components/Kit'
import Contact from './components/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="grain vignette relative min-h-screen bg-ink text-bone">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Now />
        <Experience />
        <ApertureFeature />
        <Projects />
        <Kit />
        <Contact />
      </main>
    </div>
  )
}
