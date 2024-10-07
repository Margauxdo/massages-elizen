import React from 'react';
import '../styles/components/footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="logoFooter">
                <Link to="/">
                <img src="../asset/img/logo-beige-tr.png" alt="logo-beige-tr"/>
                </Link>
            </div>
            <div>
                <p>Elizen massages | Elise Debels</p>

                <p><a href="../asset/CGV.pdf" download="CGV">CGV</a></p>
                <p><a href="../asset/mentions_légales.pdf" download="Mentions_légales">Mentions légales</a></p>
                <p><a href="../asset/cv.pdf" download="CV_Elise_Debels.pdf">Télécharger mon CV</a></p>
                <p>massages.elizen@gmail.com</p>
                <p>06 . 56 . 75 . 08 . 52</p>


            </div>
            <ul className="reseaux">
                <li><a href="https://www.malt.fr/profile/elisedebels"><img src="../asset/reseaux/malt.png" alt="logo malt"/></a></li>
                <li><a href="https://www.linkedin.com/in/elise-debels-a7103b188"><img src="../asset/reseaux/linkdIn.png"
                                                                                      alt="logo linkedin"/></a></li>
                <li><a href="https://www.facebook.com/elise.debels.1"><img src="../asset/reseaux/fb.png"
                                                                                      alt="logo facebook"/></a></li>

            </ul>

        </div>
    );
};

export default Footer;