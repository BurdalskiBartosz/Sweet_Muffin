import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/Header';
import Navigation from './layouts/Navigation';
import AsidePanel from './layouts/AsidePanel';
import Page from './layouts/Page';
import Contact from './layouts/Contact';

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

              <section className="container__centerOfPage">
                <Page />
              </section>

              <section className="container__contact">
                <Contact />
              </section>

            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default SweetMuffin;
