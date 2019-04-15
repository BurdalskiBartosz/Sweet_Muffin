import React, { Component } from 'react';
import Arrow from '../Arrow/Arrow';
import Slide from '../Slide/Slide';
import img1 from '../../images/Cakes images/img1.jpg'
import img2 from '../../images/Cakes images/img2.jpg'
import img3 from '../../images/Cakes images/img3.jpg'
import img4 from '../../images/Cakes images/img4.jpg'
import img5 from '../../images/Cakes images/img5.jpg'


class Slider extends Component {
    state = {
        images: [
            img1,
            img2,
            img3,
            img4,
            img5
        ],
        currentSlide: 0,
        translateValue: 0
    }

    goToPrevSlide = () => {
        if (this.state.currentSlide === 0)
            return;
        this.setState(prevState => ({
            currentSlide: prevState.currentSlide - 1,
            translateValue: prevState.translateValue + this.takeWidth()
        }))
    }

    goToNextSlide = () => {
        if (this.state.currentSlide === this.state.images.length - 1) {
            return this.setState({
                currentSlide: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentSlide: prevState.currentSlide + 1,
            translateValue: prevState.translateValue + -(this.takeWidth())
        }));
    }

    takeWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">

                <div className="slider__wrapper" style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                }}>
                    {this.state.images.map((image, i) =>
                        (
                            <Slide key={i} image={image} />
                        ))}
                </div>
                <Arrow class={"arrow"} nextSlide={this.goToNextSlide} arrow={'arrow__icon'} />
                <Arrow class={"arrow arrow-left"} nextSlide={this.goToPrevSlide} arrow={'arrow__icon arrow__icon-left'} />
            </div>
        );
    }
}


export default Slider;

