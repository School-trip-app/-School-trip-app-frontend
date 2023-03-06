import React from 'react';
import './travel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../../pages/Events/card/Card';
import { useSelector, useDispatch } from "react-redux";
import { getpackagesAsync, selectpackages } from '../../store/package-re';
import { useEffect } from 'react';



function Travel() {

  const dispatch = useDispatch();
  const packages = useSelector(selectpackages);
  useEffect(() => {
    dispatch(getpackagesAsync());
  }, [dispatch]);

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



  return (
    <div className='travel-home section__padding'>
      <div className='travel-text'>
        <p>Check Our Best Promotional Tour</p>
        <h1>Upcoming Events</h1>
      </div>
      <Slider {...settings}>
        {packages.length > 0 && packages.map((item) => {
          return (
            <Card key={item.id} packageName={item.packageName} price={item.price} date={item.tripDate} time={`${item.startingTime} - ${item.startingTime}`} image={item.packageImages} city={item.city}
              data={item}
            />

          )
        })}
      </Slider>
    </div>
  )
}

export default Travel