import React, { useState } from 'react';
import AnimatedSection from './Animation.jsx'; 


const Box = ({projects} ) => {

   const [isExpanded, setisExpanded] = useState(false);


   const toggleText = () => {
    setisExpanded(!isExpanded);
   }

  return (
    <AnimatedSection>
      
      <div className='porfolio'>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <div className="project-about-con">
               <div className='project-txt-con'>
              <p className={`project-text ${isExpanded ? "expanded" : "collapsed"}`}>
                {project.about}
              </p>
              </div>
              <button className="seemore-btn"
               onClick={toggleText}>{isExpanded ? "see less" : "....see more"}</button>
            </div>
          <div className="project-links">
            <a href={project.links.web} className="button">
              🌐 Web
            </a>
            <a href={project.links.code} className="button">
              {"</>"} Code
            </a>
          </div>
          <div className="tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
     </AnimatedSection>    
  );
};

export default Box;