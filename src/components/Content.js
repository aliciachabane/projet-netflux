import React from "react";
import revoir from "../assets/Revoir.svg";
import first from "../assets/FirstRow.svg";
import second from "../assets/SecondRow.svg";
import close from "../assets/ic-close.svg";
import ageor from "../assets/L’âge d’or du cinéma.svg";
import red from "../assets/red.svg";
import netdecou from "../assets/Netflix Découverte -.svg"
import desc from "../assets/Andrzej Wajda, Roman.svg";
import filmlist from "../assets/FilmList.svg"
import tab from "../assets/Tabs.svg"
import pro2 from "../assets/Third Row - Netflix Originals.svg"
import categori from "../assets/Categories.svg"
import "../components/Content.css";

function Body() {
    return (
        <div className='content'> 
            <img className="revoir" src={revoir} alt="revoir" />    
            <img className="Firstrow" src={first} alt="1row" />                 
            <img className="Secondrow" src={second} alt="2row" />
           
            <div className="back">
                <img className="close" src={close} alt="close"/>
                <img className="ageor" src={ageor} alt="ageor"/>
                <img className="red" src={red} alt="red"/>
                <img className="netdecou" src={netdecou} alt="netdecou"/>
                <img className="desc" src={desc} alt="desc"/>
                <img className="filmlist" src={filmlist} alt="filmlist"/>
                <img className="tab" src={tab} alt="tab"/>
                <img className="pro2" src={pro2} alt="programme"/> 
                <img className="categori" src={categori} alt="categori"/> 

           
           
           
            </div>
        </div>
    );
}

export default Body;
