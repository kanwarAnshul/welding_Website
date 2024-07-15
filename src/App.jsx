import { useState } from 'react'
import './App.css'
import Header from '../Components/Header'
import Contact from '../Components/Contact'
import About from '../Components/About'
import HomePage from '../Components/HomePage'
import Footer from '../Components/Footer'

function App() {
  const [aboutPage, setAboutPage] = useState(false)
  const [homePage, setHomePage] = useState(true)
  const [contactPage, setContactPage] = useState(false)

  return (
    <>
      {/* header */}
      <Header
        aboutPage={aboutPage}
        setAboutPage={setAboutPage}
        contactPage={contactPage}
        setContactPage={setContactPage}
        homePage={homePage}
        setHomePage={setHomePage}
      />

      {/* main */}
      {contactPage ? <Contact /> : aboutPage ? <About /> : <HomePage />}

      {/* footer */}
      <Footer />
    </>
  )
}

export default App
