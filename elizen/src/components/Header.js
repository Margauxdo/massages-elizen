import React from 'react';
import Menu from "./Menu";

const Header = () => {
    return (
        <div className="Header">
            <div className="logo_header">
                <img className="logo_header" src="../asset/img/logo-bleu-tr.png" alt="logo" />
            </div>
            <div className="navbar-header">
                <Menu/>
            </div>

        </div>
    );
};

export default Header;