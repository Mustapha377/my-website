import React, { useState} from "react";
import { Link} from "react-scroll";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";





const Nav = () => {
    const [activeLink, setActiveLink] = useState(null);

     

    const [isopen, setisclose] = useState(false);

    const ToggleMenu = () => {
      setisclose(!isopen)
    }
     
    const closeNav =() => {
      setisclose(false)
    }

    const handleSetActive = (to) => {
      setActiveLink(to);
      closeNav();
     };
    
    // const Hamburger = <MdOutlineMenu className="hamburger" 
    //   onClick={() => setisclose(!isopen)}/>    
    
    // const close = <MdClose  className="hamburger" 
    //   onClick={() => setisclose(!isopen)}/>

    return (
         <header className="navbar">
          <button className={`hamburger ${isopen ? "open" : ""}`}
          onClick={ToggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
            <span className="line"></span>
          </button>
          
            <nav className="container" >
           
              <ul className={`nav-items ${isopen ? "open" : ""}`}>
               <li className={`nav-item ${activeLink === "home" ? "active" : ""}`} >
               <Link 
               to="home" smooth={true} duration={500} onClick={() => handleSetActive("home")}
               >home</Link></li>

               <li className={`nav-item ${activeLink === "about" ? "active" : ""}`} ><Link 
               to="about" smooth={true} duration={500} onClick={() => handleSetActive("about")}
               >About</Link></li>

               <li className={`nav-item ${activeLink === "project" ? "active" : ""}`} ><Link 
               to="project" smooth={true} duration={500} onClick={() => handleSetActive("project")}
               >Project</Link></li>

               <li className={`nav-item ${activeLink === "contact" ? "active" : ""}`} ><Link 
               to="contact" smooth={true} duration={500} onClick={() => handleSetActive("contact")}
               >Contact</Link></li>
             </ul>
           
             
            </nav>
         
         </header>
        
    );

};
export default Nav;