import React from 'react';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AmmaAssis from "../components/Amma_assis";
import Shiatsu_trad from "../components/Shiatsu_trad";
import Shiatsu_decouv from "../components/Shiatsu_decouv";
import Shiatsu_enceinte from "../components/shiatsu_enceinte";
import Thailandais from "../components/Thailandais";
import Reflexologie from "../components/Reflexologie";
import Californiens from "../components/Californiens";
import Pierres_chaudes from "../components/Pierres_chaudes";
import Ayurvedique from "../components/Ayurvedique";

const Massage = () => {
    return (
        <div className="massage">
            <div className="header_bar">
                <Header/>

            </div>
            <div className="massage_intro">
                <h2>les techniques de massages</h2>
                <p>texte sur les massages</p>
            </div>
            <div className="amma_assis">
                <AmmaAssis/>
            </div>
            <div className="shiatsu_trad">
                <Shiatsu_trad/>

            </div>
            <div className="shiatsu_decouverte">
                <Shiatsu_decouv/>

            </div>
            <div className="shiatsu_enceinte">
                <Shiatsu_enceinte/>

            </div>
            <div className="thailandais">
                <Thailandais/>

            </div>
            <div className="reflexologie">
                <Reflexologie/>
            </div>
            <div className="californien">
                <Californiens/>
            </div>
            <div className="pierres_chaudes">
                <Pierres_chaudes/>
            </div>
            <div className="ayurvédique">
                <Ayurvedique/>
            </div>


            <div className="footer-container">
                <Footer/>
            </div>
        </div>
    );
};

export default Massage;