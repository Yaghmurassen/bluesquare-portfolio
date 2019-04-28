import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
// import Fullscreen from "react-full-screen";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  // autoplay: true,
  // speed: 2000,
  // autoplaySpeed: 2000,
  // cssEase: "linear",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default class Projets extends Component {

  state = {
    isPlateforme: true,
    isApp: false,
    isDisplay: false,
    modal: false,
    picturesApp: [
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/fc3b7bed36f85915af19a531c8b5f0ba67277c2d.png",
        srcDisplayNone: "assets/pictures/test7.jpg",
        description: "J - PAL Europe est la branche européenne de J- PAL, un laboratoire de recherche sur la pauvreté spécialisé dans l'évaluation des politiques sociales, de développement et de lutte contre la pauvreté, en France et dans le monde.",
      },
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/1e1fe1c378b92ae904d2f602752722f0fa19c659.png",
        srcDisplayNone: "assets/pictures/deli.jpg",
        description: "Création d'une application mobile pour les livreurs de l'entreprise Delicorner",
      },
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/7bae0bc205452e68cb16011e1cabd7421be5eb94.jpeg",
        srcDisplayNone: "assets/pictures/Test6.jpg",
        description: "Une application mobile permettant de travailler de manière innovante les langues et son écoute",
      },
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/c27cc0177b1ec8e8a51173ec4da508f05b602339.png",
        srcDisplayNone: "assets/pictures/Test2.jpg",
        description: "Klap est une application commander un buffet convivial à plusieurs en créant une cagnotte participative entre amis",
      },
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/386d9f3a6f8e6d94e674dfe02785968de5841d07.png",
        srcDisplayNone: "assets/pictures/a&j.jpg",
        description: "Air&amp;Jobs est l'application de référence pour le recrutement dans l'aéronautique",
      }
    ],
    picturesPlatformes: [
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/125ad64571cbe96012780ed76fd4e144eef33afa.jpeg",
        srcDisplayNone: "assets/pictures/adrenaline.jpg",
        description: "Adrenaline Hunter est une plateforme de réservation en ligne de sports extrêmes et d’activités de plein air.Bluesquare a réalisé la carte des activités et l'interface de géocalisation.",
      },
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/6262d4914b6697968b04ce54e172fd6c75b5eafc.png",
        srcDisplayNone: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/36d446ee005066e6628fa9b62ea5a3888795d408.png",
        description: "Réalisation du back end du module de paiement d'Agora Place",
      },
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/75acd3be15d21c9b53360c2f6c4d92c936ff0ea4.png",
        srcDisplayNone: "assets/pictures/ambassadors.jpg",
        description: "Bluesquare a accompagné les équipe technique de Drole d'Agence dans le déploiement et le développement d'un programme ambassadeur multi-marque international",
      },
      {
        srcDisplay: 'https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/070aaf393063a699cdff1a027a110d9900da0fe8.png',
        srcDisplayNone: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/71f6175a7de6ab287f507e06635be3a3c96d1c25.png",
        description: "Welkeys est une plateforme de mise en relation entre propriétaires et concierges de confiance dédiés à la location courte durée partout en France.",
      },
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/6bfbdd2b5731b667b355584b4e6f009ba09ffb11.png",
        srcDisplayNone: "assets/pictures/urlink.jpg",
        description: "UR Link est l'accélérateur de startups d'Unibail-Rodamco en partenariat avec Numa.",
      },
      {
        srcDisplay: 'https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/fd6fe27600c4459a244d70d60fd887b756cfd250.png',
        srcDisplayNone: "assets/pictures/twist.jpg",
        description: "MyTwist est une application de vide- dressing dont l'objectif est de rendre l'achat et la vente de vêtements d'occasion plus simple, plus rapide et plus convivial",
      },
      {
        srcDisplay: 'https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/ba9dfba73fe1e6a0eb7c91661c8f2cf5392cc9ca.png',
        srcDisplayNone: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/6077e95d3acaa63387ee641ebbe6d150a2c0b68d.jpeg",
        description: "Ornikar est la première auto école en ligne.",
      },
      {
        srcDisplay: 'https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/e9c4ddd82b18a2ee0f5245d7d4e3c4e9ceb71f17.png',
        srcDisplayNone: "assets/pictures/Test.jpg",
        description: "Mountain 40, est une plateforme communautaire dédiée au Trail longues distances.Mountain40 a été racheté en 2016 Par My MoneyTime",
      },
      {
        srcDisplay: 'https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/8a9079c30c2538f07fcd5d3379b191c7230123d9.png',
        srcDisplayNone: "assets/pictures/Test9.jpg",
        description: "Intégration d'un système E-learning dans un ERP SAS d'un grand compte",
      },
      {
        srcDisplay: 'https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/36c613f49ab48492d1ae8a5b7970a16fcb0087d4.png',
        srcDisplayNone: "assets/pictures/velo.jpg",
        description: "Le Vélo du Soir est une entreprise spécialisée dans le service traiteur évènementiel, élégant et convivial, pour les start- up, PME & amp; services internes d'entreprises.",
      },
      {
        srcDisplay: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/8103f50764459ddd114910e1a536c8bd847d9ed5.png",
        srcDisplayNone: "https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/86f4365c1d2844601be300f14368dc1aa30e3d84.jpeg",
        description: "Plateforme communautaire de formation, et de co-mentoring. Bluesquare a développé et déployé la plateforme, accessible auprès de l'ensemble des 240 000 collaborateurs d'Accor Hotels",
      },
      {
        srcDisplay: 'https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/2cc69ff7d8a32164f88759ea49ab90dcec1e8779.png',
        srcDisplayNone: "assets/pictures/test8.jpg",
        description: "Plateforme d'analyse financière big-data multi-channel (Réseaux sociaux, blogs, news ) des événements impactant stocks et commodities",
      },
      {
        srcDisplay: 'https://webservice.bluesquare.io/InvoiceBundle/uploads/Projet/picture/6543b921271bb819a9bdf342fbb5ec5ad8b42ad7.png',
        srcDisplayNone: "assets/pictures/Test5.jpg",
        description: "Réalisation de Delicorner: Distributeur de bonne humeur.Bluesquare réalise l'ensemble d'un CMS sur mesure(logistique, livraison, application mobile pour les livreurs, géolocalisation, facturation ...)",
      }
    ],
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  togglePlateforme = () => {
    this.setState({
      isPlateforme: true,
      isApp: false,
    })
  }

  toggleApp = () => {
    this.setState({
      isApp: true,
      isPlateforme: false,
    })
  }

  toggleDisplay = (index) => {
    this.setState({
      isDisplay: index,
    })
  }

  escFunction = (event) => {
    if (event.keyCode === 27) {
      this.setState({
        isDisplay: false,
      })
    }
  }

  renderApp = () => {
    return (
      <Fragment>
        <div className={this.state.isDisplay ? "go-full-screen" : "container"} >

          <Slider {...settings}>
            {this.state.picturesApp.map((picture, index) => {
              return (
                <div key={index}>
                  <img
                    onClick={() => this.toggleDisplay(index)}
                    className={!this.state.isDisplay ? "slick-img display-src" : "slick-img display-none-src"} src={picture.srcDisplay} />
                  <p className={this.state.isDisplay ? "lato-light text-projets display-none-src" : "lato-light text-projets display-src"}>{picture.description}</p>

                </div>
              )
            })}
          </Slider>
          <div>
            <Slider className={this.state.isDisplay ? "display-src" : "display-none-src"} {...settings}>
              {this.state.picturesApp.map((picture, index) => {
                return (
                  <div className={this.state.isDisplay === index ? "display-src custom-modal" : "display-none-src custom-modal"}>
                    <span className="helper"><img src={picture.srcDisplayNone} /></span>
                    <i onClick={() => this.setState({ isDisplay: false })} class="fas fa-times"></i>
                  </div>
                )
              })
              }
            </Slider>
          </div>
        </div>
      </Fragment >
    )
  }

  renderPlatforme = () => {
    return (
      <Fragment>
        <div className={this.state.isDisplay ? "go-full-screen" : "container"} >
          <Slider {...settings}>
            {this.state.picturesPlatformes.map((picture, index) => {
              return (
                <div key={index}>
                  <img
                    onClick={() => this.toggleDisplay(index)}
                    className={!this.state.isDisplay ? "slick-img display-src" : "slick-img display-none-src"} src={picture.srcDisplay} />

                  <p className="lato-light text-projets">{picture.description}</p>
                </div>
              )
            })}
          </Slider>

          <div>
            {
              this.state.picturesPlatformes.map((picture, index) => {
                return (
                  <div className={this.state.isDisplay === index ? "display-src custom-modal" : "display-none-src custom-modal"}>
                    <span className="helper"><img src={picture.srcDisplayNone} /></span>
                    <i onClick={() => this.setState({ isDisplay: false })} class="fas fa-times"></i>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Fragment>
    )
  }

  render() {
    return (
      <Fragment>
        <div className="projets">
          <div><span className="container-background-oval-right">
            <img src="assets/pictures/background-oval-1.svg" className="background-oval-right background-oval-2" /><img
              src="assets/pictures/background-oval-6.png" className="background-oval-right background-oval-3" /></span>
            <div>
              <div><img src="assets/pictures/background-oval-2.svg" className="background-oval-left" /></div>
              <div className="title"><h2 className="lato-bold">Projets</h2><p className="lato-light text-projets">Quelques
                  exemples de projets réalisés.</p>
              </div>
            </div>
            <div className="menu">
              <div onClick={() => this.togglePlateforme()}
                className={this.state.isPlateforme ? "title-container lato-bold active" : "title-container lato-bold"}>Plateforme
                <div className={this.state.isPlateforme ? "triangle show" : "triangle"} />
              </div>
              <div onClick={() => this.toggleApp()}
                className={this.state.isApp ? "title-container lato-bold active" : "title-container lato-bold"}>App
                <div className={this.state.isApp ? "triangle show" : "triangle"} />
              </div>
            </div>
            {this.state.isPlateforme ? this.renderPlatforme() : ""}
            {this.state.isApp ? this.renderApp() : ""}
          </div>
          <img src="assets/pictures/background-square-1.png" className="background-oval-right background-square-1" />
        </div >
      </Fragment >
    )
  }
}


