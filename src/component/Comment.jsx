import React ,{useState}from "react";
import { SocialIcons, } from "./Social_Icons";
import SlideUpAnimation from "./SlideUpAnimation";


const Comment = () => {

 const [activeLink, setActiveLink] = useState(null);
 
      
 
     const [isopen, setisclose] = useState(false);
 
     const ToggleMenu = () => {
       setisclose(!isopen)
     }
      
     const closeNav =() => {
       setisclose(false)
     }
 
     const handleSetActive = (to) => {
       setActiveLink(to);
       closeNav();
      };

    return(
        <div className="mt-10 pt-6 border-t border-white/10 flex 
        justify-center space-x-6">
  <div className="w-full bg-gradient-to-br from-white/10 to-white/5
   rounded-2xl p-6 py-8 backdrop-blur-xl">
    
    <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center gap-2">
      Connect With Me
    </h3>

    <div className="flex flex-col gap-4">
      {SocialIcons.map((Social, index) => 
        <SlideUpAnimation  key={Social.id || index} >
         <a 
       href={Social.link} target="_blank" 
      rel="noopener noreferrer"
         className="group relative flex items-center justify-between p-4
         rounded-lg bg-white/5 border border-neutral-700 overflow-hidden
          hover:border-white/20 transition-all duration-500">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20
         transition-opacity duration-500 bg-gradient-to-r from-[#333]
          to-[#24292e]"></div>
        
        <div className="relative flex items-center gap-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 rounded-md transition-all
             duration-500 group-hover:scale-110 group-hover:opacity-30"
              ></div>
            <div className="relative p-2 rounded-md bg-gradient-to-r from-[#333]
          to-[#24292e] opacity-50">
             <Social.icon className=" w-6 h-6 transition-all 
              duration-500 group-hover:scale-105 text-white"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold pt-[0.2rem] text-neutral-800
             tracking-tight leading-none group-hover:text-white transition-colors
              duration-300">{Social.Title}</span>
            <span className="text-sm text-neutral-800 opacity-90">{Social.handle}</span>
          </div>
        </div>
      </a>
      </SlideUpAnimation>
     )}
    </div>
  </div>
</div>
    )
}

export default Comment;