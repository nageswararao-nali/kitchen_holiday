import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Layout.css";

// Pass the child props
export default function WhoChoose() {
        const navigate = useNavigate()
  return (
    <section className="section-welcome  p-t-30 p-b-50" style={{background:"#f6f6f6"}}>
        <div className="container-fluid position-relative">
                <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3 title_sec caption1-slide1 t-center animated visible-true m-b-15" data-appear="fadeInLeft">
                        <span className="t-center sub_title">Our <span>Menu</span></span>
                         </h3>
                {/* <span className="position-absolute caption1-slide1 tit1 t-center animated visible-true m-b-37" data-appear="fadeInLeft" style={{right: "50px"}}><img src="assets/images/bg_img2.png" alt="" width="1200" /></span> */}
        <div className="container position-relative">               
                <div className="row">
                        <div className="col-md-6 p-t-5 p-b-30 text-center">
                                <img src="assets/images/m_plate3.png" alt="IMG-INTRO" width="300" className="img-fluid" />
                                <div className="d-flex flex-column" >
                                        <h2 className=" p-r-15 p-t-3">Veg Meals</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                        <div className="subscribe_btn_new m-t-32"><span onClick={() => navigate('/subscription')}>Subscribe now</span></div>
                                </div>
                        </div>
                        <div className="col-md-6 p-t-5 p-b-30 text-center">
                                <img src="assets/images/m_plate4.png" alt="IMG-INTRO" width="300" className="img-fluid" />
                                <div className="d-flex flex-column" >
                                        <h2 className=" p-l-15 p-t-3">Non-Veg Meals</h2>
                                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                        <div className="subscribe_btn_new subscribe_btn_nonveg m-t-32 "><span onClick={() => navigate('/subscription')}>Subscribe now</span></div>
                                </div>
                        </div>
                </div>
                </div>
                <div className="container-fluid position-relative">
                {/* <span className="position-absolute caption1-slide1 tit1 t-center animated visible-true m-b-37" data-appear="fadeInLeft" style={{right: "150px"}}><img src="assets/images/bg_img2-1.png" alt="" width="1200" /></span> */}
              
       </div>
        </div>
</section>

  
  );
}


