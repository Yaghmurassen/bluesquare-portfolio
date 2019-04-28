import React, { Component, Fragment } from 'react';

import Header from "./Header";
import Promotion from "./Promotion";
import Services from "./Services";
import Clients from "./Clients";
import Projets from "./Projets";
import Success from "./Success";
import Articles from './Articles';
import Contact from "./Contact";
import Footer from "./Footer";

import ScrollableAnchor from 'react-scrollable-anchor';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="portfolio">
          <Promotion />
          <ScrollableAnchor id={'services'}>
            <Services />
          </ScrollableAnchor>
          <ScrollableAnchor id={'client'}>
            <Clients />
          </ScrollableAnchor>
          <ScrollableAnchor id={'projects'}>
            <Projets href="#projects" />
          </ScrollableAnchor>
          <ScrollableAnchor id={'succes'}>
            <Success />
          </ScrollableAnchor>
          {/* <Articles /> */}
          <ScrollableAnchor id={'contact'}>
            <Contact />
          </ScrollableAnchor>
        </div>
        <Footer />
      </Fragment>
    )
  }
}