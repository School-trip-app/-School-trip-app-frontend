import React, {useState } from 'react'
import './contact2.css'
import { FaHome, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';
import { stateAuth } from '../../store/auth';
import Register from '../../components/register/Register';

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
  const state=useSelector(stateAuth);

  const [formStatus, setFormStatus] = useState('Send');
  return (
    <>
    {state.isLogin&&
    <>
    <Navbar/>
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
                  <textarea className="textarea-sh" id="message" required placeholder='Enter Message' cols="30" rows="9" />
                  <input className="text-sh" type="text" id="name" required placeholder='Enter your name' />
                  <input className="email-sh" type="email" id="email" required placeholder='Enter email address' />
                  <input className="text-sh" type="text" id="subject" required placeholder='Enter subject' />
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
      <Footer/>
    </>}
    {!state.isLogin&&<Register/>}

    </>
  )
}

export default Contact