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
import icrow from "../assets-content/ic-arrow copy.svg";

import ob1 from "../assets-content/Object1.svg";
import ob2 from "../assets-content/Object2.svg";
import ob3 from "../assets-content/Object3.svg";
import ob4 from "../assets-content/Object4.svg";
import ob5 from "../assets-content/Object5.svg";
import ob6 from "../assets-content/Object6.svg";
import ob7 from "../assets-content/Object7.svg";
import ob8 from "../assets-content/3-03@2x.svg";

import categori from "../assets-content/Catégories.svg";

import categori1 from "../assets-content/bg copy@2x.svg";
import categori2 from "../assets-content/bg copy 2@2x.svg";
import categori3 from "../assets-content/bg copy 3@2x.svg";
import categori4 from "../assets-content/bg copy 4@2x.svg";
import categori5 from "../assets-content/bg copy 5@2x.svg";
import categori6 from "../assets-content/bg copy 6@2x.svg";
import categori7 from "../assets-content/bg copy 7@2x.svg";

import catetitre1 from "../assets-content/Comédie.svg";
import catetitre2 from "../assets-content/Action.svg";
import catetitre3 from "../assets-content/Drame Copy.svg";
import catetitre4 from "../assets-content/Sci-Fi.svg";
import catetitre5 from "../assets-content/Romance.svg";
import catetitre6 from "../assets-content/Thriller.svg";
import catetitre7 from "../assets-content/Émissions TV.svg";

import languette from "../assets-content/languette.svg";

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
                <img className="pro2" src={pro2} alt="pro2" />
            </div>
            <img className="icrow" src={icrow} alt="icrow" />

            <div className="objet">
                <img className="ob1" src={ob1} alt="ob1" />
                <img className="ob2" src={ob2} alt="ob2" />
                <img className="ob3" src={ob3} alt="ob3" />
                <img className="ob4" src={ob4} alt="ob4" />
                <img className="ob5" src={ob5} alt="ob5" />
                <img className="ob6" src={ob6} alt="ob6" />
                <img className="ob7" src={ob7} alt="ob7" />
                <img className="ob8" src={ob8} alt="ob8" />
            </div>

            <img className="categori" src={categori} alt="categori" />

            <div className="category">
                <div className="category-item">
                    <img className="categori1" src={categori1} alt="categori1" />
                    <div className="catetitre">
                        <img className="catetitre1" src={catetitre1} alt="catetitre1" />
                        <img className="languette" src={languette} alt="languette1" />
                    </div>
                </div>
                <div className="category-item">
                    <img className="categori2" src={categori2} alt="categori2" />
                    <div className="catetitre">
                        <img className="catetitre2" src={catetitre2} alt="catetitre2" />
                        <img className="languette" src={languette} alt="languette2" />
                    </div>
                </div>
                <div className="category-item">
                    <img className="categori3" src={categori3} alt="categori3" />
                    <div className="catetitre">
                        <img className="catetitre3" src={catetitre3} alt="catetitre3" />
                        <img className="languette" src={languette} alt="languette3" />
                    </div>
                </div>
                <div className="category-item">
                    <img className="categori4" src={categori4} alt="categori4" />
                    <div className="catetitre">
                        <img className="catetitre4" src={catetitre4} alt="catetitre4" />
                        <img className="languette" src={languette} alt="languette4" />
                    </div>
                </div>
                <div className="category-item">
                    <img className="categori5" src={categori5} alt="categori5" />
                    <div className="catetitre">
                        <img className="catetitre5" src={catetitre5} alt="catetitre5" />
                        <img className="languette" src={languette} alt="languette5" />
                    </div>
                    </div>
                    <div className="category-item">
                    <img className="categori6" src={categori6} alt="categori6" />
                    <div className="catetitre">
                        <img className="catetitre6" src={catetitre6} alt="catetitre6" />
                        <img className="languette" src={languette} alt="languette6" />
                    </div>
                    </div>
                    <div className="category-item">
                    <img className="categori7" src={categori7} alt="categori7" />
                    <div className="catetitre">
                        <img className="catetitre7" src={catetitre7} alt="catetitre7" />
                        <img className="languette" src={languette} alt="languette7" />
                    </div>
                    </div>
                    </div>
                    </div>
            );

}

export default Body;
