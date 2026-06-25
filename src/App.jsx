import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import OrderBar from './components/OrderBar.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <OrderBar />
    </>
  )
}
