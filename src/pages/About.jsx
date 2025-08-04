import React from "react";
import { Element } from "react-scroll";
import icons from "../component/Icons";
import { SVG } from "../SVGdata";
import FadeRightAnimate from "../component/FadeRightAnimate";


function About(){
    
return (
  <Element name="about">
    <section  id="about"  className="relative flex flex-col items-center
     justify-center z-0 m-6 ">
      <h2 className="text-4xl mb-4 md:text-5xl sm:mb-2
       lg:text-4xl font-inter font-bold ">About Me</h2>
       <div  className="space-y-6 text-center max-w-2xl mx-auto ">
          <p className="text-base  sm:text-lg lg:text-xl text-neutral-900 
            pb-4 sm:pb-0 leading-relaxed ">
            I'm Mustapha Ado, a self-taught and highly motivated full-stack web developer.
             Everything I’ve learned whether it's frontend design, backend development, or
              creating digital products has been through personal dedication and hands-on 
              experience, not formal education. I’m a fast learner who thrives on 
              challenges, constantly exploring new technologies to grow my skills
               and build practical, real-world solutions.</p>
       </div>

        { /*Horinzontal Scrolling Icons section */}

       <div className=" py-8 overflow-hidden relative m-6
          ">
         <h2 className="text-2xl font-bold mb-6 underline underline-offset-4
          text-center">skills</h2>
         <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen 
             relative overflow-hidden ">
          <div className=" whitespace-nowrap animate-[scroll_25s_linear_infinite] 
          flex items-center gap-12 ">
            {[...Array(2)].flatMap((_, i) =>
              icons.map((item, index) => (
                <div key={`${item.name}-${i}`} className="flex flex-col items-center
                   sm:text-4xl text-2xl">
                  {item.icon}
                  <span className="text-xs sm:text-2xl text-black mt-1">{item.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
    </div>

       { /*services sections */ }
     <div className="m-2 flex flex-col justify-center items-center">
       <div className=" p-3 md:p-4  bg-neutral-700
           rounded-xl mb-5 w-fit text-center ">
         <h3 className="text-3xl text-center text-white font-semibold ">What I Can Offer</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
        {SVG.map((item, index) => 
          <FadeRightAnimate key={item.id || index}>
            <div
          className="group flex flex-col justify-center items-center
               md:items-start md:text-left text-center group 
               lg:items-start lg:text-center
              transform transition-transform duration-300
              hover:translante-y-2 hover:scale-105 
              h-full p-4 ">
            <img className="group-hover:animate-[shake_0.5s_ease-in-out] inline-block size-[64px] mb-4 md:mx-0 lg:mx-auto" src={item.source} alt={item.heading} />
            <h3 className="text-2xl font-bold text-center  mb-4">{item.heading}</h3>
            <p className="text-center text-sm  md:w-auto opacity-95
                            md:text-left mb-2">{item.Content}</p>
           <ul className="list-disc list-inside
            text-sm text-left font-bold  mb-2 ">
              {item.list.map((tech, i) => (
                <li key={i}><span className="text-2xl
                 text-yellow-400 m-2 mt-4">•</span>{tech}</li>
              ))}
            </ul>
            </div>
          </FadeRightAnimate>
        )}
      </div>   
      </div>
    </section>
  </Element>
);
}

export default About;