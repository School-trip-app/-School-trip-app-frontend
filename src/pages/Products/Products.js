import React from 'react'
import Products from './productCard'
import './ProductCard.css'
import contents from './content.js'; //fake data

function Product(){
return (
<>

      <section className='top-background'>
        <p>Store </p>
      </section>
      <section className='packages'>
        <div>
          <span className='check'>Grab a special Souvenir to memorize your day</span>
          <p className='upcome'> Souvenirs</p>
        </div>
        
      </section>


<div className='products'>

{contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}


</div>
</>
)

}
export default Product;