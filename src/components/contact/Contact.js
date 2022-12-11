import React, { useEffect, useState } from 'react'
import './contact.scss'
import Navbar from '../navbar/Navbar';
import Carousel from "./Carousel"
import { ImHome } from "react-icons/im";


const onSubmit = (e) => {
  e.preventDefault()
  const { name, email, message } = e.target.elements
  let conFom = {
    name: name.value,
    email: email.value,
    message: message.value,
  }
  console.log(conFom)
}

function Contact() {
  const [formStatus, setFormStatus] = React.useState('Send')

  return (
    <>
      <Navbar />
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>


      <div className="container mt-5">
      <h2 className="contact-title">Get in Touch</h2>
      <div className='row '>

        
     
      <form onSubmit={onSubmit}>
        <div className="col-lg-8">
            <div className='row'>

            </div>
          <textarea className="" id="message" required placeholder='Enter Message'  cols="30" rows="9"/>
          <input className="" type="text" id="name" required placeholder='Enter your name' />
          <input className="" type="email" id="email" required placeholder='Enter email address' />
          <input className="" type="text" id="subject" required placeholder='Enter subject' />

          
        </div>    
        <button className="button sbtbutton" type="submit">
          {formStatus}
        </button>
      </form>
      



    </div>
    </div>
     
    </>
  )
}

export default Contact
