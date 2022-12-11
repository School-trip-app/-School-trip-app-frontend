import React from 'react';
import Card from '../card/Card';
import './trips.css';

function Trips() {
  return (
    <div className='trips-page'>
      <section className='top-background'>
        <p>All Trips</p>
      </section>
      <section className='packages'>
        <div>
          <span className='check'>Check Our Best Promotional Tour</span>
          <p className='upcome'>Upcoming Trips</p>
        </div>
        <div className='trips-box'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className='bot-video'>
        <video width="640" height="400" controls autoplay>
          <source src="https://www.youtube.com/watch?v=qtjcN1nnln4" type="mp4" />
        </video>
      </section>
    </div>
  )
}

export default Trips
