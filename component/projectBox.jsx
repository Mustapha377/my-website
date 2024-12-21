import React, { useState } from 'react';
import AnimatedSection from './Animation'; 


const Box = () => {
   const [isExpanded, setisExpanded] = useState(false);

   const toggleText = () => {
    setisExpanded(!isExpanded);
   }

  return (
    <AnimatedSection>
      
         <div className='project-item-con'>
            <div className="project-box">
              <img></img>
            </div>

            <h3 className="project-name">youtube</h3>

            <div className="project-about-con">
               <div className='project-txt-con'>
              <p className={`project-text ${isExpanded ? "expanded" : "collapsed"}`}>
                e bettthis is some sample text that  will partially hidden.
                 you can expand this section to read more of this text 
                , so that you can have morer experiernce on the text.
                e bettthis is some sample text that  will partially hidden.
                 you can expand this section to read more of this text 
                , so that you can have morer experiernce on the text.
                e bettthis is some sample text that  will partially hidden.
                 you can expand this section to read more of this text 
                , so that you can have morer experiernce on the text.
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
               <div className="project-lan"><h3>html</h3></div>
               <div  className="project-lan"><h3>css</h3></div>
               <div  className="project-lan"><h3>react</h3></div>
            </div>
          </div>
       
     </AnimatedSection>    
  );
};

export default Box;