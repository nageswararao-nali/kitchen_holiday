import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';

function Signup() {
  return (
    <Layout>
        <section className="section-welcome p-t-45 p-b-105">    
        <div className="container p-t-120">
            <div className="row">
                <div className="col-md-5">
                    <img src="assets/images/logo_with_leaves.png" alt="Image" className="img-fluid"/>
                </div>
                <div className="col-md-7 contents">
                <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="signup-form">
                        <h2 className="form-title m-b-13">Sign up</h2>
                        <form>
                            <div className="row">
                              <div className="col-md-6 mb-4">
                                <div data-mdb-input-init className="form-outline">
                                  <input type="text" id="form3Example1" className="form-control" placeholder="First name" />
                                </div>
                                <span className="text-danger fs-13 d-none">Please enter first name</span>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div data-mdb-input-init className="form-outline">
                                  <input type="text" id="form3Example2" className="form-control" placeholder="Last name"/>
                                </div>
                                <span className="text-danger fs-13 d-none">Please enter last name</span>
                              </div>
                            </div>
              
                            <div data-mdb-input-init className="form-outline mb-4">
                              <input type="email" id="form3Example3" className="form-control" placeholder="Email address" />
                              <span className="text-danger fs-13 d-none">Please enter valid Email id</span>
                            </div>
                            
                             <div data-mdb-input-init className="form-outline mb-4">
                                <input type="mobile" id="form3Example4" className="form-control" placeholder="Mobile number" />
                                <span className="text-danger fs-13 d-none">Please enter mobile number</span>
                              </div>
              
                            <div data-mdb-input-init className="form-outline mb-4">
                              <input type="password" id="form3Example5" className="form-control" placeholder="Password"/>
                              <span className="text-danger fs-13 d-none">Please enter Password</span>
                            </div>
              
                            <div className="form-check d-flex justify-content-center mb-4">
                              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                              <label className="form-check-label" for="form2Example33">
                                Subscribe to our newsletter
                              </label>
                            </div>
              
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn_signin btn-block mb-4">
                              Sign up
                            </button>
              
                            <div className="text-center">
                              <p>or sign up with:</p>
                              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-facebook-f"></i>
                              </button>
              
                              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-google"></i>
                              </button>
              
                              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-twitter"></i>
                              </button>
              
                              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-github"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                </div>
                </div>
                </div>
                </div>               
        </div>
        </section>
    </Layout>
    
  );
}

export default Signup;
