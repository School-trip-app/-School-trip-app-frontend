import React from 'react';
import { FaShoppingCart, FaRegBookmark, FaFireAlt } from 'react-icons/fa';
import './ProductCard.css'
import { useDispatch } from 'react-redux';
import { setProdectId } from '../../store/orders';
import cookies from 'react-cookies';

function ProductCard(props) {
  const dispatch= useDispatch();
  const handlerBook=(id)=>{
    console.log(id);
    dispatch(setProdectId(id))
  }
  return (
    <>
      <div className='productList'>
        <div key={props.id} className='productCard'>
          <img src={props.image} alt='product-img' className='productImage'></img>
          <FaShoppingCart className={"productCard_cart"} />
          <FaRegBookmark className={"productCard_wishlist"} />
          <FaFireAlt className={"productCard_fastSelling"} />

          <div className='productCard_content'>
            <h3 className='productName'>{props.name}</h3>
            <div className='displayStack_1'>
              <div className='productPrice'>${props.price}</div>
              <div className='productSales'>category : {props.category}</div>
            </div>
            <div className='displayStack_2'>
              <p className='productRating'>
                {props.discreption}
              </p>
              {cookies?.load('capabilities').includes('canBookTrip')&&<button id='btn-book' onClick={()=>handlerBook(props.id)}>Book</button>}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductCard;