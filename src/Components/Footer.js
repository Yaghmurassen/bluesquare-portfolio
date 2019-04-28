import React, { Component, Fragment } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <Fragment>
          <div className="footer">
            <div>
              <div className="logo-container"><img src="assets/pictures/logo.svg" className="logo-footer"/>
                <div><p className="lato-bold">BLUESQUARE</p><p className="lato-light">COMPUTING</p></div>
              </div>
              <p className="lato-light copyright">Bluesquare Computing © 2014-2019</p>
            </div>
            <div className="responsive-footer">
              <ul className="lato-light list-components">
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">PROJETS</a></li>
                <li><a href="#">BLOG</a></li>
              </ul>
            </div>
            <div className="recrutement lato responsive-footer"><p>Envie de travailler avec nous ?</p>
              <a href="#" className="bluesquare-btn bluesquare-btn-white lato-bold bluesquare-link">RECRUTEMENT</a>
            </div>
            <div className="contact-us">
              <p><a href="mailto:contact@bluesquare.io"
                    className="lato link">contact@bluesquare.io</a></p>
              <a href="https://www.linkedin.com/in/bluesquare" target="_blank"><i className="fab fa-linkedin"/></a>
            </div>
          </div>
        </Fragment>
    )
  }
}