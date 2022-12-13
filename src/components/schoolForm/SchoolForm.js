import React,{useState} from 'react';
// import FileBase from 'react-file-base64';


function SchoolForm() {
  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
   });

  const handlerSubmit = (e) => {
    e.preventDefault();
    setuserInfo({
      ...userInfo,
      file:e.target.files[0],
      filepreview:window.URL.createObjectURL(e.target.files[0]),
    });
    const formdata = new FormData(); 
    formdata.append('avatar', userInfo.file);

    // const file = e.target.files[0];
    // let formData = new FormData();
    // formData.append('file', file);
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      userRole: 'school',
      phonenumber: e.target.phone.value,
      gender: 'gender',
      image:formdata
    }
    console.log(user);
  }

  return (
    <form className='SigninForm' onSubmit={handlerSubmit}>
      <input type='text' name='username' id='username' placeholder='Username' className='formInput' required ></input>
      <input type='email' id='email' name='email' placeholder='E-mail' className='formInput' required ></input>
      <input type='text' name='phone' id='phone' placeholder='phone number' className='formInput' required />
      <input type='password' id='password' name='password' placeholder='Password' className='formInput' required ></input>
      <input type='file' id='files' />
      {/* <FileBase
        type='file'
        multiple={false}
        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
      /> */}
      {/* <input type='file' width='400' className='formInput' accept="image/*" /> */}
      <input type='submit' name='sub' value='CONTINUE' className='formSubmit' id='sub'></input>
    </form>
  )
}

export default SchoolForm
