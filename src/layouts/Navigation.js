import React from 'react';
import { NavLink } from 'react-router-dom';

const pages = [
    { page: 'Start', path: '/', exact: true },
    { page: 'Menu', path: '/menu' },
    { page: 'Usługi', path: '/services' },
    { page: 'Kontakt', path: '/contact' },
    { page: 'O nas', path: '/about' },
]

const Navigation = () => {
    const navigation = pages.map(item => (
        <li className='nav__item' key={item.page}>
            <NavLink className="nav__link" exact={item.exact ? item.exact : false} to={item.path}>{item.page}</NavLink>
        </li>
    ))
    return (
        <ul className="nav__list">
            {navigation}
        </ul>
    );
}

export default Navigation;