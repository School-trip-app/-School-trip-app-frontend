import React, { useState } from 'react'
import RegisterHero from '../registerHero/RegisterHero';
import Signup from '../signupForm/Signup';
import Signin from '../signinForm/Signin';
import '../register/register.css';
import '../signinForm/signin.css'

function Register() {
  const [showSignIn, setShowSignin] = useState(0);
  return (
    <>
      <div className='register'>
        <div className='registerCard'>
          <RegisterHero />
          <div className='registerForm'>
            {showSignIn ? <Signin /> : <Signup />}
          </div>
        </div>
      </div >
    </>
  )
}

export default Register
