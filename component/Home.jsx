import React from "react";
import { Element } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

function Home(){
    return(
     <Element name="home">  
        <section className="home-section">
          <div className="Center-welcome"><h1 className="welcome ">Hello World </h1></div> 
          <a name="home"></a>
          <h2 className="intro">

            <strong>I'm Mustapha</strong>
             
         <br></br>
         <div className="typewriter-container">

              <Typewriter
              words={["i design and build website for your dream"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              ></Typewriter> 
         </div>
          </h2>
           
        </section>
    </Element>   
        
    )
}

export default Home;