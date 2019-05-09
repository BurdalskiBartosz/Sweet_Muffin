import React from 'react';
import Form from '../components/Form/Form';

const ContactPage = () => {
    return (
        <div className="contact">
            <h2 className="contact__title">Kontakt</h2>
            <p>Jeżeli potrzebujesz więcej informacji prosimy o kontakt pod podany email bądź wypełnienie formularza.</p>
            <span>E-mail: bartosz.burdalski@gmail.com</span>


            <Form />

        </div>
    );
}

export default ContactPage;