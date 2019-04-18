import React, { Component } from 'react';
import ServiceOption from '../components/ServiceOption/ServiceOption';

class ServicesPage extends Component {
    state = {
        services: [
            { title: "Muffinowe Torty Ślubne", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            { title: "Ciasteczkowe Chrzciny", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            { title: "Party Muffinowe", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            { title: "Muffinowe Urodziny", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            { title: "Muffinowe Urodziny", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            { title: "Muffinowe Urodziny", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },

        ]
    }

    render() {
        return (
            <div className="servicesPage">
                <h3>Nasza cukiernia poleca</h3>
                <div className="servicesPage__wrapper">
                    {this.state.services.map((service, index) =>
                        (
                            <ServiceOption key={index} title={service.title} text={service.text} />
                        ))}
                </div>
            </div>
        );
    }
}

export default ServicesPage;

