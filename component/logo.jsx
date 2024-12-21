import React,  { useEffect, useState, useRef } from "react";
import logoData from "./logo-Data";

const data = logoData;


function Logo(){
    
    console.log(data[0].src)
    return (
     
        <div className="logo-Container">
         <div className="logo-Container2">
         <a href="https://www.facebook.com/mustapha.ado.7731"><img className="logo" src={data[0].src}></img></a>       
         <a href="https://github.com/Mustapha377"><img className="logo" src={data[1].src}></img></a> 
         <a href="https://www.linkedin.com/in/mustapha-ado-musa-1b1462292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className="logo" src={data[2].src}></img></a>        
         </div>
        </div>
   
    )
}

export default Logo;