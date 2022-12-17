import React from 'react'
import Register from './components/register/Register';
import Trips from './components/trips/Trips';
// import Contact from './pages/contact/Contact';
import AboutPage from './pages/About/About';

function AppTest() {
  return (
    <>
      <AboutPage />
      <Trips />
      {/* <Contact /> */}
      <Register />
    </>
  )
}

export default AppTest
