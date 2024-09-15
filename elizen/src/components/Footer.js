import React from 'react';
import '../styles/components/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="logoFooter">
                <img src="../asset/img/logo-beige-tr.png" alt="logo-beige-tr"/>
            </div>
            <div>
                <p>Elizen massages | Elise Debels</p>
            </div>
            <ul>
                <li>malt</li>
                <li>linkedin</li>
                <li>facebook</li>
            </ul>
            <ul>
                <li>mentions legales</li>
                <li>CGV</li>

            </ul>
        </div>
    );
};

export default Footer;