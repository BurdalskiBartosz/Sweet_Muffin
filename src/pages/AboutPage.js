import React from 'react';
import about1 from '../images/About images/ImgAbout1.jpg'
import about2 from '../images/About images/ImgAbout2.jpg'
import about3 from '../images/About images/ImgAbout3.jpg'
const AboutPage = () => {
    return (
        <div className='wrapper'>
            <h2 className="about__title">Sweet Muffin</h2>
            <p className='wrapper__text'><img className="about__img" alt="An exhibition of cookies, many different types" src={about1} />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dictaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dictaperiam,<img alt="" className="about__img about__img-right__img" src={about3} /> eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dictaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dictaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dictaperiam, eaque ipsa quae ab illo inventore verit inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboci velit, sed<img alt="" className="about__img about__img-right__img" src={about2} />quia non numquum exercitationem ullam corporis suscipit unde omnis iste natus error sit volu ex ea commodi consequatur?</p>
        </div>
    );
}

export default AboutPage;