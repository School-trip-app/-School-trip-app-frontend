import React, { useState, useEffect } from 'react'
import './cart.css';
import {MdAttachMoney} from 'react-icons/md'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { stateOrder } from '../../store/orders';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaStar, FaEnvelope } from "react-icons/fa";
import Card from '../Events/card/Card';
import Products from '../Products/productCard';
function Cart() {
  const [packag, setpackage] = useState([]);
  const [photographer, setphoter] = useState([]);
  const [product, setprodct] = useState([]);
  const state = useSelector(stateOrder);
  let products = [];
  const getPackage = async () => {
    await axios.get('https://sophisticated-steel-production.up.railway.app/package').then((res) => {
      let filterPackage = res.data.find((data) => {
        return data.id === state.packId;
      });
      setpackage(filterPackage);
      console.log(packag)
    }).catch((err) => console.log(err));
  }
  const getPhotoger = async (id) => {
    await axios.get(`https://sophisticated-steel-production.up.railway.app/photographer/${id}`).then(res => {
      setphoter(res.data);
    }).catch(err => {
      console.log(err);
    })
  };
  const getProduct = async () => {
    try {
      if (state.prodectId.length !== 0) {
           await axios.get(`https://sophisticated-steel-production.up.railway.app/product`).then(res=>{
            setprodct(res.data)
           });
         
      }
      console.log(products);
    } catch (err) {
      console.log(err);
    }
  }
  for(let i=0;i<=state.prodectId.length;i++){
    let ss=product.filter((dat)=>{
        return dat.id===state.prodectId[i];
    })
    products.push(...ss)
    }
    console.log(products)
  useEffect(() => {
    getPackage();
    getPhotoger(state.photId);
    getProduct();
  }, []);
  return (
    <>
      <Navbar />
      <div className='cart section__padding'>
        {/* {state.photId &&
          <div className='Cards'>
            <div key={photographer.id} className='Card'>
              <img src={photographer.image} alt='Photographers' />
              <h3 className='h1-sb' >{photographer.name}</h3>
              <p className=' icon '><FaEnvelope />{photographer.email}</p>
              <p>{photographer.phoneNumber}</p>
              <p><FaStar />{photographer.rate}</p>
              <div className='btnphoto'>
                    <p className='btn-book-sb1'>{photographer.price} <MdAttachMoney /></p>
                    </div>
            </div>

          </div>
        } */}
        {/* {products && products?.map(contents => (
          <Products
            key={contents.id}
            id={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            category={contents.category}
            discreption={contents.discreption}
          />
        ))} */}
      <div className='users'>
      <div className='text'>
        <h1 className='text-title'>Your Order</h1>
      </div>
     {state.packId&&<table >
        <thead >
          <tr>
            <th>package name</th>
            <th>city</th>
            <th>location name</th>
            <th>trip Date</th>
            <th>price</th>
            <th>rate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody >
            <tr>
              <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h5 style={{ marginLeft: '10px' }}>{packag?.packageName}</h5>
              </td>
              <td>
                {packag?.city}
              </td>
              <td>
                {packag?.locationName}
              </td>
              <td>
              {packag?.tripDate}
              </td>
             
              <td>
              {packag?.price}
              </td>
              <td>
              {packag?.rate}
              </td>
              <td>
                <button className='delete-button'>delete</button>
              </td>
            </tr>
          </tbody>
      </table>
}
      </div>
      <div className='users'>
     {state.photId&&<table >
        <thead >
          <tr>
            <th>photographer name</th>
            <th>email</th>
            <th>phone number</th>
      
            <th>price</th>
            <th>rate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody >
            <tr>
              <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h5 style={{ marginLeft: '10px' }}>                {photographer?.name}</h5>
              </td>
              <td>
                {photographer?.email}
              </td>
              <td>
              {photographer?.phoneNumber}
              </td>
              <td>
              {photographer?.price}
              </td>
              <td>
              {photographer?.rate}
              </td>
           
              <td>
                <button className='delete-button'>delete</button>
              </td>
            </tr>
          </tbody>
      </table>
}
      </div>
      <div className='users'>
     {state.prodectId&&<table >
        <thead >
          <tr>
            <th>product name</th>
            <th>price</th>
            <th>category</th>
            <th>Delete</th>
          </tr>
        </thead>
       {products&&products.map((product)=>{
       return <tbody >
       <tr>
         <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <h5 style={{ marginLeft: '10px' }}>{product?.name}</h5>
         </td>
         <td>
         {product?.price}
         </td>
         <td>
         {product?.category}
         </td>
    
         <td>
           <button className='delete-button'>delete</button>
         </td>
       </tr>
     </tbody>

       })} 
     
      </table>
}
      </div>
      </div>
      <Footer />
    </>

  )
}

export default Cart
// const getProduct = async () => {
//   try {
//     if (state.prodectId.length !== 0) {
//       for (let i = 0; i < state.prodectId?.length; i++) { 4 ,5
//          await axios.get(`https://sophisticated-steel-production.up.railway.app/product/${state.prodectId[i]}`).then(res=>{
//           products.push({
//             id:res.data.id,
//             name: res.data.name,
//             image: res.data.image,
//             price: res.data.price,
//             discreption:res.data.discreption,
//             category: res.data.category,

//            })
//          })
       
//       }
//     }
//     console.log(products);
//   } catch (err) {
//     console.log(err);
//   }
//  }