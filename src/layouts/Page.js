import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import MenuPage from '../pages/MenuPage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage'

const Page = () => {
    return (
        <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/menu' component={MenuPage} />
            <Route path='/services' component={ServicesPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/about' component={AboutPage} />
            <Route component={MainPage} />
        </Switch>
    );
}

export default Page;