import React from 'react';
import Card from '../../pages/Events/card/Card';
import Video from '../../components/videotour/Video'
import './trip.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';
import { stateAuth } from '../../store/auth';
import Register from '../../components/register/Register';
function Trips() {
  const state=useSelector(stateAuth);

  return (
    <>
    {state.isLogin&&
    <>
    <Navbar/>
    <div className='trips-page'>
      <section className='top-background-trips'>
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
    </div>
    <Footer/>
    </>}
    {!state.isLogin&&<Register/>}
    </>

  )
}

export default Trips
