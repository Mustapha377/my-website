import React from "react";

const d = new Date();
let year = d.getFullYear();

const Footer = ({ textColor = "text-black"}) => {

    return(
        <footer className={`text-center indent-0.5 m-0 leading-1.5 w-full 
        h-fit bottom-0 pt-1.5 pb-0 ${textColor}`}>
        <p className="font-normal  text-sm">©Ameertech| All Rights Reserved | Design by Ameer <br/>  ©{year} </p>
      </footer>
    )
}

export default Footer;