import React from "react";
import Slider from "react-slick";

// Pass the child props
export default function Convenient() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="section-review p-t-50">
        <div className="title-review t-center m-b-2 title_sec">
                <span className="sub_title tit4 p-l-15 p-r-15"> Fresh, Healthy, <br></br>
                Insanely <span>Convenient</span></span>
                {/* <h3 className="tit8 t-center p-l-20 p-r-15 p-t-3">Review</h3> */}
        </div>
        <div className="p-t-50 p-b-50 container text-center">
        <div className="row">
        <div className="col-md-4">
                <div className=" d-flex flex-column  align-items-center">
                        <img src="assets/images/ingrediants.png" className="img-fluid"  width={50}/>
                        <span className="txt5 color0-hov trans-0-4 m-t-13 how_title">Cooked from responsibly sourced,
                        <br></br>quality ingredients</span>
                        <div className="cnt_block">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                </div>
        </div>
        <div className="col-md-4">
                <div className=" d-flex flex-column align-items-center">
                        <img src="assets/images/chef.png" className="img-fluid"  width={50}/>
                        <span className="txt5 color0-hov trans-0-4 m-t-13 how_title">Created and curated
                        <br></br>by the chefs</span>
                        <div className="cnt_block">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                </div>
        </div>
        <div className="col-md-4">
                <div className=" d-flex flex-column align-items-center">
                        <img src="assets/images/hygiene.png" className="img-fluid text-center"  width={50}/>
                        <span className="txt5 color0-hov trans-0-4 m-t-13 how_title">Made at a hygiene-first
                        <br></br>audited kitchen</span>
                        <div className="cnt_block">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                </div>
        </div>
        {/* <span className="m-t-33">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span> */}
</div>
        </div>

</section>

  
  );
}


