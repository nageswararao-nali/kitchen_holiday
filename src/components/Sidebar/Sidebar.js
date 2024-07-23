import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
// import "./Layout.css";

// Pass the child props
export default function Sidebar() {
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
    <aside className="sidebar trans-0-4">

<button className="btn-hide-sidebar ti-close color0-hov trans-0-4"></button>

<ul className="menu-sidebar p-t-95 p-b-70">
<li className="t-center m-b-13">
<a href="index.html" className="txt19">Home</a>
</li>
<li className="t-center m-b-13">
<a href="menu.html" className="txt19">Menu</a>
</li>
<li className="t-center m-b-13">
<a href="gallery.html" className="txt19">Gallery</a>
</li>
<li className="t-center m-b-13">
<a href="about.html" className="txt19">About</a>
</li>
<li className="t-center m-b-33">
<a href="contact.html" className="txt19">Contact</a>
</li>
<li className="t-center">

<a href="reservation.html" className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto">
Reservation
</a>
</li>
</ul>

<div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">

<h4 className="txt20 m-b-33">
Gallery
</h4>

<div className="wrap-gallery-sidebar flex-w">
<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-01.webp" data-lightbox="gallery-footer">
<img src="images/photo-gallery-01.webp" alt="GALLERY" />
</a>
<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-02.jpg" data-lightbox="gallery-footer">
<img src="images/photo-gallery-02.webp" alt="GALLERY" />
</a>
<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-03.jpg" data-lightbox="gallery-footer">
<img src="images/photo-gallery-03.webp" alt="GALLERY" />
</a>
<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-05.jpg" data-lightbox="gallery-footer">
<img src="images/photo-gallery-04.webp" alt="GALLERY" />
</a>
<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-06.jpg" data-lightbox="gallery-footer">
<img src="images/photo-gallery-05.webp" alt="GALLERY" />
</a>
<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-07.jpg" data-lightbox="gallery-footer">
<img src="images/photo-gallery-05.webp" alt="GALLERY" />
</a>
<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-09.jpg" data-lightbox="gallery-footer">
<img src="images/photo-gallery-07.webp" alt="GALLERY" />
</a>
<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-10.jpg" data-lightbox="gallery-footer">
<img src="images/photo-gallery-08.webp" alt="GALLERY" />
</a>
<a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-11.jpg" data-lightbox="gallery-footer">
<img src="images/photo-gallery-09.webp" alt="GALLERY" />
</a>
</div>
</div>
</aside>

  
  );
}
