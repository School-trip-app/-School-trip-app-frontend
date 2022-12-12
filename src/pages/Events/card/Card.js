import React from 'react'

function Card() {
  return (
    <div className="card">
      <div className="card-top">
        <img src='https://www.color-meanings.com/wp-content/uploads/Blue_and_yellow_colored_wood-1024x683.jpeg' alt='picTrip' />
      </div>
      <div className="card-bottom">
        <div className='card-text'>
          <h1>title</h1>
          <h1 className='price'>price</h1>
        </div>
        <div className='card-date'>
          <h3 className='month'>date/date/date</h3>
          <h3 className='days'>duration</h3>
        </div>
      </div>
    </div>
  )
}

export default Card
