import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/itemsSlice';
import { getSubscriptions, setOrderDetails } from '../../store/subscriptionsSlice';

function Subscription() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.items)
  const { subscriptions } = useSelector((state) => state.subscriptions)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const [selectedItem, setSelectedItem] = useState({})
  const [selectedSub, setSelectedSub] = useState({})

  const getItemsData = async () => {
    await dispatch(getItems())
    await dispatch(getSubscriptions())
  }
  useEffect(() => {
      getItemsData()
  }, [])
  useEffect(() => {
    if(items.length) {
      setSelectedItem(items[0])
    }
  }, [items])

  const selectSubscription = async (subscription) => {
    setSelectedSub(subscription);
    await dispatch(setOrderDetails({item: selectedItem, sub:subscription}))
    if(isAuthenticated) {
      navigate('/cart')
    } else {
      navigate('/login')
    }
    
  }
  return (
    <div>
       <section className="section-slide banner">
            <div className="row">
                <div className="banner position-relative" >
                    <img src="assets/images/banner_bg4.png" className="img-fluid"/>
                    <div className="banner_title position-absolute">
                        <span className="tit3">Subscription</span>
                    </div>
                </div>
            </div>
        </section>
    <section className="section-welcome p-t-45 p-b-105 subscription_block" style={{background:"#f6f6f6"}}>       
            <div className="container title_sec text-center">            
            <h3 className='sub_title  m-b-10'>Choose your <span>preferences</span></h3>
                  <div className="row w-75 m-auto sub_wrap">
                  <div className="col-md-5  ">
                   
                    <ul className="nav nav-tabs flex-column p-t-22" role="tablist" >
                      {
                        (items && items.length) ?
                          items.map((item, index) => {
                            return (<li className={"nav-item " + (!item.isVeg ? "tab_item2" : "")} onClick={() => setSelectedItem(item)}>
                              <a className={"nav-link "+ (index == 0 ? "active" : "")} data-bs-toggle="tab" href={"#" + (item.isVeg ? "home" : "menu1")}>
                                <div className="d-flex align-items-center">
                                  <img src={item.image} className="img-fluid" width="120"/>
                                  <span className="tit10 d-block m-t-13 how_title">{item.name}</span>
                                </div>
                              </a>
                            </li>)
                          })
                        : null
                      }
                    </ul>
                  </div>
                  <div className="col-md-7 text-center" >
                    {/* <h3>Select your plan</h3>     */}
                    <div className="tab-content">
                      <div id="home" className="container tab-pane active  p-b-10"><br/>                
                        <div className="plan_wrap">
                          <div className="plan_box h_item1 m-b-10 p-b-22 p-t-22 p-l-20 p-r-20 ">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-lft d-flex flex-column align-items-start">
                                      <span className="tit11">
                                        <span className="m-r-10">
                                          <img src="assets/images/veg_icon.png" width="18" alt=""/>
                                        </span>
                                        {'Veg Meal (Trail)'}
                                      </span>
                                  </div>
                                  <div className="d-ryt">
                                    <div className='text-decoration-none'><span className="add_btn" id="addBtn1" onClick={() => selectSubscription(0)}>ADD</span></div> 
                                  </div>
                              </div>
                          </div>
                          {
                            (subscriptions && subscriptions.length) ?
                              subscriptions.map((subscription) => {
                                if(subscription.isVeg) {
                                  return (
                                    <div className="plan_box h_item1 m-b-10 p-b-22 p-t-22 p-l-20 p-r-20 ">
                                      <div className="d-flex justify-content-between align-items-center">
                                          <div className="d-lft d-flex flex-column align-items-start">
                                              <span className="tit11">
                                                <span className="m-r-10">
                                                  <img src="assets/images/veg_icon.png" width="18" alt=""/>
                                                </span>{subscription.name}</span>
                                              {/* <span className="a_price">$ 654</span>
                                              <span className="f_price">$ 495</span> */}
                                          </div>
                                        
                                          <div className="d-ryt">
                                            <div className='text-decoration-none'><span className="add_btn" id="addBtn1" onClick={() => selectSubscription(subscription)}>ADD</span></div> 
                                              {/* <div className="added_count" id="addedCount1" ><span className="count_minus">-</span><span className="count_total">1</span><span className="count_plus">+</span></div> */}
                                          </div>
                                      </div>
                                      {/* <Link to="/checkout" className="text-center m-t-32 m-b-13" id="selectBtn" ><span className="select_btn">Select this Plan</span></Link> */}
                                  </div>
                                  )
                                }
                                
                              })
                            : null
                          }
                        </div>
                       
                      </div>
                      { <div id="menu1" className="container tab-pane fade"><br/>
                        <div className="plan_wrap">
                          <div className="plan_box h_item1 m-b-10 p-b-22 p-t-22 p-l-20 p-r-20 ">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-lft d-flex flex-column align-items-start">
                                    <span className="tit11"><span className="m-r-10"><img src="assets/images/non-veg_icon.png" width="18" alt=""/></span>{'Non Veg Meal (Trail)'}</span>
                                </div>
                                <div className="d-ryt">
                                    <span className="add_btn" id="addBtn2" onClick={() => selectSubscription(0)}>ADD</span>
                                </div>
                            </div>
                          
                        </div>
                        {
                            (subscriptions && subscriptions.length) ?
                              subscriptions.map((subscription) => {
                                if(!subscription.isVeg) {
                                  return (
                                    <div className="plan_box h_item1 m-b-10 p-b-22 p-t-22 p-l-20 p-r-20 ">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-lft d-flex flex-column align-items-start">
                                                <span className="tit11"><span className="m-r-10"><img src="assets/images/non-veg_icon.png" width="18" alt=""/></span>{subscription.name}</span>
                                              
                                            </div>
                                          
                                            <div className="d-ryt">
                                                <span className="add_btn" id="addBtn2" onClick={() => selectSubscription(subscription)}>ADD</span>
                                                
                                            </div>
                                        </div>
                                      
                                    </div>
                                  )
                                }
                                
                              })
                            : null
                          }
                        </div>
                      </div> }
                    </div>              
                </div>
              </div>
                
             
            </div>
    </section>
    </div>
    
  );
}

export default Subscription;
