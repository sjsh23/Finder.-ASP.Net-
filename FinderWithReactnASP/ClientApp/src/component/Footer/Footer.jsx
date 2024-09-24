import React from 'react';
import './Footer.css';

const Footer = () => {
return (
    <footer className="footer">
    <div className="footer-section finder-section">
        <h2>FINDER</h2>
        <p>Dapatkan "info kost yang murah" hanya di Finder App. Mau "Sewa Kost Murah dan Nyaman"?</p>
    </div>
    <div className="footer-section">
        <h3>KEBIJAKAN</h3>
        <p>Kebijakan Privasi</p>
        <p>Syarat dan Ketentuan Umum</p>
    </div>
    <div className="footer-section">
        <h3>HUBUNGI KAMI</h3>
        <p>cs@FINDER.com</p>
        <p>+6286969696969</p>
    </div>
    </footer>
);
};

export default Footer;
