import React from 'react';
import './tripDetails.css';
import { FaDirections, FaRegCalendarAlt, FaRegClock, FaDollarSign, FaMapMarkerAlt, FaStar, FaUsers, FaConciergeBell } from 'react-icons/fa'



function TripDetails({ title, city, description, date, price, rate, startTime, endTime, pickup, drop, images, people, meals }) {

  return (
    <div className='TripDetails'>
      <div className='TripDetails-head'>
        <img src='https://images.unsplash.com/photo-1670968982569-81f78c8e841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80' alt='IMAGE' />
      </div>
      <div className='TripDetails-body'>
        <h2>{title}</h2>
        <p>({city})</p>
        <div className='TripDetails-body-part2'>
          <div className='TripDetails-body-part2-wicon'>
          </div>
          <div className='TripDetails-body-part2-wicon'>
            <FaDirections />
            <p className='title'>Description</p>
          </div>
          <p>{description}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaUsers />
            <p className='title'>Number of people</p>
          </div>
          <p>{people} People</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaRegCalendarAlt />
            <p className='title'>Date</p>
          </div>
          <p>{date}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaConciergeBell />
            <p className='title'>Meals</p>
          </div>
          <p>{meals}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaDollarSign />
            <p className='title'>Price</p>
          </div>
          <p>{price} JD/Person</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaRegClock />
            <p className='title'>Starting & Ending time</p>
          </div>
          <p>{startTime}-{endTime}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaMapMarkerAlt />
            <p className='title'>Pick & Drop points</p>
          </div>
          <p>From {pickup} To {drop}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaStar />
            <p className='title'>Rate</p>
          </div>
          <p>{rate}</p>
        </div>
        <button>Book</button>
      </div>
    </div>
  )
}

export default TripDetails
