import React from 'react';
import Menu from "./Menu";
import '../styles/components/header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <div className="logo_header">
                <Link to="/">
                <img className="logo_header" src="../asset/img/logo-bleu-tr.png" alt="logo" />
                </Link>
                </div>
            <div className="navbar-header">
                <Menu/>
            </div>

        </div>
    );
};

export default Header;