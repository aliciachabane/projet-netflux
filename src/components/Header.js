import React from "react";
import "../components/Header.css";
import netflix from "../assets-header/NETFLIX.svg";
import original from "../assets-header/ORIGINAL.svg";
import narcos from "../assets-header/logo-narcos.svg";
import description from "../assets-header/Description.svg";
import play from "../assets-header/btn-play.svg";
import mylist from "../assets-header/btn-my-list.svg";

function Header() {
return (
<header className="head">
                <img className="netflix" src={netflix} alt="Netflix" /> 
                <img className="original" src={original} alt="original"/> 
            <div className="narcos">
                <img className="logo-narcos" src={narcos} alt="Narcos-logo"/>     
            </div>
        <img className="description" src={description} alt="description"/>     
            <div className="contain"> 
                <img className="btn-play" src={play} alt="btn-play"/>
                <img className="my-list" src={mylist} alt="btn-list"/>
              
            </div>
    </header>
);
}
export default Header;
