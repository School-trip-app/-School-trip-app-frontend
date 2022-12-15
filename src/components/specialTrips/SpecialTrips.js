import React from 'react';
import './specialTrips.css';
import img from '../../assets/about2.png (1).webp';



function SpecialTrips() {
  return (
    <div className='SpecialTrips-component'>
      <div className='SpecialTrips-title'>
        <span className='check'>Ask to create your own trip</span>
        <p className='upcome'>Request a special trip</p>
      </div>
      <div className='SpecialTrips-body'>
        <div className='SpecialTrips-body-form'>
          <p>Fill the required trip data that you want to add...</p>
          <form>
            <input type='text' name='placeName' placeHolder='Place Name' />
            <input type='text' name='date' placeHolder='Trip Date' />
            <input type='text' name='numberOfStudents' placeHolder='Number of students' />
            <input type='text' name='contact' placeHolder='Contact method' />
            <input type='textarea' name='details' placeHolder='Other Details' />
            <input className='form-button-submit' type='submit' value='Submit your order' />
          </form>
        </div>
        <div className='SpecialTrips-body-image'>
          <img src={img} alt='images' />
        </div>
      </div>
    </div>
  )
}

export default SpecialTrips