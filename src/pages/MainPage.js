import React, { Component } from 'react';
import Slider from '../components/Slider/Slider';

// const MainPage = () => {

//     return (
//         <div className="page">
//             <div className="page__wrapper">
//                 <h1 className="page__title">Witamy na stronie Sweet Muffin!</h1>
//                 <p>Zapraszamy do przejrzenia naszej oferty. Proszę zajrzeć też do zakładki "O nas":)</p>
//             </div>
//             <Slider />
//         </div>
//     );
// }

// export default MainPage;

class MainPage extends Component {

    componentDidMount() {
        if (sessionStorage.length === 0) {
            sessionStorage.setItem("class", false);
            return document.querySelector('.page').classList.add('page-animation')
        }
        else {
            return document.querySelector(".page").classList.add('page-withoutAnimation')
        }
    }

    render() {
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
}

export default MainPage;