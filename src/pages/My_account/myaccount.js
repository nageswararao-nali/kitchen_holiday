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
import { getMySubscriptions, updateMySubscription } from "../../store/subscriptionsSlice";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CalendarComponent from './calendarcomponent';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

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
  const { mySubscriptions } = useSelector((state) => state.subscriptions)
  const [show, setShow] = useState(false);
  const [selectedSub, setSelectedSub] = useState({});
  const [rDates, setrDates] = useState([]);
  const [mySubLastDate, setMySubLastDate] = useState();

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
      console.log("calling subscriptions ...")
      await dispatch(getMySubscriptions({userId: user.id}))
    }
    if(e == "DeliveredOrder") {
      getMyOrders({userId: user.id, status: 'Delivered'})
    }
    if(e == "CancelOrder") {
      getMyOrders({userId: user.id, status: 'Canceled'})
    }
    if(e == "myorders") {
      getMyOrders({userId: user.id})
    }
    
  }
  const getUserTodayOrders = async () => {
    getMyOrders({userId: user.id, orderDate: moment().format('YYYY-MM-DD')})
  }
  const showSubscription = async (sub) => {
    setSelectedSub(sub)
    setShow(true)
  }
  const updateMySubscriptions = async (mySubId) => {
    console.log(mySubId)
    setShow(false)
    if(rDates.length) {
      await dispatch(updateMySubscription({subId: mySubId, dates:rDates, mySubLastDate}))
      await dispatch(getMySubscriptions({userId: user.id}))
    }
  }
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);

  const removedDates = async (dtData) => {
    console.log(dtData.dt)
    let rrDates = rDates
    rrDates.push(dtData.dt) 
    setrDates(rrDates)
    setMySubLastDate(dtData.lastDate)
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
           
       
 
   <div className="profile-info col-md-9" >
   
                   
                    
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
                    
                </div>
          
    <Tab.Container id="left-tabs-example" defaultActiveKey="booking_history">
      <Row>
        <Col sm={3}>
        <div className="profile-nav">           
          <div className="user-heading round">
            <a href="#">
              <img src="assets/images/avatar-01.webp" alt="IGM-AVATAR"/>
            </a>
            <h1>Marie Simmons</h1>
            <p className="text-white">{user.username}</p>
          </div>  
        </div>   
          <Nav variant="pills" className="flex-column myaccount_lft">
            <Nav.Item>
              <Nav.Link eventKey="profile" ><i className="fa fa-user"></i> Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="delivery_address"><i className="fa fa-map-marker"></i> Delivery Address</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="booking_history"><i className="fa fa-history"></i> Booking History</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="invoice_history"><i className="fa fa-sticky-note"></i> Invoice History</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="profile">
              <div className="card mb-3  " >
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
                        <h6 className="mb-0">Password</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <span> *******</span>
                        <div data-mdb-input-init className="form-outline d-none">
                          <input type="password" id="form3Example4" className="form-control" placeholder="Password" />
                          <span className="text-danger fs-13 d-none">Please enter password</span>
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
            </Tab.Pane>
            <Tab.Pane eventKey="delivery_address">
              <div className="card mb-3  " id="pills-profile">
                <div className="d-address d-flex justify-content-between">
                  <span className="sub_title  p-l-15 p-r-15">Delivery Addresses</span>
                  <span className="p-r-15 address_btn"><a href="/address">Add new</a></span>
                </div>
                <div className='p-4'>
                  {
                    userAddresses.length ? 
                    userAddresses.map((userAddress) => {
                      return (
                        <div className="text-muted m-b-30">
                            <div className='d-flex justify-content-between'><h5 className="font-size-16 mb-3"></h5>
                              <a onClick={() => {navigate('/address/'+userAddress.id)}}><i className="bi bi-pencil"></i> Edit</a>
                            </div>
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
            </Tab.Pane>
            <Tab.Pane eventKey="booking_history">
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
                            <th>Subscription Name</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Price</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            (mySubscriptions && mySubscriptions.length) ?
                            mySubscriptions.map((sub) => {
                                return(<tr>
                                  <td>{sub.subName}</td>
                                  <td>{sub.itemName}</td>
                                  <td>{sub.quantity}</td>
                                  <td> {sub.startDate} </td>
                                  <td>{sub.endDate}</td>
                                  <td>{sub.price}</td>
                                  <td><span onClick={() => showSubscription(sub)}>X</span></td>
                                </tr>)
                              })
                            : null
                          }
                          
                        </tbody>
                      </table>
                    </Tab>
                    <Tab eventKey="myorders" title="My Orders"  onClick={() => getMyOrders({userId: user.id})}>
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
            </Tab.Pane>
            <Tab.Pane eventKey="invoice_history">
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
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
           
          </div>
          
        
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSub.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <CalendarComponent selectedDates={selectedSub.orderDates ? JSON.parse(selectedSub.orderDates) : []} removedDated={removedDates} />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" className="btn2 txt3 text-white" onClick={() => updateMySubscriptions(selectedSub.id)}>
            Swap Orders
          </Button>
          <Button variant="secondary" className="btn2 btn5 txt3" onClick={() => setShow(false)}>
            Close
          </Button>         
        </Modal.Footer>
      </Modal>
    </div>
  
  );
}

export default Myaccount;
