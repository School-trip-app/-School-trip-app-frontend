import React, { useState } from 'react'
import base64 from 'base-64';
import axios from 'axios';
import { setLogin } from '../../store/auth';
import { useDispatch } from 'react-redux';
import cookies from 'react-cookies';

function Signin() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    const encodeduser = base64.encode(`${user.username}:${user.password}`);
    await axios.post('http://localhost:4005/signin', {}, {
      headers: {
        Authorization: `Basic ${encodeduser}`
      }
    }).then((res => {
      dispatch(setLogin());
      cookies.save('capabilities', res.data.capabilities);
      cookies.save('token', res.data.token);
      cookies.save('userRole', res.data.userRole);
      cookies.save('username', res.data.username);
      cookies.save('userId', res.data.id);
      cookies.save('email', res.data.email);
      cookies.save('imageprofile',`http://localhost:4005/${res.data.imageprofile}`);
      cookies.save('phonenumber', res.data.phonenumber);

    })).catch(err => {
      console.log(err.response.data);
      setError(err.response.data);
    })
  }
  return (
    <div className='Signin'>
      <p className='Signin-p'>Sign In</p>
      <form className='SigninForm' onSubmit={handlerSubmit}>
        <input type='text' name='username' id='username' placeholder='Username' className='formInput' required ></input>
        <input type='password' name='password' id='password' placeholder='Password' className='formInput' required ></input>
        <input type='submit' name='submit' value='CONTINUE' className='formSubmit' ></input>
      </form>
      <p id='errMsg'>{error!==''&&error}</p>
    </div>
  )
}

export default Signin
