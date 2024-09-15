import React from 'react';
import Student from "./Student";
import '../styles/components/about.css';

const About = () => {
    return (
        <div className="about-container">

            <div className="aboutMe">
                <h3>A propos de moi</h3>

            <div className="textAbout">
                <p>Je m'appelle Elise Debels, j'ai 27 ans et je suis originaire des Hauts-de-France. Depuis mon enfance, j'ai toujours été passionnée par le massage et par le soin apporté aux autres. Cette passion m'a guidée tout au long de mon parcours et a façonné ma carrière.</p>
                <p>En 2016, après avoir obtenu mon baccalauréat avec mention Bien, j'ai quitté ma région pour entrer à l'Association Valentin Haüy (AVH), la seule école en France qui propose un diplôme d'État de masseur bien-être, située dans le 7e arrondissement de Paris. Cette école, adaptée pour les malvoyants et non-voyants, m'a permis de développer mon toucher, un atout essentiel dans ma pratique professionnelle, en raison de ma déficience visuelle de naissance, qui est une pathologie évolutive.</p>
                <p>Pour moi, mon handicap est une force. Il m'a permis de développer mon sens du toucher et d'affiner d'autres perceptions. J'ai adapté ma vie de manière à ce que mon handicap ne me mette jamais en difficulté. Deux ans après mon arrivée à Paris, j'ai obtenu mon diplôme de masseuse bien-être en juillet 2018.</p>
                <p>Suite à l'obtention de mon diplôme, j'ai rejoint la société JOAM et, depuis 2018, j'ai eu la chance d'intervenir chaque semaine auprès de grandes entreprises telles que Christian Dior, Balmain Paris, Total Énergie, Universal, Pernod Ricard, et bien d'autres sur les secteurs de Lille et Paris. Aujourd'hui indépendante, je possède mon propre numéro de Siret, et je suis fière de développer ma clientèle et de promouvoir le bien-être en entreprise et auprès des particuliers sur Lille et ses alentours.</p>
            </div>
            </div>
            <div className="student">
                <h3>Mes formations</h3>
                    <Student/>
            </div>
            <div className="massage">
                <h3>Mon approche du massage</h3>
                <div className="text-massage">
                    <p>Le massage est pour moi plus qu'une technique : c'est un art de vivre et une passion depuis mon plus jeune âge. Mon approche repose sur une écoute attentive, une compréhension sans parole, et une capacité à ressentir ce qui se passe sous mes mains.</p>
                    <p>Chaque massage que je donne est une invitation à déposer ses craintes et ses tensions dans un espace de non-jugement. Il ne s'agit pas seulement de suivre un protocole, mais aussi de savoir quand s'en écarter pour apporter un soulagement maximal, en ciblant les tensions et les blocages énergétiques.</p>
                    <p>Aujourd'hui, je pratique avec un toucher plus conscient, basé sur des protocoles concrets, tout en restant à l'écoute des besoins individuels de chaque personne. Mon objectif est de vous soulager, physiquement et psychologiquement, à travers une expérience de massage personnalisée et bienveillante.</p>
                </div>

            </div>

        </div>
    );
};

export default About;