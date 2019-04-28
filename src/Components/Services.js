import React, { Component, Fragment } from 'react';

export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <div className="services">
          <div className="row row-title small-row">
            <div><img src="assets/pictures/rectangle.svg" className="decorative-square" /></div>
            <div className="phone-container">
              <img src="assets/pictures/phone.png" className="phone" /><img src="assets/pictures/oval-phone.svg" className="oval-phone" />
            </div>
          </div>
          <div className="row container row-left">
            <div className="column">
              <div><img src="assets/pictures/oval-blue.png" /></div>
              <div className="column-space"><h3 className="lato-bold">Applications mobiles</h3><p className="lato-light">Nous réalisons des
                  applications mobiles, déployées aussi bien sur iOS que sur Android.</p></div>
            </div>
            <div className="column">
              <div><img src="assets/pictures/oval-cyan.png" /></div>
              <div className="column-space"><h3 className="lato-bold">Big Data</h3><p className="lato-light">Sur certains projets de R&amp;D
                  très spécifiques, Bluesquare Computing intervient en tant que laboratoire externalisé.</p></div>
            </div>
          </div>
          <div className="row container row-right">
            <div className="column">
              <div><img src="assets/pictures/oval-purple.png" /></div>
              <div className="column-space"><h3 className="lato-bold">Plateformes web</h3><p className="lato-light">Que vous soyez un client en
                direct ayant besoin d'une plateforme web, ou que vous soyez une SSII ayant besoin d'un partenaire pour
                  structurer votre production en marque blanche, Bluesquare Computing peut répondre à vos besoins.</p>
              </div>
            </div>
            <div className="column">
              <div><img src="assets/pictures/oval-black.png" /></div>
              <div className="column-space"><h3 className="lato-bold">Audit &amp; conseil</h3><p className="lato-light">Au fil des missions,
                nous avons fait le même constat: nos clients savent rarement quelle est la technologie la plus adaptée
                à leur besoin, et les implications en termes de performances, financiers, stratégiques... Du fait de
                  son expérience technologique diversifiée, nous nous efforçon à apporter une dimension conseil.</p>
              </div>
            </div>
          </div>
          <img src="assets/pictures/background-oval-5.png" className="background-oval-left background-oval-5" />
        </div>
      </Fragment>
    )
  }
}