import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, stateAuth } from '../../store/auth';
import axios from 'axios';
import cookies from 'react-cookies';

function StudentForm() {
  const dispatch = useDispatch();
  const state=useSelector(stateAuth);
  console.log(state.isLogin);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      userRole: 'student',
      phonenumber: e.target.phone.value,
      gender: e.target.gender.value,
    }
    await axios.post('https://sophisticated-steel-production.up.railway.app/user', user).then((res) => {
      cookies.save('capabilities', res.data.capabilities);
      cookies.save('token', res.data.token);
      cookies.save('userRole', res.data.userRole);
      cookies.save('username', res.data.username);
      cookies.save('userId', res.data.id);
      dispatch(setLogin());
      console.log(state);
    }).catch((err) => console.log(err.message || err));
    console.log(user);
    e.target.reset();
  }
  return (
    <form className='SigninForm' onSubmit={handlerSubmit}>
   <input type='text' name='username' placeholder='Username' className='formInput' required ></input>
      <input type='email' name='email' placeholder='E-mail' className='formInput' required ></input>
      <input type='text' name='gender' placeholder='Gender' id='gender' className='formInput' required ></input>
      <input type='password' name='password' placeholder='Password' className='formInput' required ></input>
      <input type='text' name='phone' className='formInput' required placeholder='phone number' />
      <input type='submit' name='submit' value='CONTINUE' className='formSubmit' ></input>
    </form>
  )
}

export default StudentForm
