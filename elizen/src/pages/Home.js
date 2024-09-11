import React from 'react';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="homepage">
            <div className="header_bar">
                <Header/>

            </div>
            <div className="headBand_presentation">

            </div>
            <div className="massage_technique">
                <div className="headband_img">

                </div>
                <div className="headband_text">

                </div>
            </div>
            <div className="about">

            </div>
            <div className="privateOrProfessionnal">

            </div>


            <div className="footer-container">
                <Footer/>
            </div>
        </div>
    );
};

export default Home;
