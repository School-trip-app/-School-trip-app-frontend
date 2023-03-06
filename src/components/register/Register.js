import React, { useState,useEffect  } from 'react'
import RegisterHero from '../registerHero/RegisterHero';
import Signup from '../signupForm/Signup';
import Signin from '../signinForm/Signin';
import '../register/register.css';
import '../signinForm/signin.css'
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, stateAuth } from '../../store/auth';
import App from '../../App';
import cookies from 'react-cookies';

function Register() {
  const [showSignIn, setShowSignin] = useState(1);
  const state=useSelector(stateAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cookies.load('token')) {
      dispatch(setLogin());
    }
  }, []);
  return (
    <>
    {!state.isLogin&&
      <div className='register'>
        <div className='registerCard'>
          <RegisterHero setShowSignin={setShowSignin} />
          <div className='registerForm'>
            {showSignIn ? <Signin /> : <Signup />}
          </div>
        </div>
      </div >
    }
    {state.isLogin&&<App/>}
    </>
  )
}

export default Register
