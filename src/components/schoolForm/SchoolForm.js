import React, { useState } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setLoadingOn, setLoadingOff } from '../../store/auth';
import Loader from '../Loader/Loader';
function SchoolForm() {

  const stateLoader = useSelector((state) => state.auth.auth)
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    selectedFile: ''
  });


  const handlerFile = (e) => {
    let file = e.target.files[0];
    console.log(file)
    setPostData({ ...postData, selectedFile: file });
    console.log(postData.selectedFile)
  }
  
  const handlerSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoadingOn());
    let formData = new FormData();
    formData.append('username', e.target.username.value);
    formData.append('email', e.target.email.value)
    formData.append('password', e.target.password.value)
    formData.append('userRole', 'school')
    formData.append('phonenumber', e.target.phone.value)
    formData.append('gender', 'male')
    formData.append('image', postData.selectedFile);

    console.log(formData);

    await axios.post(`https://school-trip-app-backend.onrender.com/user`, formData).then((res) => {
      cookies.save('capabilities', res.data.capabilities);
      cookies.save('token', res.data.token);
      cookies.save('userRole', res.data.userRole);
      cookies.save('username', res.data.username);
      cookies.save('userId', res.data.id);
      cookies.save('email', res.data.email);
      cookies.save('phonenumber', res.data.phonenumber);
      cookies.save('imageprofile', res.data.imageprofile)
      console.log(res.data)
      dispatch(setLoadingOff());

      dispatch(setLogin());
    }).catch((err) => {
      console.log(err || err)
      dispatch(setLoadingOff());

    });
  }
  return (
    <form className='SigninForm' onSubmit={handlerSubmit}>
      <input type='text' name='username' id='username' placeholder='Username' className='formInput' required ></input>
      <input type='email' id='email' name='email' placeholder='E-mail' className='formInput' required ></input>
      <input type='text' name='phone' id='phone' placeholder='phone number' className='formInput' required />
      <input type='password' id='password' name='password' placeholder='Password' className='formInput' required ></input>
      <input type='file' style={{ marginLeft: '38px' }} id='files' name='file' onChange={(e) => handlerFile(e)} />
      <input type='submit' name='sub' value='CONTINUE' className='formSubmit' id='sub'></input>
      {stateLoader.isLoading && <Loader />}
    </form>
  )
}

export default SchoolForm





