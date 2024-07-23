import React from "react";
import Slider from "react-slick";
// import "./Layout.css";

// Pass the child props
export default function MainSlider() {
        const settings = {
                arrows: true,
                // autoplay: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
              };
  return (
    <section className="section-slide banner">
<div className="">
<Slider {...settings}>
        <div className="" style={{backgroundImage: "url(assets/images/banner_bg3.png)"}}>
                <div className="row">  
                       
                        <div className="col-md-7 p-t-45 p-b-30">
                                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-50 ">
                                      
                                        <h2 className="caption2-slide1 slide_cnt tit3-1 t-start animated " data-appear="fadeInLeft">
                                        100%<br /> <span>Organic</span> Food is<small>Waiting for you</small>
                                        
                                                <div className="wrap-btn-slide1 animated  m-t-32" data-appear="fadeInUp">

                                                <a href="menu.html" className="btn2 flex-c-m size2 txt5 trans-0-4" tabIndex="0">Subscribe Now</a>

                                        </div>
                                        </h2>
                                </div> 
                        
                        </div>
                        <div className="col-md-5 p-t-45 p-b-30">
                                <h2 className="caption1-slide1 tit1 t-center animated  m-b-37 m-t-33" data-appear="fadeInRight">
                                        <img src="assets/images/m_plate3.png" width="550" className="img-fluid" />
                                </h2>
                        </div>
                </div>
        
        </div>
        <div className="" style={{backgroundImage: "url(assets/images/banner_bg.png)"}}>
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 ">
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

