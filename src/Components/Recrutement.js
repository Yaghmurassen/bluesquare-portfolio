import React, { Component, Fragment } from 'react';
import Contact from "./Contact";
import HeaderRecrutement from "./HeaderRecrutement";
import Offres from "./Offres";
import Process from "./Process";
import Footer from "./Footer";

import ScrollableAnchor from 'react-scrollable-anchor';

export default class Recrutement extends Component {
  state = {
    items: [
      { title: "Développeur Full Stack Junior", subtitle: "CDI (Temps plein)", content: "Tu as un github et un projet web que tu as fait à 100% par toi même. Tu es combatif, tu maitrises un Framework PHP et tu aimes les designs bien responsives et tu as envie de travailler sur des projets diversifiés ? Lance ta carrière chez Bluesquare", link: "https://bluesquare.io/offer/jobDev.pdf" },
      { title: "Développeur Junior", subtitle: "Stage (3 mois minimum)", content: "Tu as une bonne maitrise du PHP, tu es combatif, et tu souhaites monter en compétence sur les techologies les plus populaire, rencontrer pleins de start-ups, PME, grands groupes ? Tu maitrises un Framework PHP et tu aimes les designs bien responsives ? Postule ! ", link: "https://bluesquare.io/offer/stageDev.pdf" },
      { title: "Développeur React", subtitle: "CDI (Temps plein)", content: "Tu as un bon sens design, tu aimes réaliser de jolies animations et tu sais intégrer de l’HTML / CSS ?  N'hésites pas à postuler", link: "https://bluesquare.io/offer/devReact.pdf" },
    ]
  }

  render() {
    return (
      <Fragment>
        <HeaderRecrutement />
        <div className="recrutement">
          <div className="presentation">
            <div className="img-container img-recrutement">
              <img src={"assets/pictures/background-presentation.png"} />
              <img className="background-square-3" src={"assets/pictures/background-square-3.png"} />
            </div>
            <div className="content-container work-presentation">
              <h3 className="lato-bold">Travailler chez Bluesquare</h3>
              <p className="lato-light">
                <span className="color-blue">BLUESQUARE</span> est une jeune société de développement digital en très forte croissance fondée par des ingénieurs passionnés de nouvelles technologies.
                Situé au plein centre de Paris, BLUESQUARE est une petite équipe constituée à 100% de développeur fullstack qui travaille sur de nombreux types de missions & technologies à savoir :
                <p className="lato-light">Plateformes web sur mesure (Symfony2, NodeJS)</p>
                <p className="lato-light">Apps en React Native</p>
                <p className="lato-light">Projets R&D en interne avec l’équipe (meta-langages, blockchain…)</p>
              </p>
              <p className="lato-light color-blue information">
                Nous recrutons actuellement un développeur fulstack prêt à venir nous prêter main forte dès que possible pour aider notre équipe de développement actuelle.
            </p>
            </div>
          </div>
          <div className="offres">{this.state.items.map(item => {
            return <Offres title={item.title} subtitle={item.subtitle} content={item.content} />
          })}
          </div>
          <Process />
        </div>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
      </Fragment>
    )
  }
}