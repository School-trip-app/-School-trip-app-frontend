import React from 'react';
import Card from '../../pages/Events/card/Card';
import Video from '../../components/videotour/Video'
import './trip.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { stateAuth } from '../../store/auth';
import Register from '../../components/register/Register';
import { useSelector, useDispatch } from "react-redux";
import { getpackagesAsync, selectpackages } from '../../store/package-re';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';


function Trips() {

  const state = useSelector(stateAuth);


  const dispatch = useDispatch();
  const packages = useSelector(selectpackages);
  if (packages.length > 0) {
    console.log(packages);
  }



  useEffect(() => {
    dispatch(getpackagesAsync());
  }, [dispatch]);


  return (
    <>
      {state.isLogin &&
        <>
          <Navbar />
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
                {packages.length > 0 && packages.map((item) => {
                  return (
                    <Card key={item.id} packageName={item.packageName} price={item.price} date={item.tripDate} time={`${item.startingTime}` + ' - ' + `${item.startingTime}`} image={item.packageImages} city={item.city}
                      data={item}
                    />

                  )

                })}
              </div>
            </section>
            <Video />
          </div>
          <Footer />
        </>}
      {!state.isLogin && <Register />}
    </>

  )
}

export default Trips
