import React from "react";
import social from "../assets/Socials.svg";
import column1 from "../assets/Column-1.svg";
import  column2 from "../assets/Column-2.svg";
import  column3 from "../assets/Column-3.svg";
import  column4 from "../assets/Column-4.svg";
import "../components/Footer.css";
function Footer() {
    return (
        <div className='footer'> 
         <img className="social" src={social} alt="social" />
         <img className="column1" src={column1} alt="colum" />
         <img className="column2" src={column2} alt="colum" />
         <img className="column3" src={column3} alt="colum" />
         <img className="column4" src={column4} alt="colum" />

            </div>
        
    );
}

export default Footer;
