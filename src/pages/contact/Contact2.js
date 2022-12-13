import React, {useState } from 'react'
import './contact2.css'
import { FaHome, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";


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
  const [formStatus, setFormStatus] = useState('Send');
  return (
    <>
      <section className='top-background'>
        <p>Contact</p>
      </section>
      <div className="container mt-5">
        <div className='grid-container-element'>
          <section className='contact-section'>
            <div className='form-div'>
              <h2 className="contact-title">Get in Touch</h2>
              <form onSubmit={onSubmit}>
                <div className="col-lg-10 grid-child-element">
                  <textarea className="" id="message" required placeholder='Enter Message' cols="30" rows="9" />
                  <input className="" type="text" id="name" required placeholder='Enter your name' />
                  <input className="" type="email" id="email" required placeholder='Enter email address' />
                  <input className="" type="text" id="subject" required placeholder='Enter subject' />
                </div>
                <button className="button sbtbutton" type="submit">
                  {formStatus}
                </button>
              </form>
            </div>
            <div className='icon-div'>
              <div className='icon-type'>
                <div className='icon-title'>
                  <FaHome className='icon' />
                  <h5>Amman,jordan</h5>
                </div>
                <p>airport street,marj al-hamam birdge </p>
              </div>
              <div className='icon-type'>
                <div className='icon-title'>
                  <FaPhoneSquareAlt className='icon' />
                  <h5>+962(77)998 8663</h5>
                </div>
                <p>sun to Thu 9am to 5pm </p>
              </div>
              <div className='icon-type'>
                <div className='icon-title'>
                  <FaEnvelope className='icon' />
                  <h5>404Team@email.com</h5>
                </div>
                <p>send us your query  anytime </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Contact