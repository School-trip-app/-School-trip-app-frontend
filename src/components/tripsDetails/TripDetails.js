import './tripDetails.css';
import { FaDirections, FaRegCalendarAlt, FaRegClock, FaDollarSign, FaMapMarkerAlt, FaStar, FaUsers, FaConciergeBell, FaHospitalUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../../components/navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { setPackId, stateOrder } from '../../store/orders';
import cookies from 'react-cookies';
import { stateAuth } from '../../store/auth';
import Footer from '../../components/footer/Footer';
import Register from '../register/Register';
import axios from 'axios';
import React,{useEffect} from 'react'
function TripDetails() {
  const packState = useSelector(stateOrder);
  const stateauth=useSelector(stateAuth);

  console.log(packState)
  const location = useLocation();
  const dispatch = useDispatch();

  const { state } = location;

  const getUser = async () => {
    await axios.get(`https://sophisticated-steel-production.up.railway.app/user/${cookies.load('userId')}`).then((res) => {
        cookies.save('capabilities',res.data.capabilities);
    });
}
  const Hospitalrefactor = (item) => {
    let hospital = []
    for (let i = 0; i < item.length; i++) {
      if (item[i].phone !== '') {
        hospital.push(item[i])
      }
    }

    hospital.sort(function (a, b) {
      if (Number(a.distanceMeter) > Number(b.distanceMeter)) return 1;
      if (Number(a.distanceMeter) < Number(b.distanceMeter)) return -1;
      return 0;
    });


    return hospital.slice(0, 4);
  }

  const handlerBook = () => {
    dispatch(setPackId(state.id));
  };

  const Hospital = Hospitalrefactor(state.Hospitals)
 useEffect(() => {
   getUser()
 }, [])
  return (
    <>
    {stateauth.isLogin&&
    <>
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
          {cookies?.load('capabilities').includes('canBookTrip') && <button onClick={handlerBook}>Book Now</button>}
        </div>
      </div >
      <Footer/>
    </>
    }
    {!stateauth.isLogin&&<Register/>}
    </>
  )
}

export default TripDetails