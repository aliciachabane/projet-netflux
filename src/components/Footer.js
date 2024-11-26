import React from "react";
import social from "../assets-footer/Socials.svg";
import column1 from "../assets-footer/Column-1.svg";
import under from "../assets-footer/Under.svg";
import  column2 from "../assets-footer/Column-2.svg";
import  column3 from "../assets-footer/Column-3.svg";
import  column4 from "../assets-footer/Column-4.svg";
import "../components/Footer.css";
function Footer() {
    return (
        <div className='footer'> 
         <div className="Col1">
         <img className="social" src={social} alt="social" />
         <img className="column1" src={column1} alt="colum" />
         <img className="under"src={under} alt="under"/>
         </div>
         <img className="column2" src={column2} alt="colum" />
         <img className="column3" src={column3} alt="colum" />
         <img className="column4" src={column4} alt="colum" />

            </div>
        
    );
}

export default Footer;
