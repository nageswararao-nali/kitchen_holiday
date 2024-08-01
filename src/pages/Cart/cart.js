import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {DateRangePicker} from "@nextui-org/react";



function Cart() {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
        <div className='container p-t-120'>
        <Breadcrumb className='p-t-30'>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
               {/*  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    My account
                </Breadcrumb.Item> */}
            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
        <div className="title-review t-center m-b-2 title_sec">
            <h3 className="tit10 t-center p-l-20 p-r-15 p-t-3">My Meals</h3>
            
        </div>
        <div class="container pb-5 mb-2 p-t-30">
  
    <div class="cart-item d-md-flex justify-content-between">
        <div class="px-3 my-3">
            <a class="cart-item-product" href="#">
                <div class="cart-item-product-thumb"><img src="assets/images/m_plate3.png" alt="Product"/></div>
                <div class="cart-item-product-info">
                    <h4 class="cart-item-product-title">Veg Meal (Trail)</h4>{/* <span><strong>Type:</strong> Mirrorless</span><span><strong>Color:</strong> Black</span> */}
                </div>
            </a>
        </div>      
       
        <div class="px-3 my-3 text-center">
            <div class="cart-item-label">Choose your plan</div>
            <div class="count-input position-relative">
                <span className='position-absolute end-0 top-50 translate-middle d-arrow'><i class="bi bi-chevron-down"></i></span>
                <select class="form-control">
                    <option>Trail plan (3days)</option>
                    <option>1 Week</option>
                    <option>2 Weeks</option>
                    <option>3 Weeks</option>
                    <option>1 Month (30 days)</option>
                    <option>Custom dates</option>
                </select>
            </div>
        </div>
        <div class="px-3 my-3 text-center">
            <div class="cart-item-label">Quantity</div>
            {/* <div class="count-input position-relative">
                <span className='position-absolute end-0 top-50 translate-middle d-arrow'><i class="bi bi-chevron-down"></i></span>
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div> */}
            <div className="added_count" ><span className="count_minus">-</span><span className="count_total">1</span><span className="count_plus">+</span></div>
        </div>
        <div class="px-3 my-3 text-center">
            <div class="cart-item-label">Subtotal</div><span class="text-xl font-weight-medium">$910.00</span>
        </div>
    </div>
    {/* <DateRangePicker 
      label="Stay duration" 
      className="max-w-xs" 
    /> */}
    <div class="d-sm-flex justify-content-between align-items-center text-center text-sm-left px-4">
        <form class="row py-2">
            <div className='col-md-6 px-0'>
                <label class="sr-only">Coupon code</label>
                <input class="form-control form-control-sm my-2 mr-3" type="text" placeholder="Coupon code" required=""/>
            </div>
            <div className='col-md-6 px-0'>
                <button class="btn btn-style-1 btn-secondary btn-sm my-2 mx-auto mx-sm-0" type="submit">Apply Coupon</button>
            </div>
        </form>
        <div class="py-2"><span class="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">Subtotal:</span><span class="d-inline-block align-middle text-xl font-weight-medium">$188.50</span></div>
    </div>
    <hr class="my-2"/>
    <div class="row pt-3 pb-5 mb-2">
        <div class="col-sm-6 mb-3"></div>
        <div class="col-sm-6 mb-3"><a class="btn2 btn-style-1 btn-primary btn-block" href="/checkout"><i class="fe-icon-credit-card"></i>&nbsp;Checkout</a></div>
    </div>
    
       
    </div>
        </div>
    </Layout>
    
  );
}

export default Cart;
