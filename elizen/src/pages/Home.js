import React from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";

import About from "../components/About";
import LogoTechniques from "../components/LogoTechniques";
import '../styles/pages/home.css';
import Elise from "../components/Elise";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="homepage">
            <div className="header_bar">
                <Header/>

            </div>
            <div className="headBand_presentation">
                <img className="img-home" src="../asset/bg-home.png" alt="femme allongé dos découvert et mains qui la masse"/>
            </div>
            <div className="massage_technique">

                <div className="headband_text">
                    <blockquote>
                        "Libérez vos tensions, revitalisez votre énergie, et découvrez un bien-être profond avec des
                        massages personnalisés, où que vous soyez."
                    </blockquote>

                </div>
                <div className="headband_img">
                    <LogoTechniques/>
                </div>
            </div>

            <div className="about">
                <div className="imgAbout">
                    <Elise/>
                </div>
                <div className="textAbout">
                    <About/>
                </div>

            </div>
            <div className="privateOrProfessionnal">
                <h2>Massages à Domicile et en Entreprise : Bien-être à portée de main, où que vous soyez</h2>

                <div className="containerProPart">
                    <div className="imgPrice">
                        <img src="../asset/img/fondtarif.png" alt="table de massage avec serviette marron"/>
                    </div>
                    <div className="price">
                        <div className="part">
                            <h3>Offrez-vous un Instant de Bien-être à Domicile</h3>

                            <p>Offrez-vous un moment de détente et de bien-être sans quitter le confort de votre maison.
                                Je
                                me
                                déplace à votre domicile avec tout le matériel nécessaire pour vous offrir une
                                expérience de
                                massage personnalisée et adaptée à vos besoins. Que ce soit pour soulager les tensions,
                                revitaliser votre corps, ou simplement profiter d'un moment de relaxation profonde, je
                                suis
                                à
                                votre service pour vous offrir une pause bien-être à tout moment.</p>

                            <button><Link to="/price#particulier">Tarifs</Link></button>

                        </div>
                        <div className="pro">
                            <h3>Améliorez le Bien-être de vos Salariés avec des Massages en Entreprise</h3>

                            <p>Améliorez la qualité de vie au travail et la performance de vos équipes grâce aux
                                massages en
                                entreprise. Offrez à vos salariés une pause revitalisante qui soulage le stress et
                                favorise
                                la
                                détente. En seulement quelques minutes, je peux apporter un bien-être immédiat et
                                durable
                                qui
                                booste la motivation et la productivité. Un investissement dans le bien-être de vos
                                collaborateurs, pour une entreprise plus saine et plus dynamique.</p>
                            <button><Link to="/price#professionnel">Tarifs</Link></button>

                        </div>
                    </div>
                </div>


            </div>


            <div className="footer-container">
                <Footer/>
            </div>
        </div>
    );
};

export default Home;
