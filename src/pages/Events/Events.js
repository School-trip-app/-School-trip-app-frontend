import React from 'react';
import Card from '../../pages/Events/card/Card';
import Video from '../../components/videotour/Video'
import './trip.css';

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
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
        </div>
      </section>
      <Video/>
      {/* <section className='bot-video'>
        <video width="640" height="400" controls autoplay>
          <source src="https://www.youtube.com/watch?v=qtjcN1nnln4" type="mp4" />
        </video>
      </section> */}
    </div>
  )
}

export default Trips
