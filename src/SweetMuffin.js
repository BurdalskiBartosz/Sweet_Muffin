import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './layouts/Header';
import Navigation from './layouts/Navigation';
import AsidePanel from './layouts/AsidePanel';
import Page from './layouts/Page';
import Footer from './layouts/Footer';

class SweetMuffin extends Component {
  componentDidMount() {
    if (sessionStorage.length === 0) {
      sessionStorage.setItem("class", true);
      setTimeout(() => {
        document.querySelector('.container__header').classList.add('container__header-changed');
      }, 500)
      return;
    }
    else {
      document.querySelector(".container__header").classList.add('container__header-changed')
      return
    }
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <header className="container__header ">
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

              <footer className="container__footer">
                <Footer />
              </footer>
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default SweetMuffin;
