import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AsidePanel from './components/AsidePanel';
import MainPage from './components/MainPage';
import Contact from './components/Contact';

class SweetMuffin extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header className="container__header">
            <Header />
          </header>
          <nav className="container__nav">
            <Navigation />
          </nav>
          <main className="container__page">
            <aside className="container__aside">
              <AsidePanel />
            </aside>
            <aside className="container__aside">
              <AsidePanel />
            </aside>
            <section className="container__section">
              <MainPage />
            </section>
            <section className="container__contact">
              <Contact />
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default SweetMuffin;
