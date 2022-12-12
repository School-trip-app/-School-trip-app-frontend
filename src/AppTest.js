import React from 'react'
import Register from './components/register/Register';
import Trips from './components/trips/Trips';
import Contact from './components/contact/Contact';
import AboutPage from './components/aboutPage/AboutPage';

function AppTest() {
  return (
    <>
      <AboutPage />
      <Trips />
      <Contact />
      <Register />
    </>
  )
}

export default AppTest
