import React from 'react'

function StudentForm() {
  return (
    <form className='SigninForm' onSubmit={''}>
      <input type='text' name='username' placeholder='Username' className='formInput' required ></input>
      <input type='email' name='email' placeholder='E-mail' className='formInput' required ></input>
      <input type='text' name='username' placeholder='Gender' className='formInput' required ></input>
      <input type='password' name='password' placeholder='Password' className='formInput' required ></input>
      <input type='password' name='confirmPassword' placeholder='Confirm Password' className='formInput' required ></input>
      <input type='submit' name='submit' value='CONTINUE' className='formSubmit' ></input>
    </form>
  )
}

export default StudentForm
