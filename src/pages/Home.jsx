import React from "react";
import { Element, Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../component/logo";
import AnimatedHeading from "../component/HeadingAnimate";
import {Folders, Send} from "lucide-react";


function Home(){

    return(
     <Element name="home">  
      <section  id="home" className="bg-gradient-to-b from-neutral-900
               via-neutral-700 to-neutral-100">
        <div className="flex flex-col justify-center h-1/2 
             md:h-full lg:h-screen max-w-7xl mx-auto px-8 md:px-6 py-4 md:py-8">
          
            <h1 className="flex justify-center  gap-1  font-bold font-inter
             text-[24px] pt-4 mt-16  md:mt-16 lg:mt-20 text-center text-neutral-50
             md:text-3xl md:leading-[50px] lg:text-4xl lg:leading-[60px]
             animate-[pull-down_0.5s_ease-out_forwards]">
              <AnimatedHeading text="Hello World" /> </h1>
          <a name="home"></a>
          <h2 className= 
             "text-neutral-900 mt-4  text-4xl ">

            <strong datta-aos="fade-left" data-aos-duration="1000" 
            className="text-[40px] my-10  text-gray-100 flex flex-col
             md:text-[48px]  "> <span>I'm</span>
              <span>Full-Stack</span>
              <span className="bg-gradient-to-r from-neutral-950 via-gray-800
               to-slate-700 bg-[lengh:300%_100%] bg-clip-text animate-shine
               text-transparentn drop-shadow-[0_0_8px_rgb(255,255,255,0.6)]">
              Web Developer</span> </strong>
          
              </h2>
         <div className="relative w-[100%]  whitespace-normal
             overflow-hidden text-2xl md:text-4xl text-neutral-900 pb-10
            max-w-[80%] h-[150px] wrap-break-word md:h-full md:w-screen md:mb-20 ">
            <div className="absolute md:top-0 md:left-0 md:whitespace-nowrap ">
              <Typewriter
              words={["i design and build website for your dream "]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              ></Typewriter> 
            </div>
         </div>
            <div className=" flex flex-wrap gap-3 md:gap-4">
              <Link to="contact"
                  smooth={true}
                  duration={500}
              ><button className="group btn flex btn-primary focus:outline-none
                focus:ring-neutral-700">Contact 
                <Send className="size-[20px] pl-[2px] text-amber-300 
                group-hover:animate-shake" /></button> </Link>

              <Link to="project"
                  smooth={true}
                  duration={500}
              ><button className="group btn flex btn-primary focus:outline-none
                focus:ring-neutral-700">Projects
                 <Folders className="size-[20px] pl-[2px] text-amber-300 
                 group-hover:animate-shake" /></button></Link>
            </div>
          <Logo  />
         </div>
       </section>
    </Element>   
        
    )
}

export default Home;