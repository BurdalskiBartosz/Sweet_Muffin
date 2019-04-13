import React from 'react';
import Slider from '../components/Slider/Slider';

const MainPage = () => {
    return (
        <div className="page">
            <div className="page__wrapper">
                <h1 className="page__title">Witamy na stronie Sweet Muffin!</h1>
                <p>Zapraszamy do przejrzenia naszej oferty. Proszę zajrzeć też do zakładki "O nas":)</p>
            </div>
            <Slider />
        </div>
    );
}

export default MainPage;