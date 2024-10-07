import React, { useEffect } from 'react';
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
    const scrollToHash = () => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        // Au montage, on défile vers l'ancre actuelle
        scrollToHash();

        // Écoute les changements de hash dans l'URL
        window.addEventListener('hashchange', scrollToHash);

        // Nettoie l'écouteur lors du démontage
        return () => {
            window.removeEventListener('hashchange', scrollToHash);
        };
    }, []);

    return (
        <div className="massage">
            <div className="header_bar">
                <Header />
            </div>
            <div className="bandeau-massg">
                <BandeauMassage />
            </div>
            <div className="massage_intro">
                <h1>L'Art du Massage : Un Voyage de Bien-Être et de Sérénité</h1>
                <h2>Découvrez Nos 9 Techniques de Massage pour votre Bien-Être</h2>
                <p>
                    Plongez dans l'univers apaisant du massage, une pratique ancestrale qui allie le toucher bienveillant
                    à des techniques précises pour vous offrir un moment de détente et de soin profond. Bien plus qu'un
                    simple moyen de relaxation, le massage est une invitation à reconnecter le corps et l'esprit, à
                    apaiser les tensions accumulées, et à rétablir un équilibre intérieur.
                </p>
            </div>

            <div className="amma_assis" id="ammaassis">
                <AmmaAssis />
            </div>
            <div className="shiatsu_trad" id="shiatsu">
                <Shiatsu_trad />
            </div>
            <div className="thailandais" id="thailandais">
                <Thailandais />
            </div>
            <div className="reflexologie" id="reflexologie">
                <Reflexologie />
            </div>
            <div className="californien" id="californien">
                <Californiens />
            </div>
            <div className="pierres_chaudes" id="pierreschaudes">
                <Pierres_chaudes />
            </div>
            <div className="ayurvedique" id="ayurvedique">
                <Ayurvedique />
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
};

export default Massage;
