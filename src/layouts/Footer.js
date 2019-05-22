import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <span>Made by Bartosz Burdalski &copy; 2019</span>
            <a target="_blank" rel="noopener noreferrer" className="footer__link" href="https://www.facebook.com/bartek.burdalski"><i className="footer__icon fab fa-facebook"></i></a>
            <a target="_blank" rel="noopener noreferrer" className="footer__link" href="https://www.instagram.com/bartoszburdalski/"><i className="footer__icon fab fa-instagram"></i></a>
        </div>
    );
}

export default Footer;