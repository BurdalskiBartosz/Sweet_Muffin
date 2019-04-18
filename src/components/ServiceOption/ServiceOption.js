import React from 'react';

const ServiceOption = (props) => {
    return (
        <section className="servicesPage__section">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </section>
    );
}

export default ServiceOption;