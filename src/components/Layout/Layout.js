import React,{useEffect} from "react";


// import AOS from 'aos';
// import 'aos/dist/aos.css';

// Importing all created components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Pass the child props
export default function Layout({ children }) {
    // useEffect(() => {
    //     AOS.init();
    // }, [])
  return (
    <div>
      <Header />
      {children}
      <Footer />       
    </div>
  );
}