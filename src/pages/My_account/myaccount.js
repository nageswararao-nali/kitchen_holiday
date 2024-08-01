import React, {useState, useEffect} from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';



const heighstyle = {
    height: '5px', 
};
const profile = () => {
  // alert("Great Shot!");
  
  };


function Myaccount() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div className='container p-t-120'>
        <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
               {/*  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    My account
                </Breadcrumb.Item> */}
            <Breadcrumb.Item active>My account</Breadcrumb.Item>
        </Breadcrumb>
        <div className="title-review t-center m-b-2 title_sec">
            {/* <span className="sub_title tit4 p-l-15 p-r-15">My Account</span> */}
            <h3 className="tit10 t-center p-l-20 p-r-15 p-t-3">My Account</h3>
            {/* <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated " data-appear="zoomIn">
                <img src="assets/images/avatar-01.webp" alt="IGM-AVATAR" />
            </div> */}
        </div>
        <div className="row gutters-sm m-b-30">
           
        <div className="profile-nav col-md-3">
      <div className="panel">
          <div className="user-heading round">
              <a href="#">
                <img src="assets/images/avatar-01.webp" alt="IGM-AVATAR"/>
              </a>
              <h1>Marie Simmons</h1>
              <p className="text-white">marie@theEmail.com</p>
          </div>

          <ul className="nav nav-pills nav-stacked">
              <li className='active' onClick={profile}><a href="#"> <i className="fa fa-user"></i> Profile</a></li>
              <li><a href="#"> <i className="fa fa-calendar"></i> Delivery Addresses <span className="label label-warning pull-right r-activity">9</span></a></li>
              <li><a href="#"> <i className="fa fa-edit"></i> Wallet details</a></li>
              <li><a href="#"> <i className="fa fa-edit"></i> Wallet history</a></li>
              <li><a href="#"> <i className="fa fa-edit"></i> Booking history</a></li>
          </ul>
      </div>
  </div>
 
   <div className="profile-info col-md-9" >
   
   <div className="card mb-3  ">
                        <div className="d-address">
                        <span className="sub_title  p-l-15 p-r-15">Profile</span>
                        </div>
                        <div className='p-4'>
                        <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <span>Kenneth Valdez</span> 
                          <div data-mdb-input-init className="form-outline d-none">
                            <input type="text"  className="form-control" placeholder="Name" />
                          </div> 
                          <a href="#" className='float-end'><i className="bi bi-pencil"></i> Edit</a>
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <span>fip@jukmuh.al</span>
                          <div data-mdb-input-init className="form-outline d-none">
                            <input type="email" id="form3Example3" className="form-control" placeholder="Email address" />
                            <span className="text-danger fs-13 d-none">Please enter valid Email id</span>
                          </div>
                          <a href="#" className='float-end'><i className="bi bi-pencil"></i> Edit</a>
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                         <span> (320) 380-4539</span>
                         <div data-mdb-input-init className="form-outline d-none">
                            <input type="mobile" id="form3Example4" className="form-control" placeholder="Mobile number" />
                            <span className="text-danger fs-13 d-none">Please enter mobile number</span>
                          </div>
                          <a href="#" className='float-end'><i className="bi bi-pencil"></i> Edit</a>
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">City</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                           <span>San Francisco</span>
                           <a href="#" className='float-end'><i className="bi bi-pencil"></i> Edit</a>
                        </div>
                      </div>
                      <hr/>
                      {/* <div className="row">
                        <div className="col-sm-12">
                          <a className="btn btn-info text-white"  href="#">Edit</a>
                        </div>
                      </div> */}
                        </div>
                        
                    </div> 
                   
                    <div className="card mb-3  ">
                      <div className="d-address">
                        <span className="sub_title  p-l-15 p-r-15">Delivery Addresses</span>
                      </div>
                      <div className='p-4'>
                        <div className="text-muted m-b-30">
                            <div className='d-flex justify-content-between'><h5 className="font-size-16 mb-3"><b>Lunch (Default)</b></h5><a href="#"><i className="bi bi-pencil"></i> Edit</a></div>
                            <h5 className="font-size-15 mb-2">Preston Miller</h5>
                            <p className="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                            <p className="mb-1">PrestonMiller@armyspy.com</p>
                            <p>001-234-5678</p>
                        </div>
                        <div className="text-muted m-b-30">
                        <div className='d-flex justify-content-between'><h5 className="font-size-16 mb-3"><b>Dinner</b></h5><a href="#"><i className="bi bi-pencil"></i> Edit</a></div>
                            <h5 className="font-size-15 mb-2">Preston Miller</h5>
                            <p className="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                            <p className="mb-1">PrestonMiller@armyspy.com</p>
                            <p>001-234-5678</p>
                        </div>
                        <div className="text-muted ">
                        <div className='d-flex justify-content-between'><h5 className="font-size-16 mb-3"><b>Instant Order</b></h5><a href="#"><i className="bi bi-pencil"></i> Edit</a></div>
                            <h5 className="font-size-15 mb-2">Preston Miller</h5>
                            <p className="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                            <p className="mb-1">PrestonMiller@armyspy.com</p>
                            <p>001-234-5678</p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3  ">
                      <div className="d-address">
                        <span className="sub_title  p-l-15 p-r-15">Wallet Details</span>
                      </div>
                      <div className='row p-4'>
                        <div className='col-md-4 difference-of-us-item wallet-item'>     
                          <div className=" p-3 rounded mr-0  ">
                              <div className="d-block d-sm-flex align-items-center m-2">
                                  <div className="icon me-4 mb-4 mb-sm-0"> <i className="bi bi-wallet2 txt1"></i>
                                  </div>
                                  <div className="block">
                                  <h3 className="mb-1">₹16700</h3>
                                  <p className="mb-0">Available balance</p>
                                  </div>
                              </div>
                          </div>  
                        </div>  
                        <div className='col-md-4 difference-of-us-item wallet-item'>     
                          <div className=" p-3 rounded mr-0 ">
                              <div className="d-block d-sm-flex align-items-center m-2">
                                  <div className="icon me-4 mb-4 mb-sm-0"> <i className="bi bi-wallet2 txt1"></i>
                                  </div>
                                  <div className="block">
                                  <h3 className="mb-1">₹1060</h3>
                                  <p className="mb-0">Usable balance</p>
                                  </div>
                              </div>
                          </div>  
                        </div>  
                        <div className='col-md-4 difference-of-us-item wallet-item'>     
                          <div className=" p-3 rounded mr-0 ">
                              <div className="d-block d-sm-flex align-items-center m-2">
                                  <div className="icon me-4 mb-4 mb-sm-0"> <i className="bi bi-wallet2 txt1"></i>
                                  </div>
                                  <div className="block">
                                  <h3 className="mb-1">₹11200</h3>
                                  <p className="mb-0">Locked balance</p>
                                  </div>
                              </div>
                          </div>  
                        </div>   
                      </div>
                    </div>
                    <div className="card mb-3  ">
                      <div className="d-address">
                        <span className="sub_title  p-l-15 p-r-15">Wallet History</span>
                      </div>
                      <div className='d-flex justify-content-end m-t-12 m-r-10'>
                      <div className='col-md-2'>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>All</option>
                          <option value="1">Yesterday</option>
                          <option value="2">Last 10 days</option>
                          <option value="3">Last month</option>
                        </select>     
                      </div>
                      </div>
                      <div className='row p-x-10 p-b-14'>
                      <div className="page-content page-container p-0 m-t-12" id="page-content">
                        <div className="padding">
                          <div className="container d-flex justify-content-center p-0">
                            <div className="grid-margin stretch-card p-0">
                              <div className="card">
                                <div className="card-body">                    
                                  <div className="table-responsive">
                                    <table className="table table-hover">
                                      <thead>
                                        <tr>
                                          <th>Date</th>
                                          <th>Description</th>
                                          <th>Amount</th>
                                          <th>Debit/Credit</th>
                                          <th>Payment Mode</th>
                                          <th>Transaction by</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>27-07-2024</td>
                                          <td>₹1200 Recieved by cash</td>
                                          <td>₹1200</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-danger">Pending</label></td>
                                          <td>Yes</td>
                                        </tr>
                                        <tr>
                                          <td>26-07-2024</td>
                                          <td>₹2500 Rrecieved by cash</td>
                                          <td>₹2500</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-warning">In progress</label></td>
                                          <td>Yes</td>
                                        </tr>
                                        <tr>
                                          <td>25-07-2024</td>                              
                                          <td>₹2500 Rrecieved by cash</td>
                                          <td>₹2500</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-info">Fixed</label></td>
                                          <td>Yes</td>
                                        </tr>
                                        <tr>
                                          <td>24-07-2024</td>
                                          <td>₹4800 Rrecieved by cash</td>
                                          <td>₹4800</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-success">Completed</label></td>
                                          <td>Yes</td>
                                        </tr>
                                        <tr>
                                          <td>23-07-2024</td>
                                          <td>₹2600 Rrecieved by cash</td>
                                          <td>₹2600</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-success">Completed</label></td>
                                          <td>Yes</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div> 
                              </div>
                            </div>
                          </div> 
                        </div>
                      </div>
                      </div>
                     </div>
                     <div className="card mb-3  ">
                      <div className="d-address">
                        <span className="sub_title  p-l-15 p-r-15">Booking History</span>
                      </div>                     
                      <div className='row p-x-10 p-b-14'>
                      <div className="page-content page-container p-0 m-t-12" id="page-content">
                        <div className="padding">
                          <div className="container d-flex justify-content-center p-0">
                            <div className="grid-margin stretch-card p-0">
                              <div className="card">
                                <div className="card-body">                    
                                  <div className="table-responsive">
                                    <table className="table table-hover">
                                      <thead>
                                        <tr>
                                          <th>Date</th>
                                          <th>Description</th>
                                          <th>Amount</th>
                                          <th>Debit/Credit</th>
                                          <th>Payment Mode</th>
                                          <th>Transaction by</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>27-07-2024</td>
                                          <td>₹1200 Recieved by cash</td>
                                          <td>₹1200</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-danger">Pending</label></td>
                                          <td>Yes</td>
                                        </tr>
                                        <tr>
                                          <td>26-07-2024</td>
                                          <td>₹2500 Rrecieved by cash</td>
                                          <td>₹2500</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-warning">In progress</label></td>
                                          <td>Yes</td>
                                        </tr>
                                        <tr>
                                          <td>25-07-2024</td>                              
                                          <td>₹2500 Rrecieved by cash</td>
                                          <td>₹2500</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-info">Fixed</label></td>
                                          <td>Yes</td>
                                        </tr>
                                        <tr>
                                          <td>24-07-2024</td>
                                          <td>₹4800 Rrecieved by cash</td>
                                          <td>₹4800</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-success">Completed</label></td>
                                          <td>Yes</td>
                                        </tr>
                                        <tr>
                                          <td>23-07-2024</td>
                                          <td>₹2600 Rrecieved by cash</td>
                                          <td>₹2600</td>
                                          <td className="text-success"> Credit </td>
                                          <td><label className="badge bg-success">Completed</label></td>
                                          <td>Yes</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div> 
                              </div>
                            </div>
                          </div> 
                        </div>
                      </div>
                      </div>
                     </div>
                </div>
                    
               
  
           
          </div>
          
        
      </div>
    </Layout>
    
  );
}

export default Myaccount;
