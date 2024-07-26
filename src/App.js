import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home/Home';
import Terms from './pages/terms/Terms';
import Privacy from './pages/privacy/Privacy';
import Signup from './pages/Signup/signup';
import Login from './pages/Login/login';
import Menu from './pages/Menu/menu';
import Subscription from './pages/Subscription/subscription';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Checkout from './pages/Checkout/checkout';
import Payment from './pages/Payment/payment';

function App() {
  return (
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/terms"  element={<Terms />} />
        <Route path="/privacy"  element={<Privacy />} />
        <Route path="/signup"  element={<Signup />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/menu"  element={<Menu />} />
        <Route path="/subscription"  element={<Subscription />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/checkout"  element={<Checkout />} />
        <Route path="/payment"  element={<Payment />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    
  );
}

export default App;
