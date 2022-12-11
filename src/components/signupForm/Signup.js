import React from 'react'

function Signup() {
  return (
    <div className='Signin'>
      <p >Sign Up</p>
      <form className='SigninForm' onSubmit={''}>
        <input type='text' name='username' placeholder='Username' className='formInput' required ></input>
        <input type='email' name='email' placeholder='E-mail' className='formInput' required ></input>
        <input type='password' name='password' placeholder='Password' className='formInput' required ></input>
        <input type='password' name='confirmPassword' placeholder='Confirm Password' className='formInput' required ></input>
        <input type='submit' name='submit' value='CONTINUE' className='formSubmit' ></input>
      </form>
      <p id='errMsg'>{'err'}</p>
    </div>
  )
}

export default Signup
