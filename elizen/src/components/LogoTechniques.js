import React from 'react';
import '../styles/components/logosTechn.css';
const LogoTechniques = () => {
    return (
        <div className="logotechniques">
            <ul>
                <li className="logo-1"><img className="amma" src="../asset/illustration/amma.png" alt="logo massage amma"/> </li>
                <li className="logo-2"><img className="ayurvedique" src="../asset/illustration/ayurvedique.png" alt="logo massage ayurvedique"/></li>
                <li className="logo-3"><img className="calif" src="../asset/illustration/californien.png" alt="logo massage californien"/></li>
                <li className="logo-4"><img className="pc" src="../asset/illustration/pierreschaudes.png" alt="logo pierres chaudes"/></li>
                <li className="logo-5"><img className="reflex" src="../asset/illustration/reflexologie.png" alt="logo reflexologie"/></li>
                <li className="logo-6"><img className="shiatsu" src="../asset/illustration/shiatsu.png" alt="logo massage shiatsu"/></li>
                <li className="logo-7"><img className="thai" src="../asset/illustration/thai.png" alt="logo massage thai"/></li>
            </ul>
        </div>
    );
};

export default LogoTechniques;
