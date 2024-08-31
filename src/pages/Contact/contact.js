import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <section>
        <section className="section-slide banner">
        <div className="row">
            <div className="banner position-relative" >
                <img src="assets/images/banner_bg4.png" className="img-fluid"/>
                <div className="banner_title position-absolute">
                    <span className="tit3">CONTACT US</span>
                </div>
            </div>
        </div>
    </section>
    <section className="section-welcome p-t-45 p-b-105">    
        <div className="container p-t-120">
            <div className="row">
                <div className="col-md-5 title_sec">
                    <span className="sub_title tit4-1 ">Contact Us</span>
                    <h3 className="tit4-1 m-b-35 m-t-5">Get In Touch!</h3>
                    <p className="txt6 m-t-13">We are here to answer any questions you may have about Kitchen Holiday and its services. Reach out to us and we’ll respond as soon as we can.</p>
                    <address className='m-t-13'><i className="fa fa-phone"></i>
                        <b>+91-9999 999 999<br/>                        
                        <i className="fa fa-envelope"></i>
                        help@kitchenholiday.com <br/>
                        
                        <i className="fa fa-map-marker"></i>
                        8th floor, 379 Hudson St, New York, NY 10018</b></address>
                </div>
                <div className="col-md-7 contents">
                <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="signup-form contact_form">
                        <form>
                                <div data-mdb-input-init className="form-outline mb-4" >
                                  <input type="text" id="form3Example1" className="form-control" placeholder="Name" />
                                </div>
                             
              
                            <div data-mdb-input-init className="form-outline mb-4">
                              <input type="email" id="form3Example3" className="form-control" placeholder="Email address" />
                            </div>
                             <div data-mdb-input-init className="form-outline mb-4">
                                <input type="mobile" id="form3Example4" className="form-control" placeholder="Mobile number" />
                              </div>
              
                            <div data-mdb-input-init className="form-outline mb-4">
                              <textarea name="message" id="form3Example5" placeholder="Message" className="form-control"></textarea>
                            </div>
              
                          
              
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn_signin btn-block mb-4">
                              Submit
                            </button>
              
                        
                          </form>
                        </div>
                </div>
                </div>
                </div>
                </div>               
        </div>
    </section>
    </section>
    
  );
}

export default Contact;
