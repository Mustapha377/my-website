import React from "react";
import Darkfb from "../asset/icons/facebook-com.svg";
import Darkgit from "../asset/icons/github-icon.svg";
import Darklink from "../asset/icons/linkedin-square-icon.svg";




function Logo(){
    
    console.log([Darkfb, Darkgit])
    return (
     
        <div className="logo-Container">
         <div className="logo-Container2">
         <a href="https://www.facebook.com/mustapha.ado.7731"><img className="logo" src={Darkfb}></img></a>       
         <a href="https://github.com/Mustapha377"><img className="logo" src={Darkgit}></img></a> 
         <a href="https://www.linkedin.com/in/mustapha-ado-musa-1b1462292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className="logo" src={Darklink}></img></a>        
         </div>
        </div>
   
    )
}

export default Logo;