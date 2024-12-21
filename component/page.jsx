import React from "react";
import { Element } from "react-scroll";

function Page(){
    return(
     <Element name="home">  
        <section className="home-section">
          <div className="Center-welcome"><h1 className="welcome ">Hello World </h1></div> 
          <a name="home"></a>
          <h2 className="intro">

            <strong>I'm Mustapha</strong>
          
         <br></br> i design and build website for your dream</h2>
           
        </section>
    </Element>   
        
    )
}

export default Page;