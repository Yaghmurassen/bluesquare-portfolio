import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import { Stand } from 'react-burgers';
import { stack as Menu } from 'react-burger-menu';
import ScrollableAnchor from 'react-scrollable-anchor';
// import Parallax from 'parallax-js';

export default class Header extends Component {

  state = {
    position: 0,
    isCLicked: false,
    isActive: false,
    isChanged: false,

  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
    // let header = document.getElementsByClassName('header');
    // let parallaxInstance = new Parallax(header);
    // this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
    // this.parallax.disable();
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      position: scrolled,
    })
  }

  toggleBurger = () => {
    this.setState({
      isCLicked: !this.state.isCLicked,
    })
  }

  render() {
    let isFixed = "";
    let logoFixed = "small-logo";
    if (this.state.position > 0.01) {
      isFixed = "isFixed";
      logoFixed = "logoFixed";
    }
    if (this.state.position > 0.01 && this.state.isActive) {
      isFixed = "isFixed bckg-fixed"
    }
    return (
      <Fragment>
        <div id="App">
          <div className="header row">
            <div className="rotateDownLeft t-animated background" data-t-show="1" />
            <div className="logo-container">
              <a href="#/">
                <img src="assets/pictures/logo.svg" className="logo" />
                <p><span className="lato-bold">BLUESQUARE</span><br />
                  <span className="lato-light">COMPUTING</span></p>
              </a>
            </div>
            <nav className={isFixed}>
              <Menu
                onStateChange={(open) => { if (!open.isOpen) this.setState({ isActive: false }) }}
                className="lato"
                right
                isOpen={this.state.isActive}>
                <a onClick={() => this.setState({ isActive: !this.state.isActive })} className="menu-item" href="/">Home</a>
                <a onClick={() => this.setState({ isActive: !this.state.isActive })} className="menu-item" href="#services">Services</a>
                <a onClick={() => this.setState({ isActive: !this.state.isActive })} className="menu-item" href="#projects">Projects</a>
                <a onClick={() => this.setState({ isActive: !this.state.isActive })} className="menu-item" href="#blog">Blog</a>
                <Link onClick={() => this.setState({ isActive: !this.state.isActive })} className="menu-item" href="#/recrutement" to="/recrutement">Recrutement</Link>
                <a onClick={() => this.setState({ isActive: !this.state.isActive })} className="menu-item" href="#contact">Contact</a>
              </Menu>
              <div className="Header_root" style={{ paddingTop: 10 }}>
                <ul className="lato-bold Header_links">
                  <li className="small-logo-container">
                    <a href="#/">
                      <img src="assets/pictures/logo.svg" className={logoFixed} />
                    </a>
                  </li>
                  <li className="Header_link"><a href="#services">
                    Services</a>
                  </li>
                  <li className="Header_link"><a href="#projects">
                    Projets</a>
                  </li>
                  <li className="Header_link"><a href="#blog">
                    Blog</a>
                  </li>
                  <li className="Header_link"><a href="/recrutement">
                    Recrutement</a>
                  </li>
                  <li className="Header_link"><a href="#contact">
                    Contact</a>
                  </li>
                </ul>
                <Stand style={{ cursor: "pointer", userSelect: "none" }} onClick={() => this.setState({ isActive: !this.state.isActive })}
                  active={this.state.isActive} width="30" lineHeight="4" lineSpacing={1} color={"#fff"} borderRadius={3} padding="15px" />
              </div>
            </nav>
            <div className="banner-left"><h2 className="lato-bold">Agence digitale</h2><p className="lato">Nous aidons
                des startups et des entreprises à mettre en place des systèmes informatiques performants.</p>
            </div>
          </div>
        </div>
      </Fragment >
    )
  }
}