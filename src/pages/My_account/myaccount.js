import React from 'react';
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
function myaccount() {
  return (
    <Layout>
      <div className='container p-t-120'>
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
               {/*  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    My account
                </Breadcrumb.Item> */}
            <Breadcrumb.Item active>My account</Breadcrumb.Item>
        </Breadcrumb>
        <div className="title-review t-center m-b-2 title_sec">
            {/* <span className="sub_title tit4 p-l-15 p-r-15">My Account</span> */}
            <h3 className="tit3 t-center p-l-20 p-r-15 p-t-3">My Account</h3>
            {/* <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated " data-appear="zoomIn">
                <img src="assets/images/avatar-01.webp" alt="IGM-AVATAR" />
            </div> */}
        </div>
        <div class="row gutters-sm m-t-32  m-b-30">
           
            <div class="col-md-6 ">
           
              <div class="card mb-3">
                <div class="bio-graph-heading">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                </div>
                <div class="card-body" style={{paddingTop:'100px'}}>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">City</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                       San Francisco
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info text-white"  href="#">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card mb-3  ">
                    <div class="bio-graph-heading d-address">
                    <span className="sub_title  p-l-15 p-r-15">Delivery Address</span>
                    </div>
                    <div className='p-4'>
                    <div class="text-muted m-b-30">
                        <div className='d-flex justify-content-between'><h5 class="font-size-16 mb-3"><b>Lunch (Default)</b></h5><a href="#"><i class="bi bi-pencil"></i> Edit</a></div>
                        <h5 class="font-size-15 mb-2">Preston Miller</h5>
                        <p class="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                        <p class="mb-1">PrestonMiller@armyspy.com</p>
                        <p>001-234-5678</p>
                    </div>
                    <div class="text-muted m-b-30">
                    <div className='d-flex justify-content-between'><h5 class="font-size-16 mb-3"><b>Dinner</b></h5><a href="#"><i class="bi bi-pencil"></i> Edit</a></div>
                        <h5 class="font-size-15 mb-2">Preston Miller</h5>
                        <p class="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                        <p class="mb-1">PrestonMiller@armyspy.com</p>
                        <p>001-234-5678</p>
                    </div>
                    <div class="text-muted ">
                    <div className='d-flex justify-content-between'><h5 class="font-size-16 mb-3"><b>Instant Order</b></h5><a href="#"><i class="bi bi-pencil"></i> Edit</a></div>
                        <h5 class="font-size-15 mb-2">Preston Miller</h5>
                        <p class="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                        <p class="mb-1">PrestonMiller@armyspy.com</p>
                        <p>001-234-5678</p>
                    </div>
                    </div>
                </div>
            </div>
           
          </div>
        <div className='row mb-5 m-t-24'>
          <div className="title-review t-center m-b-2 title_sec">
              <span className="sub_title tit4 p-l-15 p-r-15">Wallet details</span>
            
          </div>
            <div className='col-md-4 difference-of-us-item wallet-item'>     
                <div class=" p-3 rounded mr-0 me-lg-4 ">
                    <div class="d-block d-sm-flex align-items-center m-2">
                        <div class="icon me-4 mb-4 mb-sm-0"> <i class="bi bi-wallet2 txt1"></i>
                        </div>
                        <div class="block">
                        <h3 class="mb-1">₹16700</h3>
                        <p class="mb-0">Available balance</p>
                        </div>
                    </div>
                </div>  
            </div>  
            <div className='col-md-4 difference-of-us-item wallet-item'>     
                <div class=" p-3 rounded mr-0 me-lg-4">
                    <div class="d-block d-sm-flex align-items-center m-2">
                        <div class="icon me-4 mb-4 mb-sm-0"> <i class="bi bi-wallet2 txt1"></i>
                        </div>
                        <div class="block">
                        <h3 class="mb-1">₹1060</h3>
                        <p class="mb-0">Usable balance</p>
                        </div>
                    </div>
                </div>  
            </div>  
            <div className='col-md-4 difference-of-us-item wallet-item'>     
                <div class=" p-3 rounded mr-0 me-lg-4 ">
                    <div class="d-block d-sm-flex align-items-center m-2">
                        <div class="icon me-4 mb-4 mb-sm-0"> <i class="bi bi-wallet2 txt1"></i>
                        </div>
                        <div class="block">
                        <h3 class="mb-1">₹11200</h3>
                        <p class="mb-0">Locked balance</p>
                        </div>
                    </div>
                </div>  
            </div>    
        </div>   
        <div className='row  mb-5 m-t-24 p-0'>
            <div className='d-flex'>
              <div className="title-review t-center m-b-2 title_sec flex-grow-1">
                  <span className="sub_title tit4 p-l-15 p-r-15">Wallet history</span>                 
              </div>
              <div className='col-md-2'>
                <select class="form-select" aria-label="Default select example">
                  <option selected>All</option>
                  <option value="1">Yesterday</option>
                  <option value="2">Last 10 days</option>
                  <option value="3">Last month</option>
                </select>     
              </div>
            </div>
          <div class="page-content page-container p-0 m-t-12" id="page-content">
            <div class="padding">
              <div class="row container d-flex justify-content-center p-0">
                <div class="grid-margin stretch-card p-0">
                  <div class="card">
                    <div class="card-body">                    
                      <div class="table-responsive">
                        <table class="table table-hover">
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
                              <td class="text-success"> Credit </td>
                              <td><label class="badge bg-danger">Pending</label></td>
                              <td>Yes</td>
                            </tr>
                            <tr>
                              <td>26-07-2024</td>
                              <td>₹2500 Rrecieved by cash</td>
                              <td>₹2500</td>
                              <td class="text-success"> Credit </td>
                              <td><label class="badge bg-warning">In progress</label></td>
                              <td>Yes</td>
                            </tr>
                            <tr>
                              <td>25-07-2024</td>                              
                              <td>₹2500 Rrecieved by cash</td>
                              <td>₹2500</td>
                              <td class="text-success"> Credit </td>
                              <td><label class="badge bg-info">Fixed</label></td>
                              <td>Yes</td>
                            </tr>
                            <tr>
                              <td>24-07-2024</td>
                              <td>₹4800 Rrecieved by cash</td>
                              <td>₹4800</td>
                              <td class="text-success"> Credit </td>
                              <td><label class="badge bg-success">Completed</label></td>
                              <td>Yes</td>
                            </tr>
                            <tr>
                              <td>23-07-2024</td>
                              <td>₹2600 Rrecieved by cash</td>
                              <td>₹2600</td>
                              <td class="text-success"> Credit </td>
                              <td><label class="badge bg-success">Completed</label></td>
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
    </Layout>
    
  );
}

export default myaccount;
