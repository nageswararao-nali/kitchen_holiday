import React, {useState, useEffect, useCallback } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const displaystyle = {
    display: 'none', 
};
const fullwidth = {
    width: '100%', 
};
const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
function Address() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <Layout>
       <div className="container p-t-135"> 
            <div className="row">
                
                <div className="col-md-6 ">
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
                                <Link to="/myaccount"><span className="btn btn2 btn-lg btn-block"  id="goToPayment">Save Address</span></Link>
                                
                            </form>
                        </div>
                    </div>
                  
                </div>
                <div className='col-md-6'>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                        />
                    </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    
  );
}

export default Address;
