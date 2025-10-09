import React, { useState } from 'react';
import AnimatedSection from './Animation'; 


const Box = ({project} ) => {
   const { project_name, project_about, languages, media_type, media_url } = project;

   const [isExpanded, setisExpanded] = useState(false);


   const toggleText = () => {
    setisExpanded(!isExpanded);
   }

  return (
    <AnimatedSection>
      
         <div className='project-item-con'>
            <div className="project-box">
            {media_type === "video" ? (
            <video className="project-media" controls>
              <source src={media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img className="project-media" src={media_url} alt={project_name} />
          )}
            </div>

            <h3 className="project-name">{project_name}</h3>

            <div className="project-about-con">
               <div className='project-txt-con'>
              <p className={`project-text ${isExpanded ? "expanded" : "collapsed"}`}>
                {project_about}
              </p>
              </div>
              <button className="seemore-btn"
               onClick={toggleText}>{isExpanded ? "see less" : "....see more"}</button>
            </div>

            <div>
               <button className="project-btn">web</button>
               <button className="project-btn">code</button>
            </div>
           
            <div className="project-lan-con">
        {languages && languages.map((lang, index) => (
          <div className="project-lan" key={index}>
            <h3>{lang}</h3>
          </div>
        ))}
       </div>
          </div>
       
     </AnimatedSection>    
  );
};

export default Box;