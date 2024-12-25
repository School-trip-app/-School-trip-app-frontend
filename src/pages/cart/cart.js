import React, { useState, useEffect } from 'react'
import './cart.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { stateOrder, removePackageId, addpriceProduct, addTotalPrice, removepriceProduct, removePhotId, removeProduct, addpricePackage, addpricePhoto, removepricePackage, removepricePhoto } from '../../store/orders';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import cookies from 'react-cookies';
import Payment from '../../components/payment/Payment';
import { stateAuth } from '../../store/auth';
import Register from '../../components/register/Register';
import Loader from '../../components/Loader/Loader';
import { setLoadingOff, setLoadingOn } from '../../store/auth'
function Cart() {
  const state = useSelector(stateOrder);
  const [packag, setpackage] = useState([]);
  const [photographer, setphoter] = useState([]);
  const [product, setprodct] = useState([]);
  const [pay, setPay] = useState(false);
  const stateAut = useSelector(stateAuth);

  let products = [];
  const dispatch = useDispatch();
  const getPackage = async () => {
    dispatch(setLoadingOn());
    await axios.get('https://school-trip-app-backend.onrender.com/package').then((res) => {
      let filterPackage = res.data.find((data) => {
        return data.id === state.packId;
      });
      setpackage(filterPackage);
      dispatch(addpricePackage(filterPackage.price));
      dispatch(setLoadingOff());
    }).catch((err) => {
      dispatch(setLoadingOff());
      console.log(err)
    });
  }
  const getPhotoger = async (id) => {
    dispatch(setLoadingOn());
    await axios.get(`https://school-trip-app-backend.onrender.com/photographer/${id}`).then(res => {
      setphoter(res.data);
      console.log("photage price>>>", res.data.price)
      dispatch(addpricePhoto(res.data.price));
      dispatch(setLoadingOff());

    }).catch(err => {
      console.log(err);
      dispatch(setLoadingOff());

    })
  };

  const getProduct = async () => {
    try {

      if (state.prodectId.length !== 0) {
        dispatch(setLoadingOn());

        await axios.get(`https://school-trip-app-backend.onrender.com/product`).then(res => {
          setprodct(res.data);
        }).then((res) => {
          dispatch(setLoadingOff());

        })
      }
    } catch (err) {
      console.log(err);
      dispatch(setLoadingOff());

    }
  }

  const getProductPrice = async () => {
    try {
      if (state.prodectId.length !== 0) {
        dispatch(setLoadingOn());
        for (let i = 0; i < state.prodectId?.length; i++) {
          await axios.get(`https://school-trip-app-backend.onrender.com/product/${state.prodectId[i]}`).then(res => {
            dispatch(addpriceProduct(res.data.price));
            dispatch(setLoadingOff());


          }).catch(err => {
            console.log(err);
            dispatch(setLoadingOff());

          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }




  useEffect(() => {
    getPackage();
    getPhotoger(state.photId);
    getProduct();
    getProductPrice();
  }, []);

  const deletePackage = () => {
    dispatch(removePackageId());
    setpackage([]);
    dispatch(removepricePackage(0))
  }
  const deletePhoto = () => {
    dispatch(removePhotId());
    setphoter([]);
    dispatch(removepricePhoto(0))
  }
  const deleteProduct = (id, price) => {
    dispatch(removeProduct(id));
    products = products.filter((data) => {
      return data.id !== id;
    });
    dispatch(removepriceProduct(price))
  };
  const sentOrder = async () => {
    const order = {
      photographerId: state.photId,
      medicalIssues: "vcx",
      specialFood: "dsfsdf",
      notes: "Please make sure that we need extra featurs",
      productIds: state.prodectId
    };
    console.log(order);
    await axios.post(`https://school-trip-app-backend.onrender.com/package/order/${cookies.load('userId')}/${state.packId}`, order).then((res) => {
      console.log(res.data);
      setPay(true);
      dispatch(addTotalPrice(state.pricePackage + state.pricePhoto + state.priceProduct.reduce(function (acc, val) { return acc + val; }, 0)))
    }).catch((err) => {
      console.log(err);
    });
  }

  for (let i = 0; i <= state.prodectId.length; i++) {
    let ss = product.filter((dat) => {
      return dat.id === state.prodectId[i];
    })
    products.push(...ss)

  }
  return (
    <>
      {stateAut.isLogin &&
        <>
          {stateAut.isLoading && <Loader />}
          <Navbar />
          <h1 style={{ display: 'block', marginLeft: '30px' }} className='text-title section__padding'>Your trip</h1>
          {pay && <h2 className='text-title section__padding'>Total Price :{state.total} $</h2>}
          {!pay && <div className='cart section__padding'>
            <div>
              <div className='users'>
                {state.packId && <table >
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
                        <button className='delete-button' onClick={deletePackage}>delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                }
              </div>
              <div className='users'>
                {state.photId && <table >
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
                        <button className='delete-button' onClick={deletePhoto}>delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                }
              </div>
              <div className='users'>
                {state.prodectId.length !== 0 && <table >
                  <thead >
                    <tr>
                      <th>product name</th>
                      <th>price</th>
                      <th>category</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  {state.prodectId.length !== 0 && products.map((product) => {
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
                          <button className='delete-button' onClick={() => deleteProduct(product.id, product.price)}>delete</button>
                        </td>
                      </tr>
                    </tbody>
                  })}
                </table>
                }
              </div>
              {state.packId && <button className='btn-sent' onClick={sentOrder}>Order Sent</button>}
            </div>
            <h1 className='price' style={{ fontSize: '30px' }}>Total price ={state.pricePackage + state.pricePhoto + state.priceProduct.reduce(function (acc, val) { return acc + val; }, 0)} $ </h1>
          </div>}
          {pay && <Payment total={state.total} />}
          <Footer />
        </>}
      {!stateAut.isLogin && <Register />}
    </>

  )
}

export default Cart;
