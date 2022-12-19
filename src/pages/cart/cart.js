import React ,{useState, useEffect}from 'react'
import './cart.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { stateOrder } from '../../store/orders';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaStar, FaEnvelope } from "react-icons/fa";
import Card from '../Events/card/Card';
import PhotographersData from '../Photographers/PhotographersData';
import content from '../Products/content';
import Products from '../Products/productCard';
function Cart() {
  const [packag, setpackage]=useState([])
  const state=useSelector(stateOrder);
  let photographer=PhotographersData.find((data)=>data.id===state.photId);
  let products=content.filter((data,index)=>data.id===state.prodectId[index]);
  const getPackage=async()=>{
    await axios.get('https://sophisticated-steel-production.up.railway.app/package').then((res)=>{
      let filterPackage=res.data.find((data)=>{
        return data.id===state.packId;
      });
      setpackage(filterPackage);
      console.log(packag)
    }).catch((err)=>console.log(err));
  }
  // const getPhotoger=async()=>{
  //   await axios.get() 
  // }
  useEffect(()=>{
   getPackage();
  },[]);
  return (
    <>
      <Navbar />
      <div className='cart section__padding'>
      {state.packId&& <Card key={packag.id} packageName={packag.packageName} price={packag.price} date={packag.tripDate} time={`${packag.startingTime} - ${packag.startingTime}`} image={packag.packageImages} city={packag.city}
              data={packag}
            />
      }
      {photographer&&
         <div className='Cards'>
           <div key={photographer.id} className='Card'>
             <img src={photographer.image} alt='Photographers' />
             <h3 className='h1-sb' >{photographer.name}</h3>
             <p className=' icon '><FaEnvelope />{photographer.email}</p>
             <p>{photographer.phoneNumber}</p>
             <p><FaStar />{photographer.rate}</p>
           </div>
      
       </div>
      }
      {products&&products.map(contents => (
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
      <button>Order Sent</button>
      <Footer />
    </>

  )
}

export default Cart
