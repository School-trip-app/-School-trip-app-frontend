import React ,{useEffect}from 'react';
import './Photographers.css';
import { FaStar, FaEnvelope } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import { useDispatch,useSelector } from 'react-redux';
import { setPhotId } from '../../store/orders';
import { getphotographerAsync, selectPhotographer } from "../../store/Photographers-re"
import {MdAttachMoney} from 'react-icons/md'

function Photographers() {
  const dispatch = useDispatch();
  const handlerBook = (id) => {
    console.log(id);
    dispatch(setPhotId(id));
  }
  const photographers = useSelector(selectPhotographer);

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
        <section className='packages'>
          <div>
            <span className='check'>Photographers</span>
            <p className='upcome'>Best way to keep memories by photos </p>
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
                    <p className='p-email'>
                      <FaEnvelope />{item.email}
                    </p>
                    <p>{item.phoneNumber}</p>
                    <p className='ratediv'>
                      <FaStar style={{ marginBottom: 'auto' ,marginTop: 'auto' }}
                       />{item.rate}
                    </p>
                    <div className='btnphoto'>
                    <p className='btn-book-sb1'>{item.price} <MdAttachMoney /></p>
                    <button className='btn-book-sb' onClick={()=>handlerBook(item.id)}>Book</button>
                    </div>
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
// onClick={()=>handlerBook(PhotographersData.id)}