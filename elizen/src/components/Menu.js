import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/menu.css';

const Menu = () => {
    const [showList, setShowList] = useState(false); // État pour gérer la visibilité du sous-menu

    const toggleList = () => {
        setShowList(!showList); // Inverse l'état pour afficher ou masquer le sous-menu
    };

    return (
        <div className="nav">
            <ul className="main-menu">
                <li><Link to="/">HomePage</Link></li>
                <li onClick={toggleList}>
                    <Link to="/massages">Massages</Link>
                    {showList && (
                        <ul className="submenu">
                            <li><Link to="/massages/amma-assis">Amma assis</Link></li>
                            <li><Link to="/massages/shiatsu-traditionnelle">Shiatsu traditionnelle</Link></li>
                            <li><Link to="/massages/shiatsu-decouverte">Shiatsu découverte</Link></li>
                            <li><Link to="/massages/shiatsu-femme-enceinte">Shiatsu femme enceinte</Link></li>
                            <li><Link to="/massages/thailandais">Thaïlandais</Link></li>
                            <li><Link to="/massages/reflexologie">Réflexologie plantaire ou palmaire</Link></li>
                            <li><Link to="/massages/californien">Californien</Link></li>
                            <li><Link to="/massages/pierres-chaudes">Pierres chaudes</Link></li>
                            <li><Link to="/massages/ayurvedique">Ayurvédique</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/price">Tarifs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Menu;


