import React,{useState} from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import { useDispatch } from 'react-redux';
import { setLogin} from '../../store/auth';

function SchoolForm() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    selectedFile: ''
})
  const handlerFile=(e)=>{
    let file = e.target.files[0];
    console.log(file)
    setPostData({...postData,selectedFile:file});
    console.log(postData.selectedFile)
  }
  const handlerSubmit = async(e) => {
    e.preventDefault();
  
    let formData = new FormData();
    formData.append('username', e.target.username.value);
    formData.append('email',e.target.email.value )
    formData.append('password',e.target.password.value)
    formData.append('userRole','school')
    formData.append('phonenumber',e.target.phone.value)
    formData.append('gender','male')
    formData.append('image', postData.selectedFile);
    console.log(formData);

    await axios.post(`https://sophisticated-steel-production.up.railway.app/user`,formData).then((res) => {
      cookies.save('capabilities', res.data.capabilities);
      cookies.save('token', res.data.token);
      cookies.save('userRole', res.data.userRole);
      cookies.save('username', res.data.username);
      console.log(res.data)
      dispatch(setLogin());
    }).catch((err) => console.log(err || err));
  }
  return (
    <form className='SigninForm' onSubmit={handlerSubmit}>
      <input type='text' name='username' id='username' placeholder='Username' className='formInput' required ></input>
      <input type='email' id='email' name='email' placeholder='E-mail' className='formInput' required ></input>
      <input type='text' name='phone' id='phone' placeholder='phone number' className='formInput' required />
      <input type='password' id='password' name='password' placeholder='Password' className='formInput' required ></input>
      <input type='file' id='files' name='file' onChange={(e)=>handlerFile(e)}/>
      <input type='submit' name='sub' value='CONTINUE' className='formSubmit' id='sub'></input>
    </form>
  )
}

export default SchoolForm





