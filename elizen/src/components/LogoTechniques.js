import React from 'react';
import '../styles/components/logosTechn.css';
import {Link} from "react-router-dom";
const LogoTechniques = () => {
    return (
        <div className="logotechniques">
            <ul>
                <li className="logo-1"><Link to="/massages#ammaassis"> <img className="amma" src="../asset/illustration/amma.png" alt="logo massage amma"/></Link> </li>
                <li className="logo-2"><Link to="/massages#ayurvedique"><img className="ayurvedique" src="../asset/illustration/ayurvedique.png" alt="logo massage ayurvedique"/></Link></li>
                <li className="logo-3"><Link to="/massages#californien"><img className="calif" src="../asset/illustration/californien.png" alt="logo massage californien"/></Link></li>
                <li className="logo-4"><Link to="/massages#pierreschaudes"><img className="pc" src="../asset/illustration/pierreschaudes.png" alt="logo pierres chaudes"/></Link></li>
                <li className="logo-5"><Link to="/massages#reflexologie"><img className="reflex" src="../asset/illustration/reflexologie.png" alt="logo reflexologie"/></Link></li>
                <li className="logo-6"><Link to="/massages#shiatsu"><img className="shiatsu" src="../asset/illustration/shiatsu.png" alt="logo massage shiatsu"/></Link></li>
                <li className="logo-7"><Link to="/massages#thailandais"><img className="thai" src="../asset/illustration/thai.png" alt="logo massage thai"/></Link></li>
            </ul>

        </div>
    );
};

export default LogoTechniques;
