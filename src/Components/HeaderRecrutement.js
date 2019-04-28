import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import { Stand } from 'react-burgers';
import { stack as Menu } from 'react-burger-menu';

export default class HeaderRecrutement extends Component {

  state = {
    position: 0,
    isCLicked: false,
    isActive: false,
    isChanged: false,

  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
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
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    let isFixed = "";
    let logoFixed = "small-logo";
    let navWhite = "";
    if (this.state.position > 0.01) {
      isFixed = "isFixed";
      logoFixed = "logoFixed";
      navWhite = "navWhite";
    }
    if (this.state.position > 0.01 && this.state.isActive) {
      isFixed = "isFixed bckg-fixed";
    }
    return (
      <Fragment>
        <div id="App">
          <div className="header row small-header">
            <div className="logo-container">
              <a href="#/">
                <img src="assets/pictures/logo.svg" className="logo" />
                <p><span className="lato-bold title-color">BLUESQUARE</span><br />
                  <span className="lato-light subtitle-color">COMPUTING</span></p>
              </a>
            </div>
            <nav className={isFixed}>
              <Menu onStateChange={(open) => { if (!open.isOpen) this.setState({ isActive: false }) }} className="lato" right isOpen={this.state.isActive}>
                <a onClick={() => this.setState({ isActive: !this.state.isActive })} className="menu-item" href="/">Home</a>
                <a onClick={() => this.setState({ isActive: !this.state.isActive })} className="menu-item" href="#selection">Sélection</a>
                <a onClick={() => this.setState({ isActive: !this.state.isActive })} className="menu-item" href="#contact">Contact</a>
              </Menu>
              <div className="Header_root" style={{ paddingTop: 10 }}>
                <ul className="lato-bold Header_links nav-recrutement">
                  <li className="small-logo-container">
                    <a href="#/">
                      <img src="assets/pictures/logo.svg" className={logoFixed} />
                    </a>
                  </li>
                  <li className="Header_link "><Link style={{ color: '#9ea6bc' }} onClick={() => this.setState({ isActive: !this.state.isActive })} className={navWhite} style={{ color: '#9ea6bc' }} to="/">Home</Link>
                  </li>
                  <li className="Header_link"><a className={navWhite} style={{ color: '#9ea6bc' }} href="#selection">
                    Séléction</a>
                  </li>
                  <li className="Header_link"><a className={navWhite} style={{ color: '#9ea6bc' }} href="#contact">
                    Contact</a>
                  </li>
                </ul>
                <Stand style={{ cursor: "pointer", userSelect: "none" }} onClick={() => this.setState({ isActive: !this.state.isActive })}
                  active={this.state.isActive} width="30" lineHeight="4" lineSpacing={1} color={"#333"} borderRadius={3} padding="15px" />
              </div>
            </nav>
          </div>
        </div>
      </Fragment>
    )
  }
}