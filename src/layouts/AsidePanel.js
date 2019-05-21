import React from 'react';
import AsideCake1 from '../images/Aside Cake images/AsideImg.png';
import AsideCake2 from '../images/Aside Cake images/AsideImg2.png';
import AsideCake3 from '../images/Aside Cake images/AsideImg3.png';
import AsideCake4 from '../images/Aside Cake images/AsideImg4.png';

const AsidePanel = () => {
    return (
        <div className="aside">
            <img className="aside__img" alt="" src={AsideCake1} />
            <img className="aside__img" alt="" src={AsideCake2} />
            <img className="aside__img" alt="" src={AsideCake3} />
            <img className="aside__img" alt="" src={AsideCake4} />
            {/* <img className="aside__img" alt="" src={AsideCake1} /> */}
        </div>
    )
}
export default AsidePanel;