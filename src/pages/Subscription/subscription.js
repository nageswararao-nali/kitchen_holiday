import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'


function Subscription() {
  return (
    <Layout>
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
    <section className="section-welcome p-t-45 p-b-105">       
            <div className="container">            
          
                  <div className="row">
                  <div className="col-md-5">
                    <h3>Choose your preferences</h3>
                    <ul className="nav nav-tabs flex-column p-t-22" role="tablist" >
                      <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#home">
                          <div className="d-flex align-items-center">
                            <img src="assets/images/menu_veg.png" className="img-fluid" width="200"/>
                            <span className="tit10 d-block m-t-13">Veg Meal Plan</span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item tab_item2">
                        <a className="nav-link" data-bs-toggle="tab" href="#menu1"> <div className="d-flex align-items-center">
                          <img src="assets/images/menu_veg.png" className="img-fluid" width="200"/>
                          <span className="tit10 d-block m-t-13">Non-Veg Meal Plan</span>
                        </div></a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7 text-center" >
                    <h3>Select your plan</h3>    
                    <div className="tab-content">
                      <div id="home" className="container tab-pane active"><br/>                
                        <div className="plan_wrap">
                          <div className="plan_box h_item1 p-b-22 p-t-22 p-l-20 p-r-20 ">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-lft d-flex flex-column align-items-start">
                                      <span className="tit11"><span className="m-r-10"><img src="assets/images/veg_icon.png" width="18" alt=""/></span>Veg meal Plan - Trail (3Days)</span>
                                      <span className="a_price">$ 654</span>
                                      <span className="f_price">$ 495</span>
                                  </div>
                                
                                  <div className="d-ryt">
                                      <span className="add_btn" id="addBtn1">ADD</span>
                                      <div className="added_count" id="addedCount1" ><span className="count_minus">-</span><span className="count_total">1</span><span className="count_plus">+</span></div>
                                  </div>
                              </div>
                              <Link to="/checkout" className="text-center m-t-32 m-b-13" id="selectBtn" ><span className="select_btn">Select this Plan</span></Link>
                          </div>
                          <div className="plan_box h_item1 p-b-22 p-t-22 p-l-20 p-r-20 m-t-32">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-lft d-flex flex-column align-items-start">
                                      <span className="tit11"><span className="m-r-10"><img src="assets/images/veg_icon.png" width="18" alt=""/></span>Veg meal Plan - Weekly</span>
                                      <span className="a_price">$ 2150</span>
                                      <span className="f_price">$ 1750</span>
                                  </div>
                                  <div className="d-ryt">
                                      <span className="add_btn">ADD</span>
                                      <div className="added_count" ><span className="count_minus">-</span><span className="count_total">1</span><span className="count_plus">+</span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="plan_box h_item1 p-b-22 p-t-22 p-l-20 p-r-20 m-t-32">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-lft d-flex flex-column align-items-start">
                                      <span className="tit11"><span className="m-r-10"><img src="assets/
                                      images/veg_icon.png" width="18" alt=""/></span>Veg meal Plan - Monthly</span>
                                      <span className="a_price">$ 4299</span>
                                      <span className="f_price">$ 3299</span>
                                  </div>
                                  <div className="d-ryt">
                                      <span className="add_btn">ADD</span>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div className="custom_dates m-t-32 text-start">  
                          <span className="custom_date_btn tit11">Select Custom Dates:</span> 
                          <div className="row m-t-13 align-items-center">
                            <div className="col-md-4">
                              <span className="custom_date_btn">Start</span> 
                              <div className="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                <input className="my-calendar bo-rad-10 sizefull txt10 p-l-20" type="text" name="date"/>
                                <i className="btn-calendar fa fa-calendar ab-r-m hov-pointer m-r-18" aria-hidden="true"></i>
                                </div>   
                            </div>
                            <div className="col-md-4">
                              <span className="custom_date_btn">End</span>
                              <div className="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                <input className="my-calendar bo-rad-10 sizefull txt10 p-l-20" type="text" name="date"/>
                                <i className="btn-calendar fa fa-calendar ab-r-m hov-pointer m-r-18" aria-hidden="true"></i>
                                </div>   
                            </div>
                            <div className="col-md-4">
                              <a href="#" className="text-center" ><span className="select_btn btn_disable">Select this Plan</span></a>
                            </div>
                          </div>
                                               
                        </div>
                      </div>
                      <div id="menu1" className="container tab-pane fade"><br/>
                        <div className="plan_wrap">
                          <div className="plan_box h_item1 p-b-22 p-t-22 p-l-20 p-r-20 ">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-lft d-flex flex-column align-items-start">
                                      <span className="tit11"><span className="m-r-10"><img src="assets/images/non-veg_icon.png" width="18" alt=""/></span>Non-veg meal Plan - Trail (3Days)</span>
                                      <span className="a_price">$ 654</span>
                                      <span className="f_price">$ 495</span>
                                  </div>
                                
                                  <div className="d-ryt">
                                      <span className="add_btn" id="addBtn2">ADD</span>
                                      <div className="added_count" id="addedCount1" ><span className="count_minus">-</span><span className="count_total">1</span><span className="count_plus">+</span></div>
                                  </div>
                              </div>
                              <a href="checkout.html" className="text-center m-t-32 m-b-13" id="selectBtn" ><span className="select_btn">Select this Plan</span></a>
                          </div>
                          <div className="plan_box h_item1 p-b-22 p-t-22 p-l-20 p-r-20 m-t-32">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-lft d-flex flex-column align-items-start">
                                      <span className="tit11"><span className="m-r-10"><img src="assets/images/non-veg_icon.png" width="18" alt=""/></span>Non-Veg meal Plan - Weekly</span>
                                      <span className="a_price">$ 2150</span>
                                      <span className="f_price">$ 1750</span>
                                  </div>
                                  <div className="d-ryt">
                                      <span className="add_btn">ADD</span>
                                      <div className="added_count" ><span className="count_minus">-</span><span className="count_total">1</span><span className="count_plus">+</span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="plan_box h_item1 p-b-22 p-t-22 p-l-20 p-r-20 m-t-32">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-lft d-flex flex-column align-items-start">
                                      <span className="tit11"><span className="m-r-10"><img src="assets/images/non-veg_icon.png" width="18" alt=""/></span>Non-Veg meal Plan - Monthly</span>
                                      <span className="a_price">$ 4299</span>
                                      <span className="f_price">$ 3299</span>
                                  </div>
                                  <div className="d-ryt">
                                      <span className="add_btn">ADD</span>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div className="custom_dates m-t-32 text-start">  
                          <span className="custom_date_btn tit11">Select Custom Dates:</span> 
                          <div className="row m-t-13 align-items-center">
                            <div className="col-md-4">
                              <span className="custom_date_btn">Start</span> 
                              <div className="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                <input className="my-calendar bo-rad-10 sizefull txt10 p-l-20" type="text" name="date"/>
                                <i className="btn-calendar fa fa-calendar ab-r-m hov-pointer m-r-18" aria-hidden="true"></i>
                                </div>   
                            </div>
                            <div className="col-md-4">
                              <span className="custom_date_btn">End</span>
                              <div className="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                <input className="my-calendar bo-rad-10 sizefull txt10 p-l-20" type="text" name="date"/>
                                <i className="btn-calendar fa fa-calendar ab-r-m hov-pointer m-r-18" aria-hidden="true"></i>
                                </div>   
                            </div>
                            <div className="col-md-4">
                              <a href="#" className="text-center"  ><span className="select_btn btn_disable">Select this Plan</span></a>
                            </div>
                          </div>
                                               
                        </div>
                      </div>
                    </div>              
                </div>
              </div>
                
                <div className="container">
                   
                   
                </div>
            </div>
    </section>
    </Layout>
    
  );
}

export default Subscription;
