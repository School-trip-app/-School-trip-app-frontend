import React, { useState } from 'react';
import './travel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from '../../data';
import imgGirl from '../../assets/logo.png.webp';
import Card from '../../pages/Events/card/Card';


function Travel() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <div className='travel-home section__padding'>
      <div className='travel-text'>
        <p>Check Our Best Promotional Tour</p>
        <h1>Upcoming Events</h1>
      </div>
      <Slider {...settings}>
        {/* create component insade of spagiti code */}
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
        <Card packageName='Package El-Habaieb' price='15' date='20-jun-2030' time='10:30am - 5:00pm' image='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0' city='amman' />
      </Slider>
    </div>
  )
}

export default Travel
