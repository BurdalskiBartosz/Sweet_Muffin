import React from 'react';

const ServiceOption = (props) => {
    return (
        <div className="servicesPage__service">
            <h4 className="servicePage__title">{props.title}</h4>
            <div className='service__wrapper'>
                <p className="servicePage__description">{props.description}</p>
                <div>
                    <img className="service__img" src={props.serviceImg} alt=''></img>
                </div>
            </div>
        </div>
    );
}

export default ServiceOption;