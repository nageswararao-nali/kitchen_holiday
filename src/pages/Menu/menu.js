import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'


function Menu() {
  return (
    <Layout>
       <section className="section-slide banner">
    <div className="row">
        <div className="banner position-relative" >
            <img src="assets/images/banner_bg4.png" className="img-fluid"/>
            <div className="banner_title position-absolute">
                <span className="tit3">MENU</span>
            </div>
        </div>
    </div>
</section>
<section className="section-welcome p-t-45 p-b-105">

        <div className="container">
            <div className="row align-items-center">
            <div className="col-md-6">
                <div className="veg_menu text-end">
                  
                    <img src="assets/images/menu_veg1.png" className="img-fluid" width="500"/>
                    
                
                <h3 className="tit9 m-b-15 text-center m-t-13"><span className="m-r-10"><img src="assets/images/veg_icon.png" width="24" alt=""/></span>Veg Meal</h3>

              <div className="menu_items">
                <ul className="d-flex flex-column">
                    <li className="d-flex justify-content-center  align-items-center tit11"><span  ><img src="assets/images/veg_item1.png" width="100" alt=""/></span><span className="item_title">1 Vegetable</span></li>
                    <li className="d-flex justify-content-center  align-items-center tit11"><span ><img src="assets/images/veg_item2.png" width="100" alt=""/></span><span className="item_title">1 Dal</span></li>
                    <li className="d-flex justify-content-center  align-items-center tit11"><span><img src="assets/images/veg_item4.png" width="100" alt=""/></span><span className="item_title">3 Chapathi</span></li>
                    <li className="d-flex justify-content-center  align-items-center tit11"><span><img src="assets/images/veg_item3.png" width="100" alt=""/></span><span className="item_title">1 Salad/Soup</span></li>
                </ul>
              </div>
            </div>
            </div>
            <div className="col-md-6 text-end">
              <img src="assets/images/menu_non-veg.png" className="img-fluid" width="500"/>
              <div className="menu_cnt m-t-13 text-start">
                <h3 className="tit9 m-b-15 text-center"><span className="m-r-10"><img src="assets/images/non-veg_icon.png" width="24" alt=""/></span>Non-Veg Meal </h3>
                <div className="menu_items">
                    <ul className="d-flex flex-column">
                        <li className="d-flex justify-content-center  align-items-center tit11"><span  ><img src="assets/images/non-veg_item1.png" width="100" alt=""/></span><span className="item_title">Chicken curry</span></li>
                        <li className="d-flex justify-content-center  align-items-center tit11"><span><img src="assets/images/non-veg_item2.png" width="100" alt=""/></span><span className="item_title">Chicken Roast</span></li>
                        <li className="d-flex justify-content-center  align-items-center tit11"><span><img src="assets/images/non-veg_item3.png" width="100" alt=""/></span><span className="item_title">Mutton curry</span></li>
                        <li className="d-flex justify-content-center  align-items-center tit11"><span><img src="assets/images/non-veg_item4.png" width="100" alt=""/></span><span className="item_title">1 Salad/Soup</span></li>
                    </ul>
                </div>

              </div>

            </div>
            <div className="subscribe_btn m-t-40 text-center"><span>Subscribe now</span></div>

            </div>
            
    </div>
</section>
    </Layout>
    
  );
}

export default Menu;
