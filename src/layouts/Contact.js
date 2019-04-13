import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="contact__title">Kontakt</h2>
            <ul className="contact__infoList">
                <li className="contact__infoItem">
                    <span>E-mail: bartosz.burdalski@gmail.com</span>
                </li>
                <li className="contact__infoItem">
                    <span>Telefon: 123-456-789</span>
                </li>
                <li className="contact__infoItem">
                    <span>Adres: Wrocław</span>
                </li>
            </ul>
        </div>
    );
}

export default Contact
    ;