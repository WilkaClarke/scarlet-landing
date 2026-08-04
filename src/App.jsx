import Nav from './sections/Nav.jsx'
import Hero from './sections/Hero.jsx'
import TrustStrip from './sections/TrustStrip.jsx'
import Features from './sections/Features.jsx'
import Story from './sections/Story.jsx'
import ProductShowcase from './sections/ProductShowcase.jsx'
import Timeline from './sections/Timeline.jsx'
import Waitlist from './sections/Waitlist.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Story />
        <ProductShowcase />
        <Timeline />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
