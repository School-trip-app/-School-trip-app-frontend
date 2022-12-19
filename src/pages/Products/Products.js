import React from 'react'
import Products from './productCard'
import './ProductCard.css'
import contents from './content.js'; //fake data
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
function Product() {
  return (
    <>
    <Navbar/>
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
        {contents.map(contents => (
          <Products
            key={contents.id}
            id={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            totalSales={contents.totalSales}
            timeLeft={contents.timeLeft}
            rating={contents.rating}
          />
        ))}
      </div>
      <Footer/>
    </>
  )

}
export default Product;