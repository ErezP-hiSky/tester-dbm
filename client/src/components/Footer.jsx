import React from 'react';
import '../sass/main.scss';


function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="main__footer">
            <p className="main__footer__p"> Copyright © {year} </p>
        </footer>
    );
}

export default Footer;
