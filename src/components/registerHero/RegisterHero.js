import React from 'react'

function RegisterHero({ setShowSignin }) {
  return (
    <div className='registerHero'>
      <div className='heroTop'>
        <p className='logo'><span className='logo-JO'>JO</span><span className='logo-urney'>urney</span></p>
      </div>
      <div className='heroMid'>
        <h3>Welcome To <span className='logo-JO'>JO</span><span className='logo-urney'>urney</span></h3>
        <p >Don't have an account <a style={{ 'color': 'rgb(87,54,6)' }} onClick={() => { setShowSignin(0) }} className='Signup-button'> Signup</a></p>
      </div>
      <div className='heroBot'>
      </div>
    </div>
  )
}

export default RegisterHero
