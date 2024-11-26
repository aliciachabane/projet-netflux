import React from "react";
import logo from "../assets-nav/logo-Netflix.svg";
import decouverte from "../assets-nav/Découverte.svg";
import serie from "../assets-nav/Séries TV.svg";
import film from "../assets-nav/Films.svg";
import Programmes from "../assets-nav/Programmes_originaux..svg";
import ajout from "../assets-nav/Ajouts récents.svg";
import liste from "../assets-nav/Ma liste.svg";
import search from "../assets-nav/search.svg";
import jeunesse from "../assets-nav/JEUNESSE.svg";
import notif from "../assets-nav/notification.svg";
import avatar from "../assets-nav/avatar.svg";
import deroulant from "../assets-nav/deroulant.svg";
import "../components/Navbar.css";

function Navbar() {
    return (
    <nav className="navbar">
          
            <img className="logo" src={logo} alt="Netflix Logo" />
            <img className="decouverte" src={decouverte} alt="Discovery Icon"/>
            <img className="serie" src={serie} alt="Series Icon" />
            <img className="film" src={film} alt="Films Icon" />
            <img className="programme" src={Programmes} alt="Originals Icon" /> 
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
