import React from 'react';

const ServiceOption = (props) => {
    return (
        <section className="servicesPage__section">
            <h4 className="servicePage__title">{props.title}</h4>
            <p className="servicePage__text">{props.text}</p>
            <i className="fas fa-arrow-circle-down"></i>
        </section>
    );
}

export default ServiceOption;