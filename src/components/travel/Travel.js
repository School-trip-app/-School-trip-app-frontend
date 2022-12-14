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
        {/* {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
            </div>
            <div className="card-bottom">
              <div className='card-text'>
                <h1>{item.title}</h1>
                <h1 className='price'>{item.price}</h1>
              </div>
              <div className='card-date'>
                <h3 className='month'>12 Jan - 18 Jan</h3>
                <h3 className='days'>5 Days</h3>
              </div>
            </div>
          </div>
        ))} */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  )
}

export default Travel
