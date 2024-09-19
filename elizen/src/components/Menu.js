import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/menu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    const [showList, setShowList] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleList = () => {
        setShowList(!showList);
    };

    const toggleBurger = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav">
            <button className="burger-menu" onClick={toggleBurger}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            {/* Utilisation d'une classe conditionnelle pour le menu principal */}
            <ul className={`main-menu ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/">HomePage</Link></li>
                <li onClick={toggleList}>
                    <Link to="/massages">Massages</Link>
                    {showList && (
                        <ul className="submenu">
                            <li><Link to="/massages#ammaassis">Amma assis</Link></li>
                            <li><Link to="/massages#shiatsu">Shiatsu traditionnelle</Link></li>
                            <li><Link to="/massages#thailandais">Thaïlandais</Link></li>
                            <li><Link to="/massages#reflexologie">Réflexologie plantaire ou palmaire</Link></li>
                            <li><Link to="/massages#californien">Californien</Link></li>
                            <li><Link to="/massages#pierreschaudes">Pierres chaudes</Link></li>
                            <li><Link to="/massages#ayurvedique">Ayurvédique</Link></li>
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



