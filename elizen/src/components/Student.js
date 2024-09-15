import React, { useState } from 'react';
import '../styles/components/student.css';

const Student = () => {
    // State pour suivre quel détail est actuellement visible
    const [visibleDetail, setVisibleDetail] = useState(null);

    // Fonction pour afficher les détails
    const showDetails = (id) => {
        setVisibleDetail(id);
    };

    return (
        <div>

            <div className="timeline">
                <div className="timeline-item" onClick={() => showDetails('details1')}>
                    <span className="date">2018</span>
                </div>
                <div className="timeline-item" onClick={() => showDetails('details2')}>
                    <span className="date">2024</span>
                </div>
            </div>

            {/* Détails cachés/affichés dynamiquement */}
            {visibleDetail === 'details1' && (
                <div className="details">
                    <h4>Diplôme de Masseuse Bien-être - 7 techniques</h4>
                    <p>
                        Obtenu en juillet 2018 à l'AVH, Paris, diplôme d'État reconnu par la RNCP, le ministère du travail
                        et l'éducation nationale.
                    </p>
                </div>
            )}

            {visibleDetail === 'details2' && (
                <div className="details">
                    <h4>Massage Shiatsu femme enceinte - 2024</h4>
                    <p>Nouvelle technique de massage acquises</p>
                </div>
            )}
        </div>
    );
};

export default Student;
