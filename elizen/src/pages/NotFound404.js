import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/pages/404.css';
import LogoBeige from "../components/LogoBeige";
import Footer from "../components/Footer";

const NotFound404 = () => {
    return (
        <div className="Error404">
            <header>
                <div className="headerError404-container">
                    <LogoBeige/>
                </div>
            </header>
            <main>
                <p>La page que vous cherchez n'existe pas!</p>
                <p><Link to="/">Vous pouvez retourner à la page d'acceuil</Link></p>

            </main>


            <div className="footer-container">
                <Footer/>
            </div>


        </div>
    );
};

export default NotFound404;