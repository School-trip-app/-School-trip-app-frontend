import React from 'react';
import './tripDetails.css';
import { FaDirections, FaRegCalendarAlt, FaRegClock, FaDollarSign, FaMapMarkerAlt, FaStar, FaUsers, FaConciergeBell, FaHospitalUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';



function TripDetails() {

  const location = useLocation();
  const { state } = location;
  console.log(state)

  // const Hospitalrefactor = (item) => {
  //   let hospital = []
  //   if(item.phone){

  //     hospital.push(item.phone)


  return (
    <>
      <div >
        <Carousel>
          {state.packageImages.length > 0 && state.packageImages.map((item) => {
            return (
              <Carousel.Item>
                <img
                  className=" d-block w-100"
                  src={item.imageUrl}
                  alt="slide"
                  style={{ height: "400px" }}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
      < div className='TripDetails' >
        <div className='TripDetails-body'>
          <h2>{state.packageName}</h2>
          <p>({state.city})</p>
          <div className='TripDetails-body-part2'>
            <div className='TripDetails-body-part2-wicon'>
            </div>
            <div className='TripDetails-body-part2-wicon'>
              <FaDirections />
              <p className='title'>Description</p>
            </div>
            <p>{state.description}</p>
            <div className='TripDetails-body-part2-wicon'>
              <FaUsers />
              <p className='title'>Number of people</p>
            </div>
            <p>{state.numberOfPeople} People</p>
            <div className='TripDetails-body-part2-wicon'>
              <FaRegCalendarAlt />
              <p className='title'>Date</p>
            </div>
            <p>{state.tripDate}</p>
            <div className='TripDetails-body-part2-wicon'>
              <FaConciergeBell />
              <p className='title'>Meals</p>
            </div>
            <p>{state.meals}</p>
            <div className='TripDetails-body-part2-wicon'>
              <FaDollarSign />
              <p className='title'>Price</p>
            </div>
            <p>{state.price} JD/Person</p>
            <div className='TripDetails-body-part2-wicon'>
              <FaRegClock />
              <p className='title'>Starting & Ending time</p>
            </div>
            <p>{`${state.startingTime} - ${state.endingTime}`}</p>
            <div className='TripDetails-body-part2-wicon'>
              <FaMapMarkerAlt />
              <p className='title'>Pick & Drop points</p>
            </div>
            <p>From Your School To {state.city}</p>
            <div className='TripDetails-body-part2-wicon'>
              <FaStar />
              <p className='title'>Rate</p>
            </div>
            <p>{state.rate}</p>
            <div className='TripDetails-body-part2-wicon'>
              <FaHospitalUser />
              <p className='title'>Nearest Hospital INFO</p>
            </div>
            {state.Hospitals && state.Hospitals.map((item) => {
              return (
                <div>
                  <p>{item.name}</p>
                  <p>{item.address}</p>
                  <p>{item.phone}</p>
                  </div>
              )
            })}
          </div>
          <button>Book Now</button>
        </div>
      </div >
    </>
  )
}

export default TripDetails