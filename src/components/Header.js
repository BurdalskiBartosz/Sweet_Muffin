import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header__circleLogo header__circleLogo-smaller">
                <span>Sweet</span>
            </div>
            <div className="header__circleLogo header__circleLogo-bigger">
                <span>Muffin</span>
            </div>
        </div>
    );
}

export default Header;