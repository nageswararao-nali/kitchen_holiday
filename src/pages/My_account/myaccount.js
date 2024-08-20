import React, {useState, useEffect} from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from "react-redux";
import { getUserAddresses } from "../../store/usersSlice";
import { getOrders, clearOrders } from "../../store/orderSlice";
import * as moment from 'moment';

const heighstyle = {
    height: '5px', 
};
const profile = () => {
  // alert("Great Shot!");
  
  };


function Myaccount() {
  const { user } = useSelector((state) => state.auth)
  const { userAddresses } = useSelector((state) => state.users)
  const { orders } = useSelector((state) => state.orders)
console.log("orders")
console.log(orders)
  const navigate = useNavigate()
    const dispatch = useDispatch()
  const getMyOrders = async (reqObj) => {
    console.log("reqObj")
    console.log(reqObj)
    await dispatch(clearOrders())
    await dispatch(getOrders(reqObj))
  }
  const getUserAddressesData = async () => {
    await dispatch(getUserAddresses({userId: user.id}))
    
  }
  useEffect(() => {
    getUserAddressesData()
    getUserTodayOrders()
    window.scrollTo(0, 0)
  }, [])
  
  const handleTabClick = async(e) => {
    console.log(e)
    if(e == "TodayDelivery") {
      getUserTodayOrders()
    }
    if(e == "SubscriptionPlan") {
      getMyOrders({userId: user.id, orderType: 'subscription'})
    }
    if(e == "DeliveredOrder") {
      getMyOrders({userId: user.id, status: 'Delivered'})
    }
    if(e == "CancelOrder") {
      getMyOrders({userId: user.id, status: 'Canceled'})
    }
  }
  const getUserTodayOrders = async () => {
    getMyOrders({userId: user.id, orderDate: moment().format('YYYY-MM-DD')})
  }
  return (
    <div>
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
              <p className="text-white">{user.username}</p>
          </div>

          <ul className="nav nav-pills nav-stacked">
              <li className='active' onClick={profile}><a href="#"> <i className="fa fa-user"></i> Profile</a></li>
              <li><a href="#"> <i className="fa fa-calendar"></i> Delivery Addresses <span className="label label-warning pull-right r-activity">9</span></a></li>
              {/* <li><a href="#"> <i className="fa fa-edit"></i> Wallet details</a></li> */}
              {/* <li><a href="#"> <i className="fa fa-edit"></i> Wallet history</a></li> */}
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
                          <span>{user.fName + " " +user.lName}</span> 
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
                          <span>{user.email}</span>
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
                         <span> {user.mobile}</span>
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
                          <h6 className="mb-0">State</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                           <span>{user.state}</span>
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
                        {
                          userAddresses.length ? 
                          userAddresses.map((userAddress) => {
                            return (
                              <div className="text-muted m-b-30">
                                  <div className='d-flex justify-content-between'><h5 className="font-size-16 mb-3"></h5><a href="/address"><i className="bi bi-pencil"></i> Edit</a></div>
                                  <h5 className="font-size-15 mb-2">{userAddress.fName + " " + userAddress.lName}</h5>
                                  <p className="mb-1">{userAddress.address}</p>
                                  <p className="mb-1">{userAddress.email}</p>
                                  <p>{userAddress.zipcode}</p>
                              </div>
                            )
                          })
                          : null
                        }
                      </div>
                    </div>
                    {/* <div className="card mb-3  ">
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
                    </div> */}
                    {/* <div className="card mb-3  ">
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
                     </div> */}
                     <div className="card mb-3  ">
                      <div className="d-address">
                        <span className="sub_title  p-l-15 p-r-15">Booking History</span>
                      </div>                     
                      <div className='p-b-14 p-3'>
                        <Tabs
                          defaultActiveKey="TodayDelivery"
                          id="uncontrolled-tab-example"
                          className="mb-3 booking_history"
                          onSelect={(e) => handleTabClick(e)}
                        >
                          <Tab eventKey="TodayDelivery" title="Today's Delivery" onClick={() => getUserTodayOrders()}>
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Order No.</th>
                                  <th>Order Date</th>
                                  <th>Your Order</th>
                                  <th>Order Type</th>
                                  <th>Deliverry/Pickup</th>
                                  <th>Location</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  (orders && orders.length) ?
                                    orders.map((order) => {
                                      return(<tr>
                                        <td>{order.id}</td>
                                        <td>{order.orderDate}</td>
                                        <td>{order.itemName}</td>
                                        <td> {order.orderType} </td>
                                        <td>{order.status}</td>
                                        <td>{order.address}</td>
                                        <td>X</td>
                                      </tr>)
                                    })
                                  : null
                                }
                                
                                
                              </tbody>
                            </table>
                          </Tab>
                          <Tab eventKey="SubscriptionPlan" title="Subscription Plan"  onClick={() => getMyOrders({userId: user.id, orderType: 'subscription'})}>
                          <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Order No.</th>
                                  <th>Order Date</th>
                                  <th>Your Order</th>
                                  <th>Order Type</th>
                                  <th>Deliverry/Pickup</th>
                                  <th>Location</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  (orders && orders.length) ?
                                    orders.map((order) => {
                                      return(<tr>
                                        <td>{order.id}</td>
                                        <td>{order.orderDate}</td>
                                        <td>{order.itemName}</td>
                                        <td> {order.orderType} </td>
                                        <td>{order.status}</td>
                                        <td>{order.address}</td>
                                        <td>X</td>
                                      </tr>)
                                    })
                                  : null
                                }
                                
                              </tbody>
                            </table>
                          </Tab>
                          
                          <Tab eventKey="DeliveredOrder" title="Delivered Order"  onClick={() => getMyOrders({userId: user.id, status: 'Delivered'})}>
                          <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Order No.</th>
                                  <th>Order Date</th>
                                  <th>Your Order</th>
                                  <th>Order Type</th>
                                  <th>Deliverry/Pickup</th>
                                  <th>Location</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                              {
                                  (orders && orders.length) ?
                                    orders.map((order) => {
                                      return(<tr>
                                        <td>{order.id}</td>
                                        <td>{order.orderDate}</td>
                                        <td>{order.itemName}</td>
                                        <td> {order.orderType} </td>
                                        <td>{order.status}</td>
                                        <td>{order.address}</td>
                                        <td>X</td>
                                      </tr>)
                                    })
                                  : null
                                }
                               
                              </tbody>
                            </table>
                          </Tab>
                          <Tab eventKey="CancelOrder" title="Cancel Order"  onClick={() => getMyOrders({userId: user.id, status: 'canceled'})}>
                          <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Order No.</th>
                                  <th>Order Date</th>
                                  <th>Your Order</th>
                                  <th>Order Type</th>
                                  <th>Deliverry/Pickup</th>
                                  <th>Location</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                              {
                                  (orders && orders.length) ?
                                    orders.map((order) => {
                                      return(<tr>
                                        <td>{order.id}</td>
                                        <td>{order.orderDate}</td>
                                        <td>{order.itemName}</td>
                                        <td> {order.orderType} </td>
                                        <td>{order.status}</td>
                                        <td>{order.address}</td>
                                        <td>X</td>
                                      </tr>)
                                    })
                                  : null
                                }
                                
                               
                              </tbody>
                            </table>
                          </Tab>
                        </Tabs>
                      </div>
                     </div>
                     <div className="card mb-3  ">
                      <div className="d-address">
                        <span className="sub_title  p-l-15 p-r-15">Invoice History</span>
                      </div>                     
                      <div className='p-b-14 p-3'>
                      <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Invoice No.</th>
                                  <th>Total Amount</th>
                                  <th>Invoice Date</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>KH001234</td>
                                  <td>₹2600</td>
                                  <td>27-07-2024</td>
                                  <td>Bill</td>
                                  <td>X</td>
                                </tr>
                                <tr>
                                  <td>KH001234</td>
                                  <td>₹2600</td>
                                  <td>27-07-2024</td>
                                  <td>Bill</td>
                                  <td>X</td>
                                </tr>
                                <tr>
                                  <td>KH001234</td>
                                  <td>₹2600</td>
                                  <td>27-07-2024</td>
                                  <td>Bill</td>
                                  <td>X</td>
                                </tr>
                                
                              </tbody>
                            </table>
                      </div>
                     </div>
                </div>
                    
               
  
           
          </div>
          
        
      </div>
    </div>
    
  );
}

export default Myaccount;
