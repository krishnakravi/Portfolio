import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Now from './components/Now'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Kit from './components/Kit'
import Beyond from './components/Beyond'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Now />
        <Experience />
        <Projects />
        <Kit />
        <Beyond />
        <Contact />
      </main>
    </div>
  )
}
