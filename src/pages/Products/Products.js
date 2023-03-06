import React, { useEffect } from 'react'
import Products from './productCard'
import './ProductCard.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import { useSelector, useDispatch } from "react-redux";
import { getproductAsync, selectProduct } from "../../store/products-re"
import { stateAuth } from '../../store/auth';
import Register from '../../components/register/Register';
import axios from 'axios';
import cookies from 'react-cookies';

function Product() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const state = useSelector(stateAuth);

  useEffect(() => {
    dispatch(getproductAsync());
  }, [dispatch]);
 
  const getUser = async () => {
    await axios.get(`http://localhost:4005/user/${cookies.load('userId')}`).then((res) => {
        cookies.save('capabilities',res.data.capabilities);
    });
}
  useEffect(()=>{
    getUser()
  },[]);
  return (
    <>
    
    {state.isLogin&&
    <>
    <Navbar />
      <section className='top-background-product'>
        <p>Store </p>
      </section>
      <section className='packages'>
        <div>
          <span className='check'>Grab a special Souvenir to memorize your day</span>
          <p className='upcome'> Souvenirs</p>
        </div>
      </section>
      <div className='products section__padding'>
        {products&&products.map(contents => (
          <Products
            key={contents.id}
            id={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            category={contents.category}
            discreption={contents.discreption}
          />
        ))}
      </div>
      <Footer />
       </>
       }
       {!state.isLogin&&<Register/>}
    </>
  )

}
export default Product;