import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Contact from './pages/contact/Contact2';
import Blog from './pages/Blog/Blog';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import TripDetails from './components/tripDetails/TripDetails';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<Events />} path='/events' />
      <Route element={<Blog />} path='/blog' />
      <Route element={<About />} path='/about' />
      <Route element={<Contact />} path='/contact' />
      <Route element={<Register />} path='/register' />
    </Routes>
    <Footer />
    <TripDetails title={'Package El-7ob'} city={'Amman'}
      description={'Mount Nebo is an elevated ridge located in Jordan, approximately 710 metres above sea level. Part of the Abarim mountain range,Mount Nebo is mentioned in the Bible as the place where Moses was granted a view of the Promised Land before his death. The view from thesummit provides a panorama of the West Bank across the Jordan River valley. The city of Jericho is usually visible from the summit,as is Al-quds on a very clear day. The biblical town of Nebo, now known as Khirbet al-Mukhayyat.'}
      date={'20-jun-2022'} people={30} meals={"lunch,dinner"} price={10} rate={4.5} startTime={'10.00am'} endTime={'5:00pm'} pickup={'School'} drop={'home'} images={[]} />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

