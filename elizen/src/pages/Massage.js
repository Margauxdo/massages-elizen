import React from 'react';
import Menu from "../components/Menu";

const Massage = () => {
    return (
        <div className="massage">
            <div className="navbar">
                <div className="logoNav">

                </div>
                <div className="navMenu">
                    <Menu/>
                </div>
            </div>
            <div className="title">
                <h2>les techniques de massages</h2>
            </div>
        </div>
    );
};

export default Massage;