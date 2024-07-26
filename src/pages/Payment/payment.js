import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';


const fullwidth = {
    width: '100%', 
};

function Payment() {
  return (
    <Layout>
        <section className="section-slide banner">
        <div className="row">
            <div className="banner position-relative" >
                <img src="assets/images/banner_bg4.png" className="img-fluid"/>
                <div className="banner_title position-absolute">
                    <span className="tit3">Checkout</span>
                </div>
            </div>
        </div>
    </section>
    <section className="section-welcome p-t-45 p-b-105">  
        <div className="container"> 
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Order Summary</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3 ">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Product name</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$12</span>
                        </li>
                       
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">-$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>
                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-8 order-md-1">
                   
                    <div className="payment_blcok" id="paymentBlock" >
                        <h4 className="d-block mb-3">Payment Method</h4>
                        <div className="card">

                       
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <h2 className="mb-0 w-100">
                                <button className="btn btn-light btn-block text-left collapsed rounded-0 border-bottom-custom w-100" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <div className="d-flex align-items-center justify-content-between">

                                    <span>Paypal</span>
                                    <img src="https://i.imgur.com/7kQEsHU.png" width="30"/>
                                    
                                    </div>
                                </button>
                                </h2></Accordion.Header>
                                <Accordion.Body>
                                <input type="text" className="form-control" placeholder="Paypal email"/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h2 className="mb-0 w-100">
                                <button className="btn btn-light btn-block text-left p-3 rounded-0 w-100" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <div className="d-flex align-items-center justify-content-between">

                                    <span>Credit card</span>
                                    <div className="icons">
                                        <img src="https://i.imgur.com/2ISgYja.png" width="30"/>
                                        <img src="https://i.imgur.com/W1vtnOV.png" width="30"/>
                                        <img src="https://i.imgur.com/35tC99g.png" width="30"/>
                                        <img src="https://i.imgur.com/2ISgYja.png" width="30"/>
                                    </div>
                                    
                                    </div>
                                </button>
                                </h2></Accordion.Header>
                                <Accordion.Body>
                                
                                <span className="font-weight-normal card-text">Card Number</span>
                                <div className="input pos-relative">

                                    <i className="fa fa-credit-card"></i>
                                    <input type="text" className="form-control" placeholder="0000 0000 0000 0000"/>
                                    
                                </div> 

                                <div className="row mt-3 mb-3">

                                    <div className="col-md-6">

                                    <span className="font-weight-normal card-text">Expiry Date</span>
                                    <div className="input pos-relative">

                                        <i className="fa fa-calendar"></i>
                                        <input type="text" className="form-control" placeholder="MM/YY"/>
                                        
                                    </div> 
                                    
                                    </div>


                                    <div className="col-md-6">

                                    <span className="font-weight-normal card-text">CVC/CVV</span>
                                    <div className="input pos-relative">

                                        <i className="fa fa-lock"></i>
                                        <input type="text" className="form-control" placeholder="000"/>
                                        
                                    </div> 
                                    
                                    </div>
                                    

                                </div>

                                <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                                
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    </section>
    </Layout>
    
  );
}

export default Payment;
