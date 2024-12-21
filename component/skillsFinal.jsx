import React, { useState } from "react";
import Skills from "./skills";
import SkillsArray from "./Skillserray";
import {useInView} from "react-intersection-observer";

const Final = ()=> {
    const {ref, inView} = useInView({threshold: 0.5})
     const [Items, setItems] = useState([]);

    return (
        <section className="skills-con ">
          <div
             ref={ref} 
             className={`Animation ${inView ? "animate" : ""}`}
          >  
          <h2 className="section-heading">skills</h2>
         {SkillsArray.map((SkillsArray, index) => 
             (<Skills key = {index} id = {index}
              name = {SkillsArray.name}
              percent = {SkillsArray.percent}
              />))}
         </div>
        </section>
    )
}

export default Final;
