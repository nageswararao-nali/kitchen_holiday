import React from "react";
// import "./Layout.css";

// Pass the child props
export default function WhoChoose() {
  return (
    <section className="section-welcome  p-t-120 p-b-105">
        <div className="container-fluid position-relative">
                <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3 title_sec caption1-slide1 t-center animated visible-true m-b-37" data-appear="fadeInLeft">
                        <span className="sub_title"> Why choose</span> Kitchen Holiday
                         </h3>
                <span className="position-absolute caption1-slide1 tit1 t-center animated visible-true m-b-37" data-appear="fadeInLeft" style={{right: "50px"}}><img src="assets/images/bg_img2.png" alt="" width="1200" /></span>
        <div className="container position-relative">               
                <div className="row">
                        <div className="col-md-6 p-t-5 p-b-30">
                                <img src="assets/images/m_plate3.png" alt="IMG-INTRO" width="600" className="img-fluid" />
                        </div>
                        <div className="col-md-6 p-t-45 p-b-30">
                                <div className="d-flex flex-column" style={{justifyContent: "center", height: "80%"}}>
                                        <h2 className="tit5 p-r-15 p-t-3">Veg Meals</h2>
                                        <p className="p-r-60" style={{paddingRight: "140px",fontSize: "24px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                        <div className="subscribe_btn m-t-32"><span>Subscribe now</span></div>

                                </div>
                        </div>
                </div>
                <div className="container-fluid position-relative">
                <span className="position-absolute caption1-slide1 tit1 t-center animated visible-true m-b-37" data-appear="fadeInLeft" style={{right: "150px"}}><img src="assets/images/bg_img2-1.png" alt="" width="1200" /></span>
                <div className="container position-relative">           
                <div className="row">                       
                        <div className="col-md-6 p-t-45 p-b-30">
                                <div className="d-flex flex-column" style={{justifyContent: "center", height: "80%"}}>
                                        <h2 className="tit5 p-l-15 p-t-3 text-end">Non-Veg Meals</h2>
                                        <p className=" text-end" style={{paddingLeft: "80px",fontSize: "24px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                        <div className="subscribe_btn m-t-32 text-end"><span>Subscribe now</span></div>
                                </div>
                        </div>
                        <div className="col-md-6 p-t-45 p-b-30">
                                <img src="assets/images/m_plate4.png" alt="IMG-INTRO" width="600" className="img-fluid" />
                        </div>
                </div>
                </div>
        </div>
        </div>
        </div>
</section>

  
  );
}


