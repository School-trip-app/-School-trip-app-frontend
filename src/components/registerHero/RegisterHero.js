import React from 'react'

function RegisterHero({ setShowSignin }) {
  return (
    <div className='registerHero'>
      <div className='heroTop'>
      </div>
      <div className='heroMid'>
        <h3 className='heroMid-h3'>Welcome To <span className='logo-JO'>JO</span><span className='logo-urney'>urney</span></h3>
        <p >Don't have an account <span style={{ 'color': 'rgb(87,54,6)' }} onClick={() => { setShowSignin(0) }} className='Signup-button'> Signup</span></p>
      </div>
      <div className='heroBot'>
      </div>
    </div>
  )
}

export default RegisterHero
