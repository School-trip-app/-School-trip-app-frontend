import React from 'react'

function Signin() {
  return (
    <div className='Signin'>
      <p className='Signin-p'>Sign In</p>
      <form className='SigninForm' onSubmit={''}>
        <input type='text' name='username' placeholder='Username' className='formInput' required ></input>
        <input type='password' name='password' placeholder='Password' className='formInput' required ></input>
        <input type='submit' name='submit' value='CONTINUE' className='formSubmit' ></input>
      </form>
      <p id='errMsg'>{''}</p>
    </div>
  )
}

export default Signin
