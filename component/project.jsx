import React  from "react";
import Box from "./projectBox";
import { Element } from "react-scroll";
import Divider from "./divider";

function Project(){
  

    return (
      <Element name="project">
    <section className="section-container">
      <h2 className="section-heading">project</h2>
      <div className="box-container">
       <div className="project-items"
       >
         <Box />
         <Box />
         <Box />
         <Box />
         <Box />
        </div>
        </div>
    </section>
    </Element>
       )
}


export default Project;
