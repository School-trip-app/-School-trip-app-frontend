import React, { useState } from 'react'
import base64 from 'base-64';
import axios from 'axios';
import { setLogin, setLoadingOff, setLoadingOn } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'react-cookies';
import Loader from '../Loader/Loader';
function Signin() {
  const dispatch = useDispatch();
  const stateLoading = useSelector(state => state.auth.auth)
  const [error, setError] = useState('');
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    const encodeduser = base64.encode(`${user.username}:${user.password}`);
    dispatch(setLoadingOn());
    await axios.post('https://school-trip-app-backend.onrender.com/signin', {}, {
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
      localStorage.setItem("userId",JSON.parse(res.data.id));
      cookies.save('email', res.data.email);
      cookies.save('imageprofile', `https://school-trip-app-backend.onrender.com/${res.data.imageprofile}`);
      cookies.save('phonenumber', res.data.phonenumber);
      dispatch(setLoadingOff())

    })).catch(err => {
      console.log(err.response.data);
      setError(err.response.data);
      dispatch(setLoadingOff());
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
      <p id='errMsg'>{error !== '' && error}</p>
      {stateLoading.isLoading && <Loader />}
    </div>
  )
}

export default Signin
