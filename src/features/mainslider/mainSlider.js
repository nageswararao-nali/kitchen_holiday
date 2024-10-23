import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'

// import "./Layout.css";

// Pass the child props
export default function MainSlider() {
        const settings = {
                arrows: true,
                // autoplay: true,
                dots: true,
                fade: true,
                infinite: true,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1
              };
  return (
    <section className="section-slide banner">
<div className="bg_view" style={{backgroundImage: "url(assets/images/banner_bg3.png)"}}>
<Slider {...settings}>
        <div className="" >
                <div className="row align-items-center">  
                       
                        <div className="col-md-7 p-t-15 p-b-10">
                                <div className="wrap-content-slide1  flex-col-c-m p-l-15 p-r-15 ">
                                      
                                        <h2 className="caption2-slide1 slide_cnt tit3-1 t-start animated " data-appear="fadeInLeft">
                                        100% <span>Organic</span><br /> Food is<small>Waiting for you</small>
                                        
                                                <div className="wrap-btn-slide1 animated  m-t-32" data-appear="fadeInUp">
                                                <Link to="/subscription" className="btn2 flex-c-m size2 txt3 trans-0-4 m-r-10">Subscribe Now</Link>

                                        </div>
                                        </h2>
                                </div> 
                        
                        </div>
                        <div className="col-md-5 p-t-45 p-b-30">
                                <h2 className="caption1-slide1 tit1 t-center animated  m-b-37 m-t-33" data-appear="fadeInRight">
                                        <img src="assets/images/m_plate3.png" width="450" className="img-fluid" />
                                </h2>
                        </div>
                </div>
        
        </div>
        <div className="" style={{backgroundImage: "url(assets/images/banner_bg.png)"}}>
                <div className="wrap-content-slide1  flex-col-c-m p-l-15 p-r-15  ">
                        <div className="d-flex justify-content-between p-0 align-items-center container-fluid">
                                        <h2 className="caption1-slide1 txt1 t-center animated  m-b-15  " data-appear="fadeInLeft">
                                                <img src="assets/images/meal_plate.png" width="500" />
                                        </h2>
                                <div className="wrap-btn-slide1 animated   text-center" data-appear="fadeInUp">
                                        <h2 className=" tit3 t-center " data-appear="fadeInUp">Healthy<br /> Organic meals</h2>

                                        <a href="menu.html" className="btn2 flex-c-m size2 txt5 trans-0-4 m-l-r-auto m-t-32" tabIndex="0">Join Us</a>
                                </div>
                                        <h2 className="caption2-slide1 tit1 t-center animated  m-b-37 " data-appear="fadeInRight">
                                                <img src="assets/images/meal_plate2.png" width="500" className="img-fluid" />
                                        </h2>
                        </div>
                
                </div>
        </div>
        
        
        
        <div className="" style={{backgroundImage: "url(assets/images/banner_bg.png)"}}>
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-t-150 ">
                        <div className="d-flex justify-content-between p-0 align-items-center container-fluid">
                        <span className="caption1-slide1 txt1 t-center animated  m-b-15" data-appear="fadeInLeft">
                                <img src="assets/images/m_plate1.png"  width="250" className="img-fluid"/>
                        </span>
                        <div className="caption2-slide1 animated  slideInUp " data-appear="slideInUp">
                                <h2 className=" tit3 t-center " data-appear="fadeInUp">Healthy<br /> Organic meals</h2>

                                <a href="menu.html" className="btn1 flex-c-m size2 txt5 trans-0-4 m-l-r-auto m-t-32" tabIndex="0">Join Us</a>
                        </div>
                        <span className="caption1-slide1 txt1 t-center animated  m-b-15 fadeInRight" data-appear="fadeInRight">
                                <img src="assets/images/m_plate2.png"  width="250" className="img-fluid"/>
                        </span>
                </div>
                        
                </div>
        </div>
</Slider>
</div>
</section>

  
  );
}

