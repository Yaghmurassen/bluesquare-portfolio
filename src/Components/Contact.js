import React, { Component, Fragment } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div id="contact" className="contact">
          <div className="title"><h3 className="lato-bold">Vous avez un projet ?</h3><p
            className="lato-light">Contactez-nous, nous pouvons vous accompagner.</p></div>
          <div className="background-contact">
            <img src="assets/pictures/background-contact.png" className="img-background" />
            <div className="form-contact"><input type="text" placeholder="Votre nom / entreprise" />
              <input type="mail" placeholder="Votre adresse e-mail" />
              <input type="phone" placeholder="Votre numéro de téléphone" />
              <input type="text" placeholder="Message" />
              <button className="bluesquare-btn bluesquare-btn-blue lato-bold">Envoyer</button>
            </div>
          </div>
          <img src="assets/pictures/background-oval-4.png" className="background-oval-left background-oval-4" />
          <div className="popup" style={{ display: 'none' }}>
            <button className="bluesquare-btn bluesquare-btn-blue popup-btn-bluesquare lato-bold">Bien reçu !
              </button>
          </div>
        </div>
      </Fragment>
    )
  }
}
