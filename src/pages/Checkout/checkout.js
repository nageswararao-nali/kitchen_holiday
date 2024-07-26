import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'

const displaystyle = {
    display: 'none', 
};
const fullwidth = {
    width: '100%', 
};

function Checkout() {
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
                    <div className="delivery_blcok" id="deliveryBlock">
                        <h4 className="mb-3">Delivery Address</h4>
                        <div className="bg-light p-3 form_block">
                            <form className="needs-validation" novalidate="">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="firstName">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                                        <div className="invalid-feedback"> Valid first name is required. </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="lastName">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                                        <div className="invalid-feedback"> Valid last name is required. </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="username">Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                                        <div className="invalid-feedback" style={fullwidth}> Your username is required. </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="email">Email </label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                                    <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                                </div>
                                <div className="mb-3">
                                    <label for="mobile">Mobile </label>
                                    <input type="mobile" className="form-control" id="mobile" placeholder="Enetr your mobile number"/>
                                    <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                                </div>
                                <div className="mb-3">
                                    <label for="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                                    <div className="invalid-feedback"> Please enter your shipping address. </div>
                                </div>
                                <div className="mb-3">
                                    <label for="address2">Address 2 </label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label for="country">Country</label>
                                        <select className="custom-select d-block w-100" id="country" required="">
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                        </select>
                                        <div className="invalid-feedback"> Please select a valid country. </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label for="state">State</label>
                                        <select className="custom-select d-block w-100" id="state" required="">
                                            <option value="">Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div className="invalid-feedback"> Please provide a valid state. </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label for="zip">Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                                        <div className="invalid-feedback"> Zip code required. </div>
                                    </div>
                                </div>
                                <hr className="mb-4"/>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="same-address"/>
                                    <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info"/>
                                    <label className="custom-control-label" for="save-info">Save this information for next time</label>
                                </div> 
                                <hr className="mb-4"/>
                                <Link to="/payment"><span className="btn btn2 btn-lg btn-block"  id="goToPayment">Continue to checkout</span></Link>
                                
                            </form>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>     
    </section>
    </Layout>
    
  );
}

export default Checkout;
