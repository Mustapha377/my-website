import React from "react";

const d = new Date();
let year = d.getFullYear();

const Footer = () => {

    return(
        <footer className="footer-rights">
             <p className="footer-rights-txt">©Ameertech| All Rights Reserved | Design by Ameer <br/>  ©{year} </p>
            </footer>
    )
}

export default Footer;