import React from "react";
// import "./Layout.css";

// Pass the child props
export default function Footer() {
  return (
    <footer className="footer ">
        <div className="container p-t-40 p-b-70">
                <div className="row">
                        <div className="col-sm-6 col-md-4 p-t-50">
                                <div className="d-flex flex-column">
                                        <img src="assets/images/logo_f.png" className="img-fluid m-l-r-auto" width="150"/>
                                        <p className="m-t-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className="social_block">
                                                <ul className="social-network social-circle">
                                                        <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                                                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                                    </ul>
                                        </div>
                                </div>
                        </div>
                         <div className="col-sm-6 col-md-4 p-t-50 text-center">
                                <h4 className="txt13 m-b-33">Quick links</h4>
                                <div className="m-b-25">
                                        <ul className="f_list">
                                                <li className="txt14"><a href="#">About Us</a></li>
                                                <li className="txt14"><a href="#">Contact Us</a></li>
                                                <li className="txt14"><a href="#">Meal Plans</a></li>
                                                <li className="txt14"><a href="#">Gallery</a></li>
                                        </ul>
                                </div>
                       
                        </div>
                        <div className="col-sm-6 col-md-4 p-t-50 text-center">
                                <h4 className="txt13 m-b-33">Contact Us</h4>
                                <ul className="m-b-70 f_list">
                                        <li className="txt2 m-b-14">
                                        <i className="fa fa-map-marker fs-16 dis-inline-block size19" aria-hidden="true"></i>
                                        8th floor, 379 Hudson St, New York, NY 10018
                                        </li>
                                        <li className="txt2 m-b-14">
                                        <i className="fa fa-phone fs-16 dis-inline-block size19" aria-hidden="true"></i>
                                        (+1) 96 716 6879
                                        </li>
                                        <li className="txt2 m-b-14">
                                        <i className="fa fa-envelope fs-13 dis-inline-block size19" aria-hidden="true"></i>
                                        contact@site.com
                                        </li>
                                </ul>
                        </div>
                       
                </div>
        </div>
        <div className="end-footer">
                <div className="container">
                        <div className="flex-sb-m flex-w p-t-22 p-b-22">
                                <div className="p-t-5 p-b-5">
                                        <a href="#" className="fs-15 c-white"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                                        <a href="#" className="fs-15 c-white"><i className="fa fa-facebook m-l-18" aria-hidden="true"></i></a>
                                        <a href="#" className="fs-15 c-white"><i className="fa fa-twitter m-l-18" aria-hidden="true"></i></a>
                                </div>
                                <div className="txt17 p-r-20 p-t-5 p-b-5">@ 2024 Kitchen Holiday.</div>
                        </div>
                </div>
        </div>
</footer>

  
  );
}