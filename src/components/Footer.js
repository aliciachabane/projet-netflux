import React from "react";

import icfacebook from "../assets-footer/ic-facebook.svg";
import icinstagram from "../assets-footer/ic-instagram.svg";
import ictwitter from "../assets-footer/ic-twitter.svg";
import icyoutube from "../assets-footer/ic-youtube.svg";

import audio from "../assets-footer/Audio et sous-titres.svg";
import presse from "../assets-footer/Presse.svg";
import confidentialité from "../assets-footer/Confidentialité.svg";
import contacter from "../assets-footer/Nous contacter.svg";

import servicecode from "../assets-footer/btn-code.svg";
import code from "../assets-footer/© 1997-2018 Netflix,.svg";

import autodescription from "../assets-footer/Autodescription.svg";
import investisseur from "../assets-footer/Relations investisse.svg";
import information from "../assets-footer/Informations légales.svg";

import centreaide from "../assets-footer/Centre d’aide.svg";
import recrutement from "../assets-footer/Recrutement.svg";
import cookies from "../assets-footer/Préférences de cooki.svg";

import cadeaux from "../assets-footer/Cartes cadeaux.svg";
import condition from "../assets-footer/Conditions d’utilisa.svg";
import mention from "../assets-footer/Mentions légales.svg";


import "../components/Footer.css";
function Footer() {
    return (
        <div className='footer'> 
       
       <div className="social">
            <img className="facebook" src={icfacebook} alt="facebook" />   
            <img className="instagram" src={icinstagram} alt="instagram" />   
            <img className="twitter" src={ictwitter} alt="twitter" />   
            <img className="youtube" src={icyoutube} alt="youtube" />   
        
            </div>
         
            <div className="totalcolumn"> 
            <div className="column"> 
            <img className="audio" src={audio} alt="audio" />   
            <img className="presse" src={presse} alt="presse" />   
            <img className="confidentialité" src={confidentialité} alt="confidentialité" />   
            <img className="contacter" src={contacter} alt="contacter" />   
            
            <img className="servicecode" src={servicecode} alt="servicecode" />   
            <img className="code" src={code} alt="code" />   
            </div>
             <div className="column">    
            <img className="autodescription" src={autodescription} alt="autodescription" />
            <img className="investisseur" src={investisseur} alt="investisseur" />  
            <img className="information" src={information} alt="information" />    
            </div>
            <div className="column">
            <img className="centreaide" src={centreaide} alt="centreaide" />
            <img className="recrutement" src={recrutement} alt="recrutement" />  
            <img className="cookies" src={cookies} alt="cookies" />   
            </div>
            <div className="column">
            <img className="cadeaux" src={cadeaux} alt="cadeaux" />
            <img className="condition" src={condition} alt="condition" />  
            <img className="mention" src={mention} alt="mention" />   
           
            </div>
       
            


       
        </div>        
           
        </div>
        
    );
}

export default Footer;
