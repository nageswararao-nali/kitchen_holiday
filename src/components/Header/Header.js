import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import Dropdown from 'react-bootstrap/Dropdown';

// import "./Layout.css";

// Pass the child props
export default function Header() {
  const isHome = useMatch({path: '/', end: true})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state) => state.auth)
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
   // Sticky Menu Area
   useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });

  const logoutHandler = async() => {
    await dispatch(logout())
    navigate('/')
  }

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('header');
            const scrollTop = window.scrollY;
            scrollTop >= 1 ? header.classList.add('header-fixed') : header.classList.remove('header-fixed');
        };
  return (
    <header className="">

     

      <Navbar expand="lg" className="bg-body-tertiary justify-content-between p-0">
      <Container>
      <div className="wrap-menu-header trans-0-4">
        <div className="container h-full">
          <div className="wrap_header trans-0-3">
            <Navbar.Brand href="/home"> 
              <div className="logo">
                <img src="assets/images/logo_f.png" alt="IMG-LOGO" data-logofixed="images/logo_f.png" />
              </div>
            </Navbar.Brand>
          
            <div className=" flex-w flex-l-m trans-0-4 d-flex align-content-center d-sm-none">
              {
                isAuthenticated ?
                <div>                 
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <Link to="/myaccount" className="p-0"><i className="fa fa-user txt3" aria-hidden="true" style={{fontSize: '28px'}}></i></Link>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu-right">
                      <Dropdown.Item href="/myaccount">My profile</Dropdown.Item>
                      <Dropdown.Item  onClick={logoutHandler}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                
                
                :
                <div className="d-flex"><Link to="/login" className="btn2 flex-c-m size2 txt3 trans-0-4 m-r-10" tabIndex="0">Login</Link>
                <Link to="/signup" className="btn2 btn6 flex-c-m size2 txt3 trans-0-4 m-r-10" tabIndex="0">Signup</Link></div>
              }
          
          {/* <a className="cart_icon"></a> */}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto main_menu">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="menu">Menu</Nav.Link>
               {/*  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}                
                <Nav.Link href="subscription">Subscription</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
                
              </Nav>
            
            <div className=" flex-w flex-l-m p-r-20 trans-0-4 d-sm-flex d-none">
              {
                isAuthenticated ?
                <div>                 
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <Link to="/myaccount" className="p-0"><i className="fa fa-user txt3" aria-hidden="true" style={{fontSize: '28px'}}></i></Link>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/myaccount">My profile</Dropdown.Item>
                      <Dropdown.Item  onClick={logoutHandler}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                
                
                :
                <div className="d-flex"><Link to="/login" className="btn2 flex-c-m size2 txt3 trans-0-4 m-r-10" tabIndex="0">Login</Link>
                <Link to="/signup" className="btn2 btn6 flex-c-m size2 txt3 trans-0-4 m-r-10" tabIndex="0">Signup</Link></div>
              }
          
          <a className="cart_icon"></a>
          </div>
          </Navbar.Collapse>
          </div>
        </div>
      </div>
      </Container>
    </Navbar>
    </header>

  
  );
}