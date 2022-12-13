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
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Register from  './components/register/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Navbar/>
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<Events />} path='/events' />
      <Route element={<Blog />} path='/blog' />
      <Route element={<About />} path='/about' />
      <Route element={<Contact />} path='/contact' />
      <Route element={<Register/>} path='/register'/>
    </Routes>
    <Footer/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
