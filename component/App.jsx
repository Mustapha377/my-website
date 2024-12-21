import React, { useRef } from "react";
import Nav from "./nav";
import Page from "./page";
import Logo from "./logo";
import About from "./About";
import Skills from "./skills";
import Divider from "./divider";
import Project from "./project";
import ContactForm from "./ContactForm";
import Comment from "./Comment";
import SkillsArray from "./Skillserray";
import Final from "./skillsFinal";
import Footer from "./footer";



function App(){
 
  

    return(
      <div id="main-container">
       
       <div id="main-content">

         <Nav />
        
         <Page />
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

