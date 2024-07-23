import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
// import "./Layout.css";

// Pass the child props
export default function Header() {
  const isHome = useMatch({path: '/', end: true})
  const navigate = useNavigate();
  const navigateToRoute = (routeName) => {
    console.log("welcome to navigation")

    navigate('/'+routeName)
  }
  const navigateToHomeRoute = (routeName) => {
    console.log("welcome to home navigation")
    if(isHome) {
      window.location.replace("/#"+routeName)
    } else {
      navigate('/')
    }
    
  }
  
  return (
    <header className="">

      <div className="wrap-menu-header trans-0-4">
      <div className="container h-full">
      <div className="wrap_header trans-0-3">

      <div className="logo">
      <a href="index.html">
      <img src="assets/images/logo_f.png" alt="IMG-LOGO" data-logofixed="images/logo_f.png" />
      </a>
      </div>

      <div className="wrap_menu p-l-0-xl">
      <nav className="menu">
      <ul className="main_menu">
      <li className="active">
      <a href="index.html">Home</a>
      </li>
      <li>
      <a href="menu.html">Menu</a>
      </li>
      <li>
      <a href="subscription.html">Subscription</a>
      </li>

      <li>
      <a href="about.html">About</a>
      </li>

      <li>
      <a href="contact.html">Contact</a>
      </li>
      </ul>
      </nav>
      </div>

      <div className="social flex-w flex-l-m p-r-20">
      <a href="signin.html" className="btn2 flex-c-m size2 txt3 trans-0-4 m-r-10" tabIndex="0">Sign in</a>
      <a href="#" className="cart_icon"><i className="fa fa-shopping-cart" aria-hidden="true" style={{fontSize: '28px'}}></i><span className="count">1</span></a>
      <button className="btn-show-sidebar m-l-33 trans-0-4 d-md-none d-block"></button>
      </div>
      </div>
      </div>
      </div>
    </header>

  
  );
}