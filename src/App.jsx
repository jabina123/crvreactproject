import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Achievements from './components/Achievements'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
 

  return (
    <>
         <Header/>
    <Home/>
    <div id="about" className="my-4">
  <About/>
  </div>
  <div id="achievements" className="my-4">
<Achievements/>
  </div>
  <div id="gallery" className="my-4">
<Gallery/>
  </div>
  <div id="contact" className="mt-4">
<Contact/>
  </div>
  <Footer/>
    </>
  )
}

export default App
