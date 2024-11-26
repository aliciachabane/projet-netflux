import React from "react";
import revoir from "../assets-content/Revoir.svg";
import first from "../assets-content/FirstRow.svg";
import second from "../assets-content/SecondRow.svg";
import close from "../assets-content/ic-close.svg";
import ageor from "../assets-content/L’âge d’or du cinéma.svg";
import red from "../assets-content/red.svg";
import netdecou from "../assets-content/Netflix Découverte -.svg";
import desc from "../assets-content/Andrzej Wajda, Roman.svg";

import ida from "../assets-content/Ida.svg";
import ilaime from "../assets-content/ilsaime2.svg";
import coldwar from "../assets-content/Cold War.svg";
import dansleau from "../assets-content/Le Couteau dans l'eau.svg";
import oval from "../assets-content/Oval 5.svg";
import triangle from "../assets-content/Triangle 1.svg";

import agedodo from "../assets-content/agedodo.svg";
import nvague from "../assets-content/La nouvelle vague fr.svg";
import direcanne from "../assets-content/Direction Cannes ma.svg";
import boliwood from "../assets-content/Bollywood Classiques.svg";
import underline from "../assets-content/Underline.svg";

import pro2 from "../assets-content/pro2.svg";


import "../components/Content.css";

function Body() {
    return (
        <div className="content">
            <img className="revoir" src={revoir} alt="revoir" />
            <div className="Firstrow">
                <img src={first} alt="1row" />
                <img src={first} alt="1row" />
                <img src={first} alt="1row" />
                <img src={first} alt="1row" />
            </div>
            <div className="Secondrow">
                <img src={second} alt="2row" />
                <img src={second} alt="2row" />
                <img src={second} alt="2row" />
                <img src={second} alt="2row" />
            </div>

            <div className="back">
                <img className="close" src={close} alt="close" />
                <img className="ageor" src={ageor} alt="ageor" />
                <img className="red" src={red} alt="red" />
                <img className="netdecou" src={netdecou} alt="netdecou" />
                <img className="desc" src={desc} alt="desc" />

                <div className="filmlist">
                    <div className="ic-play">
                        <img className="ida" src={ida} alt="ida" />
                        <div className="total">
                        <img className="oval" src={oval} alt="oval" />
                            <img className="triangle" src={triangle} alt="triangle" />
                        </div>
                    </div>
                    <div className="ic-play">
                        <img className="ilaime" src={ilaime} alt="ilaime" />
                        <div className="total">
                        <img className="oval" src={oval} alt="oval" />
                            <img className="triangle" src={triangle} alt="triangle" />
                        </div>
                    </div>
                    <div className="ic-play">
                        <img className="coldwar" src={coldwar} alt="coldwar" />
                        <div className="total">
                        <img className="oval" src={oval} alt="oval" />
                            <img className="triangle" src={triangle} alt="triangle" />
                        </div>
                    </div>
                    <div className="ic-play">
                        <img className="dansleau" src={dansleau} alt="dansleau" />
                        
                        </div>
                    </div>
                    <div className="comp">
                <img className="agdodo" src={agedodo} alt="agdodo" />
                <img className="nvague" src={nvague} alt="nvague" />
                <img className="direcanne" src={direcanne} alt="direcanne" />
                <img className="boliwood" src={boliwood} alt="boliwood" />
               </div>
                <img className="underline" src={underline} alt="underline" />
                </div>
                <img className="pro2" src={pro2} alt="pro2" />
               
               
               
                <div className="categori">
            </div>
            
            
            
            
            
            
            
            </div>
    );
}

export default Body;
