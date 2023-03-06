import React from 'react';
import './specialTrips.css';
import img from '../../assets/about2.png (1).webp';
import axios from 'axios';
import cookies from 'react-cookies';

function SpecialTrips() {
  const handlerSpecial=async(e)=>{
    e.preventDefault();
    const trip={
        place:e.target.place.value,
        date:e.target.date.value,
        numberOfStudents:e.target.number.value,
        contactMethod:e.target.contact.value,
        otherDetails:e.target.details.value,
        userId:cookies.load('userId')
    }
    console.log(trip)
    await axios.post('http://localhost:4005/tripRequest',trip).then((res)=>{
        console.log(res.data);
        alert('sent')
        e.target.reset();
        
    }).catch(err=>console.log(err));
}
  return (
    <div className='SpecialTrips-component'>
      <div className='SpecialTrips-title'>
        <span className='check'>Ask to create your own trip</span>
        <p className='upcome'>Request a special trip</p>
      </div>
      <div className='SpecialTrips-body'>
        <div className='SpecialTrips-body-form'>
          <p>Fill the required trip data that you want to add...</p>
          <form onSubmit={handlerSpecial}>
            <input type='text' name='place' id='place' placeholder='Place Name' />
            <input type='text' name='date' placeholder='Trip Date' id='date'/>
            <input type='number' name='number' id='number' placeholder='Number of students' />
            <input type='text' name='contact'  id='contact' placeholder='Contact method' />
            <input type='textarea' name='details' placeholder='Other Details' />
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