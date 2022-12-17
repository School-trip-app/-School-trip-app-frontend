import React from 'react';
import { useEffect } from 'react';
import './Photographers.css';
import { FaStar, FaStarHalfAlt, FaEnvelope } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'


import { useSelector, useDispatch } from "react-redux";
import { addphotographerAsync, getphotographerAsync, selectPhotographer } from "../../store/Photographers-re"


function Photographers() {


  const dispatch = useDispatch();
  const photographers = useSelector(selectPhotographer);

  console.log(photographers);

  const add = (e) => {
    e.preventDefault();

    dispatch(addphotographerAsync({
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value,
      phoneNumber: e.target.phoneNumber.value,
      rate: e.target.rate.value,
      email: e.target.email.value
    }
    ));
  };

  useEffect(() => {
    dispatch(getphotographerAsync());
  }, [dispatch]);




  return (
    <>
      <Navbar />
      <div>
        <section className='top-background-photographer'>
          <p>Photographers </p>
        </section>

        <form className='formproduct' onSubmit={(e) => { add(e) }}>

          <div className='col-1'>
            <input className='inputproduct' type="text" name="name" placeholder='Name of Photographer :' />
            <input className='inputproduct' type="number" name="phoneNumber" placeholder='PhoneNumber of Photographer :' />
            <input className='inputproduct' type="text" name="email" placeholder='Email of Photographer :' />
          </div>

          <div className='col-2'>

            <input className='inputproduct' type="number" name="price" placeholder='price :' />
            <input className='inputproduct' type="text" name="image" placeholder='image link of Photographer :' />
            <input className='inputproduct' type="number" name="rate" placeholder='rate of Photographer :' />
            <input className='submitproduct' type="submit" value="Submit" />

          </div>

        </form>
        
        <section className='packages'>
          <div>
            <span className='check'>Photographers</span>
            <p className='upcome'>Best way to keep memories   by photos of course idiots </p>
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
                    <p className=' icon '><FaEnvelope />{item.email}</p>
                    <p>{item.phoneNumber}</p>
                    <p><FaStar />{item.rate}</p>
                    <button className='btn-book-sb'>Book</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Photographers;