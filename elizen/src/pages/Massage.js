import React from 'react';
import '../styles/pages/massages.css';

import Footer from "../components/Footer";
import Header from "../components/Header";
import AmmaAssis from "../components/Amma_assis";
import Shiatsu_trad from "../components/Shiatsu_trad";
import Thailandais from "../components/Thailandais";
import Reflexologie from "../components/Reflexologie";
import Californiens from "../components/Californiens";
import Pierres_chaudes from "../components/Pierres_chaudes";
import Ayurvedique from "../components/Ayurvedique";
import BandeauMassage from "../components/BandeauMassage";

const Massage = () => {
    return (
        <div className="massage">
            <div className="header_bar">
                <Header/>

            </div>
            <div className="bandeau-massg">
                <BandeauMassage/>
            </div>
            <div className="massage_intro">
                <h2>L'Art du Massage : Un Voyage de Bien-Être et de Sérénité</h2>
                <p>Plongez dans l'univers apaisant du massage, une pratique ancestrale qui allie le toucher bienveillant à des techniques précises pour vous offrir un moment de détente et de soin profond. Bien plus qu'un simple moyen de relaxation, le massage est une invitation à reconnecter le corps et l'esprit, à apaiser les tensions accumulées, et à rétablir un équilibre intérieur.

                    Chaque massage est une expérience unique qui répond à des besoins spécifiques : qu'il s'agisse de soulager des douleurs musculaires, d'améliorer la circulation, de réduire le stress ou simplement de s'accorder un moment de répit, il existe une technique adaptée pour vous.

                    Découvrez nos différentes techniques de massage, chacune avec ses bienfaits propres, conçues pour vous apporter bien-être et harmonie. Laissez-vous guider et choisissez celle qui correspond le mieux à vos envies et à vos besoins pour vivre un véritable moment de ressourcement.</p>
            </div>

            <h3>Découvrez Nos 9 Techniques de Massage pour votre Bien-Être</h3>
            <div className="amma_assis">
                <AmmaAssis/>
            </div>
            <div className="shiatsu_trad">
                <Shiatsu_trad/>

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