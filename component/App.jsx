import React, { useRef } from "react";
import Nav from "./nav";
import Home from "./Home";
import Logo from "./logo";
import About from "./About";
import Divider from "./divider";
import Project from "./project";
import ContactForm from "./ContactForm";
import Comment from "./Comment";
import Final from "./skillsFinal";
import Footer from "./footer";



function App(){
 
  

    return(
      <div id="main-container">
       
       <div id="main-content">

         <Nav />
        
         <Home />
         <Logo />
         <Divider />
         <About/>
         <Final />
         <Project/>
         <ContactForm/>

       </div>
       
       <Comment />
       <Footer />
      
        
      </div>
    )
}

export default App;

