import React from 'react'
import { useEffect } from 'react'
import './ProductCard.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'

import { useSelector, useDispatch } from "react-redux";
import { getproductAsync, selectProduct } from "../../store/products-re"

import { FaShoppingCart } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'

function Product() {



  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  console.log(products);


  useEffect(() => {
    dispatch(getproductAsync());
  }, [dispatch]);
  return (
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

      <div className='row'>
        {products.map(item => (

          <div className="column">
            <div className="card">
              <FaShoppingCart className='cart' size={35} />

              <div className='product-name'>
                <p className='nameproduct'>{item.name}</p>
                <p className='categoryproduct'>{item.category}</p>
              </div>
              <img className='imageproduct' src={item.image} alt='Photographers' />
              <p className='discreptionproduct'>{item.discreption}</p>
              <p className='priceproduct'>{item.price} <MdAttachMoney /></p>
            </div>
          </div>

        ))}
      </div>
      <Footer />
    </>
  )

}

export default Product;