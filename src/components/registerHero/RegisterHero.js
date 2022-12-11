import React from 'react'

function RegisterHero() {
  return (
    <div className='registerHero'>
      <div className='heroTop'>
        <p className='logo'>JOurney</p>
      </div>
      <div className='heroMid'>
        <h3>Welcome To <span className='siteName'> JOurney </span>App </h3>
        <p>Don't have an account <a onClick={''}>SignUp</a></p>
      </div>
      <div className='heroBot'>
      </div>
    </div>
  )
}

export default RegisterHero
