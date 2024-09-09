import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/massages">Massages</Link></li>
                <ul>
                    <li><Link to="/massages">Amma assis</Link></li>
                    <li><Link to="/massages">Shiatsu traditionnelle</Link></li>
                    <li><Link to="/massages">Shiatsu découverte</Link></li>
                    <li><Link to="/massages">Shiatsu femme enceinte</Link></li>
                    <li><Link to="/massages">Thaïlandais</Link></li>
                    <li><Link to="/massages">Réflexologie plantaire ou palmaire</Link></li>
                    <li><Link to="/massages">Californien</Link></li>
                    <li><Link to="/massages">Pierres chaudes</Link></li>
                    <li><Link to="/massages">Ayurvédique</Link></li>
                </ul>
                <li><Link to="/price">Tarifs</Link></li>
                <ul>
                    <li><Link to="/price">Particulier</Link></li>
                    <li><Link to="/price">En entreprise</Link></li>
                </ul>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Menu;

