import React from "react";
import { Element } from "react-scroll";
import AnimatedSection from "./Animation";

function About(){

  
  
    return(
      <AnimatedSection>
      <Element name="about">
  <section  className="section-container" >
    <a name="About"></a>
    <h2 className="section-heading ">About</h2> 
   
      <div className="content">
      <div className="text-con">
       <p className="about-text">Hi I’m mustapha and I'm a passionate full-stack developer with 5 
      years of experience building web applications. I'm proficient in both
       front-end technologies like HTML, CSS, and JavaScript frameworks like
        express, bootstrap, react.js,. I also have a strong understanding
         of back-end development using JavaScript and frameworks like
          node.js. I enjoy tackling complex challenges and delivering 
          user-centric solutions throughout the development cycle.</p>
       </div>
      </div>
   
  </section>    
  </Element>
  </AnimatedSection>
        
)

}

export default About;