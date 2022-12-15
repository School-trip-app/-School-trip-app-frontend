import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Contact from './pages/contact/Contact2';
import Blog from './pages/Blog/Blog';

import Register from './components/register/Register';
import { Provider } from 'react-redux';
import store from './store/store';
import Photographers from './pages/Photographers/Photographers';
import Product from './pages/Products/Products';
import TripDetails from './components/tripsDetails/TripDetails';
import SpecialTrips from './components/specialTrips/SpecialTrips';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<App />} path="/home" />
        <Route element={<Events />} path='/events' />
        <Route element={<About />} path='/about' />
        <Route element={<Blog />} path='/blog' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Register />} path='/' />
        <Route element={<Photographers />} path='/photographers' />
        <Route element={<Product />} path='/store' />
        <Route element={<TripDetails />} path='/tripdetails' />
        <Route element={< SpecialTrips/>} path='/specialtrips' />
        
      </Routes>
    </Router>
  </Provider >

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
