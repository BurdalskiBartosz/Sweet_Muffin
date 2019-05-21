import React, { Component } from 'react';
import ServiceOption from '../components/ServiceOption/ServiceOption';
import Service1 from '../images/Services images/serv_img1.jpg'
import Service2 from '../images/Services images/serv_img2.jpg'


class ServicesPage extends Component {
    state = {
        services: [
            { title: "Muffinowe Torty Ślubne", serviceImg: Service1, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            { title: "Ciasteczkowe Chrzciny", serviceImg: Service2, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            { title: "Ciasteczkowy Ślub", serviceImg: Service1, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
        ]
    }

    render() {
        return (
            <div className="servicesPage">
                <h3 className="servicesPage__title">Nasza cukiernia poleca</h3>
                <section className="servicesPage__wrapper">
                    {this.state.services.map((service, index) =>
                        (
                            <ServiceOption key={index} {...service} />
                        ))}
                </section>
            </div>
        );
    }
}

export default ServicesPage;

