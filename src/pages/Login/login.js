import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'


function Login() {
  return (
    <Layout>
        <section className="section-welcome p-t-45 p-b-105 ">    
            <div className="container p-t-120">
                <div className="row">
                    <div className="col-md-5">
                    <img src="assets/images/logo_with_leaves.png" alt="Image" className="img-fluid"/>
                    </div>
                    <div className="col-md-7 contents">
                    <div className="row justify-content-center">
                    <div className="col-md-8">
                    <div className="mb-4">
                    <h2 className='form-title m-b-13'>Login</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                    </div>
                    <form action="#" method="post">
                    <div className="form-group first m-b-15">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username"/>
                    <span className="text-danger fs-13 d-none">Please enter username</span>
                    </div>
                    <div className="form-group last mb-4">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password"/>
                    <span className="text-danger fs-13 d-none">Please enter correct Password</span>
                    </div>
                    <div className="d-flex mb-5 align-items-center justify-content-between">
                        <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                        <input type="checkbox" checked="checked"/>
                        <div className="control__indicator"></div>
                        </label>
                        <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                    </div>
                    <div className="d-flex mb-4 flex-column justify-content-between">
                        <input type="submit" value="Login" className="btn btn-block btn_signin m-b-13"/>
                    
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <span className="d-block text-left m-b-13 m-t-13 text-muted text-center">— or login with —</span>
                        <div className="social-login text-center">
                        <a href="#" className="facebook m-r-10">
                            <i className="fa fa-facebook "></i>
                        </a>
                        <a href="#" className="twitter m-r-10">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" className="google m-r-10">
                            <i className="fa fa-google"></i>
                        </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="signup text-center m-t-13">
                        <p>Don't have an account yet?</p>
                        <span className="btn_acc"><Link to="/Signup"> Create new Account</Link></span>
                    </div>
                    </div>
                    </div>
                
                
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

export default Login;
