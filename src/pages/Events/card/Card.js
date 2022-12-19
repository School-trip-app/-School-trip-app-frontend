import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';


function Card({ packageName, price, date, time, image, city, data }) {

  let imageurl = 'https://i.ibb.co/nk8BLbt/logo.png'

  if (image?.length > 0) {
    imageurl = image[0].imageUrl
  }
 
  const navigate = useNavigate();

  const navigateToDetails = (item) => {
    navigate('/tripdetails', { state: item });
  };


  return (
    <div className='trip-card-holder' onClick={() => navigateToDetails(data)}>
      <div className='trip-card-image'>
        <img src={imageurl} alt='packageImage' style={{ width: '100%', height: '100%' }} />
      </div>
      <div className='trip-card-data'>
        <div className='card-data-header'>
          <h4 className='card-data-header-h4'>{packageName}</h4>
          <p className='card-data-header-p'>{price}JD/Person</p>
        </div>
        <div className='card-data-middle'>
          <p className='card-data-middle-p'>{city}</p>
        </div>
        <div className='card-data-bottom'>
          <h4 className='card-data-bottom-h4'>{date}</h4>
          <div className='card-data-bottom-gap'></div>
          <p className='card-data-bottom-p'>{time}</p>
        </div>
      </div>
    </div >
  )
}

export default Card