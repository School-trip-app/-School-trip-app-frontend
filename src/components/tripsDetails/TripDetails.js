import './tripDetails.css';
import { FaDirections, FaRegCalendarAlt, FaRegClock, FaDollarSign, FaMapMarkerAlt, FaStar, FaUsers, FaConciergeBell, FaHospitalUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../../components/navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { setPackId, stateOrder } from '../../store/orders';
import cookies from 'react-cookies';
import { stateAuth, setLoadingOff, setLoadingOn } from '../../store/auth';
import Footer from '../../components/footer/Footer';
import Register from '../register/Register';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import Loader from '../Loader/Loader';

function TripDetails() {

  const toast = useToast();
  const packState = useSelector(stateOrder);
  const stateauth = useSelector(stateAuth);
  const [canBookTrip, setCanBookTrip] = useState(cookies?.load('capabilities')?.includes('canBookTrip'));

  const location = useLocation();
  const dispatch = useDispatch();
  const { state } = location;

  // Function to fetch user capabilities
  const getUser = async () => {
    dispatch(setLoadingOn());
    await axios.get(`https://school-trip-app-backend.onrender.com/user/${cookies.load('userId')}`).then((res) => {
      cookies.save('capabilities', res.data.capabilities);
      setCanBookTrip(res.data.capabilities.includes('canBookTrip'));  // Update component state
      dispatch(setLoadingOff());
    }).catch((err) => {
      console.log(err);
      dispatch(setLoadingOff());
    })
  };

  const Hospitalrefactor = (item) => {
    let hospital = [];
    for (let i = 0; i < item.length; i++) {
      if (item[i].phone !== '') {
        hospital.push(item[i]);
      }
    }

    hospital.sort((a, b) => Number(a.distanceMeter) - Number(b.distanceMeter));
    return hospital.slice(0, 4);
  };

  const handlerBook = () => {
    dispatch(setPackId(state.id));
    toast({
      title: 'Trip Booked.',
      description: "For more information, check your Cart",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const Hospital = Hospitalrefactor(state.Hospitals);
  // useEffect runs once on component mount (indicated by the empty dependency array []), 
  // initializing data and setting up the WebSocket connection.

  // WebSocket connection setup and event handling
  useEffect(() => {
    getUser();  // Initial fetch of user capabilities
    // Creates a new WebSocket connection to the specified server at 'ws://localhost:4006'.
    const ws = new WebSocket('ws://localhost:4006');  // WebSocket server address
    // ws.onopen: Event listener that logs a message when the WebSocket connection opens, 
    // indicating a successful connection.

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      // Sets up a listener for incoming messages from the WebSocket server.
      // const data = JSON.parse(event.data);: Parses the incoming data (assuming it’s in JSON format) and stores it in data.
      const data = JSON.parse(event.data);

      // Check if the event is for an account status update and matches the current user
      if (data.type === 'ACCOUNT_STATUS_UPDATE' && data.payload.userId === cookies.load('userId')) {
        setCanBookTrip(data.payload.newStatus === 'enabledSchool');  // Update the state based on the new status
        if (data.payload.newStatus === 'enabledSchool') {
          toast({
            title: 'Account Status Updated',
            description: "Your account is now enabled to book trips.",
            status: 'info',
            duration: 3000,
            isClosable: true,
          });
        }
      }
    };
    // ws.onclose: Sets up a listener to log when the WebSocket connection is closed,
    //  which could happen if the server disconnects or the component unmounts.
    // Cleaning Up the WebSocket:

    // return () => ws.close();: Ensures the WebSocket connection closes when the component is 
    // unmounted, preventing memory leaks or lingering connections.
    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    // Clean up WebSocket connection on component unmount
    return () => ws.close();
  }, []);
  return (
    <>
      {stateauth.isLogin &&
        <>
          {stateAuth.isLoading && <Loader />}
          <Navbar />
          <div >
            <Carousel>
              {state.packageImages.length > 0 && state.packageImages.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className=" d-block w-100"
                      src={item.imageUrl}
                      alt="slide"
                      style={{ height: "400px" }}
                    />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </div>
          < div className='TripDetails' >
            <div className='TripDetails-body'>
              <h2>{state.packageName}</h2>
              <p>({state.city})</p>
              <div className='TripDetails-body-part2'>
                <div className='TripDetails-body-part2-wicon'>
                </div>
                <div className='TripDetails-body-part2-wicon'>
                  <FaDirections />
                  <p className='title'>Description</p>
                </div>
                <p>{state.packageDiscription}</p>
                <div className='TripDetails-body-part2-wicon'>
                  <FaUsers />
                  <p className='title'>Number of people</p>
                </div>
                <p>{state.numberOfPeople} People</p>
                <div className='TripDetails-body-part2-wicon'>
                  <FaRegCalendarAlt />
                  <p className='title'>Date</p>
                </div>
                <p>{state.tripDate}</p>
                <div className='TripDetails-body-part2-wicon'>
                  <FaConciergeBell />
                  <p className='title'>Meals</p>
                </div>
                <p>{state.meals}</p>
                <div className='TripDetails-body-part2-wicon'>
                  <FaDollarSign />
                  <p className='title'>Price</p>
                </div>
                <p>{state.price} JD/Person</p>
                <div className='TripDetails-body-part2-wicon'>
                  <FaRegClock />
                  <p className='title'>Starting & Ending time</p>
                </div>
                <p>{`${state.startingTime} - ${state.endingTime}`}</p>
                <div className='TripDetails-body-part2-wicon'>
                  <FaMapMarkerAlt />
                  <p className='title'>Pick & Drop points</p>
                </div>
                <p>From Your School To {state.city}</p>
                <div className='TripDetails-body-part2-wicon'>
                  <FaStar />
                  <p className='title'>Rate</p>
                </div>
                <p>{state.rate}</p>
                <div className='TripDetails-body-part2-wicon'>
                  <FaHospitalUser />
                  <p className='title'>Nearest Hospital INFO</p>
                </div>
                <div className='hospital'>

                  {Hospital.length > 0 && Hospital.map((item, index) => {
                    return (
                      <div className='hospital_info' key={index}>
                        <p>{item.phone}</p>
                        <p>{item.distanceMeter}</p>
                        <p>{item.address}</p>
                        <p>{item.name}</p>
                      </div>
                    )
                  })
                  }
                </div>
              </div>
              {canBookTrip && <button onClick={handlerBook}>Book Now</button>}
            </div>
          </div >
          <Footer />
        </>
      }
      {!stateauth.isLogin && <Register />}
    </>
  )
}

export default TripDetails