import React, { Component } from 'react';
import ServiceOption from '../components/ServiceOption/ServiceOption';
import Service1 from '../images/Services images/serv_img1.jpg'
import Service2 from '../images/Services images/serv_img2.jpg'
import Service3 from '../images/Services images/serv_img3.jpg'


class ServicesPage extends Component {
    state = {
        services: [
            { title: "Muffinowe Torty Ślubne", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", serviceImg: Service1, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", showInfo: false },
            { title: "Ciasteczkowe Chrzciny", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", serviceImg: Service2, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", showInfo: false },
        ]
    }

    render() {
        return (
            <div className="servicesPage">
                <h3>Nasza cukiernia poleca</h3>
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

