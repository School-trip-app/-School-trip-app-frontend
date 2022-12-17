import React, { useEffect } from 'react'
import Products from './productCard'
import './ProductCard.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'


import './ProductCard.css'
import { useSelector, useDispatch } from "react-redux";
import { addproductAsync, getproductAsync, selectProduct } from "../../store/products-re"





function Product() {




  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  console.log(products);

  const add = (e) => {
    e.preventDefault();

    dispatch(addproductAsync({
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value,
      discreption: e.target.discreption.value,
      category: e.target.category.value
    }
    ));
  };

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


          <form className='formproduct' onSubmit={(e) => { add(e) }}>

            <div className='col-1'>
              <input className='inputproduct' type="text" name="name" placeholder='Name of product :' />
              <input className='inputproduct' type="text" name="discreption" placeholder='discreption of product :' />
              <input className='inputproduct' type="number" name="price" placeholder='price of product :' />
            </div>

            <div className='col-2'>

              <div className='selectproduct' >
              <label className='inputproduct'  for="category">Category:</label>
              <select className='inputproduct' id="category">
                <option value="sea">sea</option>
                <option value="desert">desert</option>
                <option value="mountain">mountain</option>
              </select>
              </div>

              <input className='inputproduct' type="text" name="image" placeholder='image link of product :' />
              <input  className='submitproduct' type="submit" value="Submit" />

            </div>

          </form>

        <div>
          <span className='check'>Grab a special Souvenir to memorize your day</span>
          <p className='upcome'> Souvenirs</p>
        </div>
      </section>
      <div className='products'>
        {products.map(item => (
          <Products
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            totalSales={item.totalSales}
            timeLeft={item.timeLeft}
            rating={item.rating}
          />
        ))}
      </div>
      <Footer />
    </>
  )

}
export default Product;