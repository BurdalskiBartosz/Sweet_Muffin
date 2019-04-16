import React from 'react';

const FullInfoProduct = props => {
    return (
        <div className="wrapperInfo">
            <h3 className="wrapperInfo__title">{props.name}</h3>
            <section className="wrapperInfo__details">
                <img className="wrapperInfo__img" alt='' src={props.image} />
                <div className="wrapperInfo__information">
                    <p className='wrapperInfo__description'>{props.description}</p>
                    <span>{`Cena za szt. ${props.price} `}</span>
                    <span>{`Cena za 5szt. ${props.priceForFive}`}</span>
                </div>
            </section>
            <i onClick={() => props.click(null)} className="fas fa-times-circle"></i>
        </div>
    );
}

export default FullInfoProduct;