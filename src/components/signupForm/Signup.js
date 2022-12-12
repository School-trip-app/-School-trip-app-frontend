import React, { useState } from 'react'
import SchoolForm from '../schoolForm/SchoolForm';
import SignButtons from '../signinButtons/SignButtons';
import StudentForm from '../studentForm/StudentForm';

function Signup() {
  const [isSchool, setIsSchool] = useState(0);
  const [isStudent, setIsStudent] = useState(0);
  const [isSelected, setIsSelected] = useState(0);

  function selectSchool() {
    console.log('selectSchool');
    setIsSelected(1);
    setIsSchool(1);
    setIsStudent(0);
  }
  function selectStudent() {
    console.log('selectStudent');
    setIsSelected(1);
    setIsStudent(1);
    setIsSchool(0);
  }

  return (
    <div className='Signin'>
      <p className='Signin-p'>Sign Up</p>
      {isSelected ? <></> : <SignButtons selectSchool={selectSchool} selectStudent={selectStudent} />}
      {isSchool ? <SchoolForm /> : <></>}
      {isStudent ? <StudentForm /> : <></>}
      {isSchool ? <p className='switch-p' >Switch to <span onClick={selectStudent} className='switch-sp'>Student</span></p> : <></>}
      {isStudent ? <p className='switch-p'>Switch to <span onClick={selectSchool} className='switch-sp'>School</span></p> : <></>}
      <p id='errMsg'>{''}</p>
    </div>
  )
}

export default Signup
