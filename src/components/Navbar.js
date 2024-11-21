import React from "react";
import logo from "../assets/logo-Netflix.svg";
import decouverte from "../assets/Découverte.svg";
import serie from "../assets/Séries TV.svg";
import film from "../assets/Films.svg";
import programme from "../assets/Programmes originaux.svg";
import ajout from "../assets/Ajouts récents.svg";
import liste from "../assets/Ma liste.svg";
import search from "../assets/search.svg";
import jeunesse from "../assets/JEUNESSE.svg";
import notif from "../assets/notification.svg";
import avatar from "../assets/avatar.svg";
import deroulant from "../assets/deroulant.svg";
import "../components/Navbar.css";

function Navbar() {
    return (
    <nav className="navbar">
            <img className="logo" src={logo} alt="Netflix Logo" />
            <img className="decouverte" src={decouverte} alt="Discovery Icon"/>
            <img className="serie" src={serie} alt="Series Icon" />
            <img className="film" src={film} alt="Films Icon" />
            <img className="programme" src={programme} alt="Originals Icon" /> 
            <img className="ajout" src={ajout} alt="Recent Additions Icon" /> 
            <img className="liste" src={liste} alt="My List Icon" /> 
            <img className="search" src={search} alt="Search Icon" /> 
            <img className="jeunesse" src={jeunesse} alt="Kids Icon" /> 
            <img className="notif" src={notif} alt="Notifications Icon" /> 
            <img className="avatar" src={avatar} alt="Avatar Icon" /> 
            <img className="deroulant" src={deroulant} alt="Dropdown Icon" /> 
        </nav>  
         
    );
}

export default Navbar;
