import React from 'react'
import Navbar from "./components/Nav.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Portfolio from "./components/portfolio.jsx"
import Experience from "./components/Experience.jsx"
import Footer from "./components/Footer.jsx"
 import Contact from "./components/Contact.jsx"

function App() {
  return (
    <>
      <Home/>
      <Navbar />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      </>
  )
}

export default App;
