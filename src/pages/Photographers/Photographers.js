import React, { useEffect } from 'react';
import './Photographers.css';
import { FaStar, FaEnvelope } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { setPhotId } from '../../store/orders';
import { getphotographerAsync, selectPhotographer } from "../../store/Photographers-re"
import { MdAttachMoney } from 'react-icons/md'
import cookies from 'react-cookies';
import { stateAuth, setLoadingOff, setLoadingOn } from '../../store/auth';
import Register from '../../components/register/Register';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import Loader from '../../components/Loader/Loader';
function Photographers() {
  const toast = useToast()

  const dispatch = useDispatch();
  const handlerBook = (id) => {
    toast({
      title: 'Photographer Booked.',
      description: "for more information check your Cart",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })

    console.log(id);
    dispatch(setPhotId(id));
  }

  const photographers = useSelector(selectPhotographer);
  const state = useSelector(stateAuth);
  const getUser = async () => {
    dispatch(setLoadingOn());
    await axios.get(`http://localhost:4006/user/${cookies.load('userId')}`).then((res) => {
      cookies.save('capabilities', res.data.capabilities);
      dispatch(setLoadingOff())
    }).catch((err) => {
      console.log(err);
      dispatch(setLoadingOff());
    })
  }
  useEffect(() => {
    getUser();
  }, []);


  useEffect(() => {
    dispatch(getphotographerAsync());
  }, [dispatch]);

  return (
    <>
      {state.isLogin &&
        <>
          {state.isLoading && <Loader />}
          <Navbar />
          <div>
            <section className='top-background-photographer'>
              <p>Photographers </p>
            </section>
            <section className='packages'>
              <div>
                <span className='check'>Photographers</span>
                <p className='upcome'>Best way to keep memories by photos </p>
              </div>
            </section>
            <div>
              <section className='section-sb'>
                <div className='container'>
                  <h3>Photographers</h3>
                  <div className='Cards'>
                    {photographers.map((item) => (
                      <div key={item.id} className='Card'>
                        <img src={item.image} alt='Photographers' />
                        <h3 className='h1-sb' >{item.name}</h3>
                        <p className='p-email'>
                          <FaEnvelope />{item.email}
                        </p>
                        <p>{item.phoneNumber}</p>
                        <p className='ratediv'>
                          <FaStar style={{ marginBottom: 'auto', marginTop: 'auto' }}
                          />{item.rate}
                        </p>
                        <div className='btnphoto'>
                          <p className='btn-book-sb1'>{item.price} <MdAttachMoney /></p>
                          {cookies?.load('capabilities').includes('canBookTrip') && <button className='btn-book-sb' onClick={() => handlerBook(item.id)}>Book</button>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <Footer />
        </>
      }
      {!state.isLogin && <Register />}
    </>
  );
}
export default Photographers;
