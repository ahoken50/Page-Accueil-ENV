import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            marginTop: '4rem',
            padding: '2rem',
            textAlign: 'center',
            color: '#ffffff',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)'
        }}>
            <p style={{ fontWeight: 'bold' }}>
                &copy; {new Date().getFullYear()} Ville de Val-d'Or. Tous droits réservés.
            </p>
            <p>
                <a
                    href="https://www.ville.valdor.qc.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#81c784', textDecoration: 'none', fontWeight: 'bold' }}
                >
                    Visitez le site officiel
                </a>
            </p>
        </footer>
    );
};

export default Footer;
