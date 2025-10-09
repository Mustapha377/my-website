import React from "react";

import { Facebook, Github, Linkedin } from "lucide-react";




function Logo(){
        return (
     
        <div className="ml-auto p-4">
         <div className="hidden  gap-2 md:gap-4  md:flex ">
            <div className="group relative p-2 rounded-md bg-gradient-to-r
             from-[#0463bd] to-[#5299f5] opacity-50 hover:scale-110
              transform transition-all duration-300  ">
                <a href="https://www.facebook.com/mustapha.ado.7731">
                <Facebook className="text-white font-bold group-hover:animate-shake" /></a>       
            </div>
            <div className="group relative p-2 rounded-md bg-gradient-to-r
             from-[#333] to-[#24292e] opacity-50 hover:scale-110
              transform transition-all duration-300 ">
                <a href="https://github.com/Mustapha377">
                <Github className="text-white font-bold group-hover:animate-shake"/></a> 
            </div>
            <div className="group relative p-2 rounded-md bg-gradient-to-r
             from-[#095870] to-[#77bfe9] opacity-50 hover:scale-110
              transform transition-all duration-300 ">
                <a href="https://www.linkedin.com/in/mustapha-ado-musa-1b1462292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <Linkedin className="text-white font-bold group-hover:animate-shake " /></a>        
            </div>
         </div>
        </div>
   
    )
}

export default Logo;