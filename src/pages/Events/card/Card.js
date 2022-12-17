import React from 'react'

function Card({ packageName, price, date, time, image, city, onClick }) {

  return (
    <div className='trip-card-holder' onClick={onClick}>
      <div className='trip-card-image'>
        <img src={image} alt='packageImage' />
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
          <p className='card-data-bottom-p'>{`time`}</p>
        </div>
      </div>
    </div >
  )
}

export default Card
