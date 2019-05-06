import React from 'react';

const ServiceOption = (props) => {
    return (
        <div className="servicesPage__service">
            <h4 className="servicePage__title">{props.title}</h4>
            <p className="servicePage__text">{props.text}</p>
            <p className="servicePage__text">{props.description}</p>
            <img src={props.serviceImg}></img>

        </div>
    );
}

export default ServiceOption;