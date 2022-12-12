import React from 'react'

function SignButtons({ selectStudent, selectSchool }) {
  return (
    <div className='but-div'>
      <span className='typebut' onClick={selectSchool}>School</span>
      <span className='typebut' onClick={selectStudent}>Student</span>
    </div>
  )
}

export default SignButtons
