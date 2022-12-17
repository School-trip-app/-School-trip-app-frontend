import React, { useState } from 'react'
import base64 from 'base-64';
import axios from 'axios';
import { setLogin } from '../../store/auth';
import { useDispatch } from 'react-redux';
import cookies from 'react-cookies';
function Signin() {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    const encodeduser = base64.encode(`${user.username}:${user.password}`);
    await axios.post('https://sophisticated-steel-production.up.railway.app/signin', {}, {
      headers: {
        Authorization: `Basic ${encodeduser}`
      }
    }).then((res => {
      dispatch(setLogin());
      cookies.save('capabilities', res.data.capabilities);
      cookies.save('token', res.data.token);
      cookies.save('userRole', res.data.userRole);
      cookies.save('username', res.data.username);
      setUrl(res.data.image);
      console.log(res.data);

    })).catch(err => {
      console.log(err);
    })
  }
  let URL=`http://localhost:4001/Images/1671033434908.png`;
  return (
    <div className='Signin'>
      <p className='Signin-p'>Sign In</p>
      <img src={URL} alt='ig'/>
      <form className='SigninForm' onSubmit={handlerSubmit}>
        <input type='text' name='username' id='username' placeholder='Username' className='formInput' required ></input>
        <input type='password' name='password' id='password' placeholder='Password' className='formInput' required ></input>
        <input type='submit' name='submit' value='CONTINUE' className='formSubmit' ></input>
      </form>
      <p id='errMsg'>{''}</p>
    </div>
  )
}

export default Signin
