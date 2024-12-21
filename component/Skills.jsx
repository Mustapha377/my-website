import React from "react";
import { Element } from "react-scroll";
import AnimatedSection from "./Animation";


const Skills = (props) => {
     return (
        <AnimatedSection>
          <div className="skills">
        <p>{props.name}<span>{props.percent}</span></p>
            <div className="progress">
                <div className="progress-bar " style={{width:props.percent}}></div>
            </div>
          </div>
        
  
       </AnimatedSection>
     )
}

export default Skills;