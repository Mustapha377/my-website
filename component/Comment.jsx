import React ,{useState}from "react";
import logoData from "./logo-Data";
import { Link } from "react-scroll";
  
const data = logoData;


const Comment = () => {

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

    return(
        <section className="section-container footer">
          <ul className="footer-nav">
            <li className="footer-nav-items"><Link 
             to="home" smooth={true} duration={500} onClick={() => handleSetActive("home")}
              >Home</Link></li>
            <li className="footer-nav-items"><Link 
             to="about" smooth={true} duration={500} onClick={() => handleSetActive("about")}
               >About</Link></li>
            <li className="footer-nav-items"><Link 
               to="project" smooth={true} duration={500} onClick={() => handleSetActive("project")}
               >Project</Link></li>
            <li className="footer-nav-items"> <Link 
               to="contact" smooth={true} duration={500} onClick={() => handleSetActive("contact")}
                 >Contact Me</Link></li>
          </ul>
          <div className="footer-con ">
             <h2 className="footer-comment-h2">Get in touch with me</h2>
             <div className="logo-container2">
             <a href="https://www.facebook.com/mustapha.ado.7731"><img className="logo footer-logo" src={data[3].src}></img></a>
             <a href="https://github.com/Mustapha377"><img className="logo footer-logo" src={data[4].src}></img></a>
             <a href="https://www.linkedin.com/in/mustapha-ado-musa-1b1462292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className="logo footer-logo" src={data[5].src}></img></a>
             </div> 
             <h6  className="footer-comment-h6">feel free to contact me if you have any questions or concerns. i am always available to help you.</h6>
          </div>
            
        </section>
    )
}

export default Comment;