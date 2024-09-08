import React, {useState, useEffect, useRef} from "react";
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
import { getUserAddresses, updateUserImage } from "../../store/usersSlice";
import { getOrders, clearOrders } from "../../store/orderSlice";
import * as moment from 'moment';
import { getMySubscriptions, updateMySubscription, deleteMySubscription } from "../../store/subscriptionsSlice";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CalendarComponent from './calendarcomponent';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { getUser, setUser } from "../../store/authSlice";
import Accordion from 'react-bootstrap/Accordion';


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

  const inputFile = useRef(null) 
  const [userImage , setUserImage] = useState(null)
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
  const showDeletePop = async () =>{
    setShow2(true)
  }
  const updateMySubscriptions = async (mySubId) => {
    console.log(mySubId)
    setShow(false)
    if(rDates.length) {
      await dispatch(updateMySubscription({subId: mySubId, dates:rDates, mySubLastDate}))
      await dispatch(getMySubscriptions({userId: user.id}))
    }
  }
  const deleteMySubscriptions = async (mySubId) => {
    console.log(mySubId)
    if (window.confirm('Are you sure you want to delete Subscription?')) {
      setShow(false)
      await dispatch(deleteMySubscription({subId: mySubId}))
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
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const uploadPhoto = async (e) => {
    const formData = new FormData();
    formData.append('userImage', e.target.files[0])
    formData.append('userId', user.id)
    let res = await dispatch(updateUserImage(formData))
    console.log("res.payload")
    console.log(res.payload)
    if(res.payload.success) {
      console.log("calling user details")
      let userres = await dispatch(getUser({userId: user.id}))
      if(userres.payload.success) {
        await dispatch(setUser(userres.payload.data))
      }
    }
  }
  return (
    <div>
      <div className='container p-t-120'>
        <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
               {/*  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    My account
                </Breadcrumb.Item> */}
            <Breadcrumb.Item active>My Profile</Breadcrumb.Item>
        </Breadcrumb>
        <div className="title-review t-center m-b-2 title_sec">
            {/* <span className="sub_title tit4 p-l-15 p-r-15">My Account</span> */}
            <h3 className="tit10 t-center p-l-20 p-r-15 p-t-3">My Profile</h3>
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
            <a className="position-relative overflow-hidden">
              <img src={user.image} alt="IGM-AVATAR"/>
              <button onClick={onButtonClick} className="edit_photo">Update Photo</button>
            </a>
            <input type='file' id='file' ref={inputFile} onChange={(e) => {uploadPhoto(e)}} style={{display: 'none'}}/>
            
            <h1>{user.fName + " " + user.lName}</h1>
            <p className="text-white">{user.username}</p>
          </div>  
        </div>   
          <Nav variant="pills" className="flex-column myaccount_lft">
            <Nav.Item>
              <Nav.Link eventKey="profile" ><i className="fa fa-user"></i> Edit Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="notifications" ><i className="fa fa-user"></i> Noftications </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="delivery_address"><i className="fa fa-map-marker"></i> Addresses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="booking_history"><i className="fa fa-history"></i> Booking History</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="invoice_history"><i className="fa fa-sticky-note"></i> Invoice History</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="payments_refunds"><i class="bi bi-credit-card-2-front-fill"></i> Payments & Refunds</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="post_review"><i class="bi bi-star-fill"></i> Post Review</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="help"><i class="bi bi-question-circle-fill"></i> Help</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="logout"><i class="bi bi-door-closed-fill"></i> Logout</Nav.Link>
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
                        <h6 className="mb-0">Delete account</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                          {/* <span>{user.state}</span> */}
                          {/* <a href="#" className='float-end'><i className="bi bi-pencil"></i> Edit</a> */}
                          <span class="delete_btn" id="addBtn1" onClick={() => showDeletePop()}>Delete</span>
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
            <Tab.Pane eventKey="notifications">
              <div className="card mb-3  " >
                <div className="d-address">
                  <span className="sub_title  p-l-15 p-r-15">Notifications</span>
                </div>
                <div className='p-4'>
                <div class="email-right-box ms-0  ms-sm-0 text-left">
                  <div role="toolbar" class="toolbar ms-1 ms-sm-0">
                      <div class="btn-group mb-1 me-1 ms-1">
                          <div class="form-check custom-checkbox"><input type="checkbox" class="form-check-input" id="checkbox1"/><label class="form-check-label" for="checkbox1"></label></div></div>
                          <div class="btn-group mb-1"><button class="btn btn-primary light px-3" type="button"><i class="bi bi-arrow-clockwise"></i></button></div>
                          <div class="btn-group mb-1 dropdown"><button type="button" id="react-aria8096053300-13" aria-expanded="false" data-toggle="dropdown" class="btn btn-primary px-3 light dropdown-toggle ms-1 dropdown-toggle btn btn-primary">More <span class="caret"></span></button></div>
                  </div>
                  <div class="email-list mt-3">
                    <div class="message position-relative"><div><div class="d-flex message-single">
                        <div class="ps-1 align-self-center">
                            <div class="form-check custom-checkbox"><input type="checkbox" class="form-check-input" id="checkbox2"/><label class="form-check-label" for="checkbox2"></label>
                            </div>
                        </div>
                        <div class="ms-2"><button class="border-0 bg-transparent align-middle p-0"><i class="bi bi-star-fill" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <a class="col-mail col-mail-2" href="/react/demo/email-inbox/email-read">
                        <div class="subject">Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</div>
                        <div class="date">11:49 am</div>
                    </a>
                  </div>
                </div>
                <div class="message position-relative">
                    <div>
                        <div class="d-flex message-single">
                            <div class="ps-1 align-self-center">
                                <div class="form-check custom-checkbox"><input type="checkbox" class="form-check-input" id="checkbox3"/><label class="form-check-label" for="checkbox3"></label></div>
                            </div>
                            <div class="ms-2"><button class="border-0 bg-transparent align-middle p-0"><i class="bi bi-star-fill" aria-hidden="true"></i></button></div>
                        </div>
                        <a class="col-mail col-mail-2" href="/react/demo/email-inbox/email-read"><div class="subject">Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                        <div class="date">11:49 am</div></a>
                    </div>
                </div>
                <div class="message position-relative"><div>
                <div class="d-flex message-single">
                    <div class="ps-1 align-self-center">
                        <div class="form-check custom-checkbox"><input type="checkbox" class="form-check-input" id="checkbox4"/><label class="form-check-label" for="checkbox4"></label></div>
                    </div>
                    <div class="ms-2"><button class="border-0 bg-transparent align-middle p-0"><i class="bi bi-star-fill" aria-hidden="true"></i></button></div>
                </div>
                <a class="col-mail col-mail-2" href="/react/demo/email-inbox/email-read"><div class="subject">Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div><div class="date">11:49 am</div></a>
            </div>
              </div>
              <div class="message position-relative"><div>
              <div class="d-flex message-single">
                  <div class="ps-1 align-self-center">
                      <div class="form-check custom-checkbox"><input type="checkbox" class="form-check-input" id="checkbox5"/><label class="form-check-label" for="checkbox5"></label></div>
                  </div>
                  <div class="ms-2"><button class="border-0 bg-transparent align-middle p-0"><i class="bi bi-star-fill" aria-hidden="true"></i></button></div>
              </div>
              <a class="col-mail col-mail-2" href="/react/demo/email-inbox/email-read"><div class="subject">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div><div class="date">11:49 am</div></a>
          </div>
            </div>
            <div class="message position-relative"><div>
            <div class="d-flex message-single">
                <div class="ps-1 align-self-center">
                    <div class="form-check custom-checkbox"><input type="checkbox" class="form-check-input" id="checkbox6"/><label class="form-check-label" for="checkbox6"></label></div>
                </div>
                <div class="ms-2"><button class="border-0 bg-transparent align-middle p-0"><i class="bi bi-star-fill" aria-hidden="true"></i></button></div>
            </div>
            <a class="col-mail col-mail-2" href="/react/demo/email-inbox/email-read"><div class="subject">Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</div><div class="date">11:49 am</div></a>
        </div>
    </div>
</div>
<div class="row mt-4">
    <div class="col-12 ps-3">
        <nav>
            <ul class="pagination pagination-gutter pagination-primary pagination-sm no-bg">
                <li class="page-item page-indicator"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
                <li class="page-item  active "><a class="page-link" href="#">1</a></li>
                <li class="page-item   "><a class="page-link" href="/#">2</a></li>
                <li class="page-item   "><a class="page-link" href="#">3</a></li>
                <li class="page-item page-indicator"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
            </ul>
        </nav>
    </div>
</div>
</div>
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
                    defaultActiveKey="SubscriptionPlan"
                    id="uncontrolled-tab-example"
                    className="mb-3 booking_history"
                    onSelect={(e) => handleTabClick(e)}
                  >
                  {/*   <Tab eventKey="TodayDelivery" title="Today's Delivery" onClick={() => getUserTodayOrders()}>
                      <div className="overflow-auto">
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
                      </div>
                    </Tab> */}
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
                                  <td><span onClick={() => showSubscription(sub)}>X</span> </td>
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
                                  <td><span>X</span>	<a href="/orderdetails"><i style={{color: 'green'}} className="bi bi-eye-fill m-1"/></a> </td>
                                </tr>)
                              })
                            : null
                          }
                          
                          
                        </tbody>
                      </table>
                    </Tab>
                   {/*  <Tab eventKey="DeliveredOrder" title="Delivered Order"  onClick={() => getMyOrders({userId: user.id, status: 'Delivered'})}>
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
                    </Tab> */}
                   {/*  <Tab eventKey="CancelOrder" title="Cancel Order"  onClick={() => getMyOrders({userId: user.id, status: 'canceled'})}>
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
                    </Tab> */}
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
            <Tab.Pane eventKey="payments_refunds">
              <div className="card mb-3  ">
                <div className="d-address">
                  <span className="sub_title  p-l-15 p-r-15">Payments and Refunds</span>
                </div>                     
                <div className='p-b-14 p-3'>
                  <Tabs
                    defaultActiveKey="Payments"
                    id="uncontrolled-tab-example"
                    className="mb-3 txt5 booking_history"
                    onSelect={(e) => handleTabClick(e)}
                  >
                    <Tab eventKey="Payments" title="Payments" >
                      <span className="txt_title">Saved cards</span>
                      <div className="row">
                        <div class="credit-card visa selectable  m-3">
                          <div class="credit-card-last4">
                            4242
                          </div>
                          <div class="credit-card-expiry ">
                            08/25
                          </div>
                        </div>
                        <div class="credit-card mastercard selectable m-3">
                          <div class="credit-card-last4">
                            8210
                          </div>
                          <div class="credit-card-expiry">
                            10/22
                          </div>
                        </div>
                        <div className="add_new my-3">
                          <i class="bi bi-plus-square"></i>
                          <span className="m-2">ADD NEW CARD</span>
                        </div>
                      </div>   
                      <hr></hr>                   
                      <span className="txt_title mt-3">PayPal</span>
                      <div className="d-flex align-items-center mt-2">
                        <img src="https://i.imgur.com/7kQEsHU.png" style={{width:'30px'}}/>
                        <span className="m-2">ve********@hotmail.com</span>
                        <div className="flex_ryt flex-1">
                          <a href="#" class="float-end"><i class="bi bi-pencil"></i> Edit</a>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="Refunds" title="Refunds" >
                      <div className="refunds_wrap">
                        <div className="d-flex justify-content-between">
                          <span className="txt_title">Veg-meals</span>
                          <span className="status_info">Processing</span>
                        </div>
                        <div className="refund_details mt-2">
                          <div><span>To:</span><span className="m-2">PayPal</span></div>
                          <div><span>Amount:</span><span className="m-2">$120</span></div>
                          <div><span>Expected by:</span><span className="m-2">1st Sep, 2024</span></div>
                          <small className="error mt-3 d-block">Your refund is taking longer than usual. We are working to get it resolve at the earliest.</small>
                        </div>
                        <hr></hr>
                          <span>Order ID: #17548524568</span>
                        <hr></hr>
                      </div>
                      <div className="refunds_wrap mt-4">
                        <div className="d-flex justify-content-between">
                          <span className="txt_title">Non veg-meals</span>
                          <span className="status_info status_completed">Completed</span>
                        </div>
                        <div className="refund_details mt-2">
                          <div><span>To:</span><span className="m-2">CARD</span></div>
                          <div><span>Amount:</span><span className="m-2">$20</span></div>
                          <div><span>Completed on:</span><span className="m-2">31st Aug, 2024</span></div>
                          
                        </div>
                        <hr></hr>
                          <span>Order ID: #17548524568</span>
                        <hr></hr>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="post_review">
              <div className="card mb-3  ">
                <div className="d-address">
                  <span className="sub_title  p-l-15 p-r-15">Post Review</span>
                </div>                     
                <div className='p-b-14 p-3'>
                <div class="form-group mb-3"><label for="comment" class="text-black font-w600">Message</label><textarea rows="4" class="form-control" name="comment" placeholder="Type your message" id="comment"></textarea></div>
                <div class="col-lg-12"><div class="form-group"><input type="submit" class="submit btn btn2" id="submit" name="submit" value="Post Review"/></div></div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="help">
              <div className="card mb-3  ">
                <div className="d-address">
                  <span className="sub_title  p-l-15 p-r-15">Help</span>
                </div>                     
                <div className='p-b-14 p-3'>
                  <address className='m-t-13'>
                    <i className="bi bi-phone m-2"></i>
                    <span>+91-9999 999 999<br/>                        
                    <i className="bi bi-envelope m-2 my-2 d-inline-block"></i>
                    help@kitchenholiday.com <br/>
                    
                    <i className="bi bi-map m-2"></i>
                    8th floor, 379 Hudson St, New York, NY 10018</span></address>
                    <hr></hr>
                    <div className="row title_sec mt-4">
                      <h3 className="sub_title tit4 p-l-15 p-r-15 t-center p-l-20 p-r-15 p-t-3">Frequently Asked Questions</h3>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #3</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Accordion Item #4</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    </div>
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
        <Button variant="primary" className="btn2 btn6 txt3 text-white" onClick={() => updateMySubscriptions(selectedSub.id)}>
            Swap Orders
          </Button>
          <Button variant="primary" className="btn2 txt3 text-white" onClick={() => deleteMySubscriptions(selectedSub.id)}>
            Delete Subscription
          </Button>
             
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={() => setShow2(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-left">
          <label for="password" className="d-block">Account password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" className="btn2 txt3 text-white" >
            Delete Account
          </Button>
             
        </Modal.Footer>
      </Modal>
    </div>
  
  );
}

export default Myaccount;
