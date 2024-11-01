import React from "react";
// import "./Layout.css";

// Pass the child props
export default function HowWorks() {
  return (
    <section className="section-welcome p-t-60 p-b-50">
<div className="container">
<div className="row">
<div className="wrap-text-welcome t-center title_sec">
<span className="t-center sub_title m-b-50">
How it <span>works?</span>
</span>
{/* <h3 className="tit3 t-center m-b-35 m-t-5">
Kitchen Holiday
</h3> */}
<div className="row">
        <div className="col-md-4">
                <div className=" d-flex flex-column  align-items-center">
                        <img src="assets/images/choose_meal.png" className="img-fluid"  width={100}/>
                        <span className="txt5 color0-hov trans-0-4 m-t-13 how_title">Choose Meal Plan</span>
                        <div className="cnt_block">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                </div>
        </div>
        <div className="col-md-4">
                <div className=" d-flex flex-column align-items-center">
                        <img src="assets/images/subscribe_meal.png" className="img-fluid"  width={100}/>
                        <span className="txt5 color0-hov trans-0-4 m-t-13 how_title">Subscribe</span>
                        <div className="cnt_block">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                </div>
        </div>
        <div className="col-md-4">
                <div className=" d-flex flex-column align-items-center">
                        <img src="assets/images/get_delivered.png" className="img-fluid text-center"  width={100}/>
                        <span className="txt5 color0-hov trans-0-4 m-t-13 how_title">Get delivered</span>
                        <div className="cnt_block">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                </div>
        </div>
        {/* <span className="m-t-33">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span> */}
</div>
</div>
</div>
</div>
</section>

  
  );
}


