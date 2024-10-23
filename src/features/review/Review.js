import React from "react";
import Slider from "react-slick";

// Pass the child props
export default function Review() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="section-review p-t-50 p-b-50">
        <div className="title-review t-center m-b-2 title_sec">
                <span className="sub_title tit4 p-l-15 p-r-15">Customers <span>Say</span></span>
                {/* <h3 className="tit8 t-center p-l-20 p-r-15 p-t-3">Review</h3> */}
        </div>
        <div className="reviews_section m-b-25">
                  <Slider {...settings}>
                  <div className="item-slick3 item3-slick3 slick-slide" style="height: 400px;">
                                <div className="wrap-content-slide3 p-b-50 p-t-50">
                                        <div className="container">
                                                <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated " data-appear="zoomIn">
                                                        <img src="assets/images/avatar-01.webp" alt="IGM-AVATAR" />
                                                </div>
                                                <div className="content-review m-t-33 animated " data-appear="fadeInUp">
                                                        <p className="t-center txt12 size15 m-l-r-auto">“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
                                                        <div className="star-review fs-18 color0 flex-c-m m-t-12">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                        </div>
                                                        <div className="more-review txt4 t-center animated  m-t-32" data-appear="fadeInUp">Marie Simmons ˗ New York</div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="item-slick3 item1-slick3 slick-slide" style="height: 400px;">
                                <div className="wrap-content-slide3 p-b-50 p-t-50">
                                        <div className="container">
                                                <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated " data-appear="zoomIn">
                                                        <img src="assets/images/avatar-01.webp" alt="IGM-AVATAR" />
                                                </div>
                                                <div className="content-review m-t-33 animated " data-appear="fadeInUp">
                                                        <p className="t-center txt12 size15 m-l-r-auto">“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
                                                        <div className="star-review fs-18 color0 flex-c-m m-t-12">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                        </div>
                                                        <div className="more-review txt4 t-center animated  m-t-32" data-appear="fadeInUp">Marie Simmons ˗ New York</div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="item-slick3 item2-slick3 slick-slide" style="height: 400px;">
                                <div className="wrap-content-slide3 p-b-50 p-t-50">
                                        <div className="container">
                                                <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated " data-appear="zoomIn">
                                                        <img src="assets/images/avatar-01.webp" alt="IGM-AVATAR" />
                                                </div>
                                                <div className="content-review m-t-33 animated " data-appear="fadeInUp">
                                                        <p className="t-center txt12 size15 m-l-r-auto">“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
                                                        <div className="star-review fs-18 color0 flex-c-m m-t-12">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                                <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                                                        </div>
                                                        <div className="more-review txt4 t-center animated  m-t-32" data-appear="fadeInUp">Marie Simmons ˗ New York</div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        
                </Slider>
        </div>

</section>

  
  );
}


