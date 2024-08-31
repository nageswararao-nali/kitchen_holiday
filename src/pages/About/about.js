import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'

const bdrstyle = {
    borderLeft: '1px solid #ee333a', 
};
function About() {
  return (
    <section>
       <section className="section-slide banner">
        <div className="row">
            <div className="banner position-relative" >
                <img src="assets/images/banner_bg4.png" className="img-fluid"/>
                <div className="banner_title position-absolute">
                    <span className="tit3">ABOUT</span>
                </div>
            </div>
        </div>
    </section>
    <section className="section-welcome p-t-45 p-b-105">
       
            <div className="container">
                <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img src="assets/images/how_4.png" className="img-fluid" width="500"/>

                </div>
                <div className="col-md-6 title_sec m-b-70 p-l-60" style={bdrstyle}> 
                    <span className="sub_title tit4 ">About <br/>Kitchen Holiday</span>
               
                    <p className="tit11 m-t-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
           </div>
        </div>
    </section>
    </section>
    
  );
}

export default About;
