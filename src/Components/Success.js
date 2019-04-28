import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import { Container } from 'reactstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Success extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      // autoplaySpeed: 1000,
      // autoplay: true,
      // easing: "ease-in-out",
      // fade: true,
      // centerMode: true,
      responsive: [
        {
          breakpoint: 1500,
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
    return (
      <Fragment>
        <div id="success" className="success">
          <img src="assets/pictures/rectangle-sucess.png" className="background-success" />
          <Container style={{ maxWidth: '90%' }}>
            <Slider {...settings}>
              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/julie.jpg')" }} />
                <div className="content-container">
                  <h3 className="lato-bold">Julie Pommellet</h3>
                  <p className="lato-light role">Co-founder @Delicorner</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/delicorner.png" className="logo-card" /></div>
                  <span className="content lato block-with-text"><p>Bluesquare a été notre partenaire pour
                        l'élaboration de notre système d'information sur-mesure. Ils s'adaptent totalement à nos
                        besoins, et nous accompagnent au quotidien dans notre croissance.</p>
                  </span>
                  <div data-link="https://www.linkedin.com/in/julie-pommellet-31560b49"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/chloe.jpg')" }} />
                <div className="content-container"><h3 className="lato-bold">Chloe Fournier</h3><p
                  className="lato-light role">Founder-CEO @Welkeys</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/welkeys_logo.png" className="logo-card" />
                  </div>
                  <span className="content lato block-with-text"><p>Nous avons travaillé avec Michel et son
                      équipe à l'optimisation du site Welkeys. Une équipe à l'écoute, réactive et qualifiée,
                      nous avons travaillé main dans la main à la manière d'un CTO externe. Je recommande cette expérience !</p></span>
                  <div data-link="https://www.linkedin.com/in/chlo%C3%A9-fournier-6a1b6911/"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/anne-sophie-beraud.jpg')" }} />
                <div className="content-container"><h3 className="lato-bold">Anne-Sophie Beraud</h3><p
                  className="lato-light role">VP, Group Inclusion &amp; Diversity</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/my-accor-hotels.png" className="logo-card" />
                  </div>
                  <span className="content lato block-with-text"><p> Un vrai plaisir de travailler avec
                        Blusquare. Une équipe très réactive et proche du client.
                        Nous avons pu mettre en place dans un temps très court une application co-mentoring simple et facile d’utilisation.</p></span>
                  <div data-link="https://www.linkedin.com/in/asberaud/" className="linkedin-container"><a
                    href="#"><i className="fab fa-linkedin" /></a></div>
                </div>
              </div>
              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/pierre-leroux.jpg')" }} />
                <div className="content-container"><h3 className="lato-bold">Pierre Leroux</h3><p
                  className="lato-light role">CEO @Lemon Learning</p>
                  <div className="img-container"><img src="https://webservice.bluesquare.io/web/images/ll.png"
                    className="logo-card" />
                  </div>
                  <span className="content lato block-with-text"><p>Les équipes de Bluesquare ont réalisé une
                    intégration de notre outil dans un environnement complexe pour un de nos clients grands
                    comptes. Leur capacité à s'adapter à un fort niveau d'exigence technique et de sécurité a
                    été un vrai atout pour nous. Par la suite, nous avons fait appel à eux pour plusieurs
                    dévelopements spécifiques, en particulier du fait de leur bon niveau de réactivité.</p>
                  </span>
                  <div data-link="https://www.linkedin.com/in/pierrelerouxprofile/"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/mathieu-laumonier.jpg')" }} />
                <div className="content-container"><h3 className="lato-bold">Mathieu Laumonier</h3><p
                  className="lato-light role">Director @Studionet</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/img/studionet.png" className="logo-card" />
                  </div>
                  <span className="content lato block-with-text"><p>Nous sommes très satisfaits des prestations
                      réalisées par Bluesquare, notamment dans l'accompagnement et l'agilité de l'équipe.
                      L’énergie et le dynamisme de l’équipe Bluesquare m’a notamment permis de lisser mon pic de
                      commandes avec succès.</p></span>
                  <div data-link="https://www.linkedin.com/in/mathieulaumonier/"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/ayrton.png')" }} />
                <div className="content-container"><h3 className="lato-bold">Ayrton Giavedoni</h3><p
                  className="lato-light role">Fondateur @Le Vélo du soir</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/vds.png" className="logo-card" /></div>
                  <span className="content lato block-with-text"><p>Nous avons fait appel à Michel et à son
                      équipe pour la réalisation de notre application mobile et la refonte de notre site
                      Internet. Nous avons été ravis de leur professionnalisme, de leur réactivité et de leur
                      disponibilité. Bravo !</p></span>
                  <div data-link="https://www.linkedin.com/in/ayrton-giavedoni-7723a160"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/alexandre-cao.jpg')" }} />
                <div className="content-container"><h3 className="lato-bold">Alexandre CAO</h3><p
                  className="lato-light role">CTO</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/agora.png" className="logo-card" /></div>
                  <span className="content lato block-with-text"><p> Bluesquare nous a aidé pendant notre
                      refonte. Michel et ses équipes ont su fournir un travail très satisfaisant et nous aider
                      dans les choix techniques avec des remarques pertinentes. Ils s'impliquent vraiment dans
                      les problématiques du client et sont très professionnels. Je recommande fortement </p></span>
                  <div data-link="https://www.linkedin.com/in/alexandre-cao-78334b8a/?originalSubdomain=fr"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/arnaud-gracieux.jpg')" }} />
                <div className="content-container"><h3 className="lato-bold">Arnaud Gracieux</h3><p
                  className="lato-light role">Fondateur</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/prepacademy.png" className="logo-card" />
                  </div>
                  <span className="content lato block-with-text"><p> Bluesquare nous a accompagné dans la refonte
                    de notre produit à la fois sur la partie front et back. Quelques mois après la mise en
                    ligne, il est évident que c'est une réussite ! Michel nous a aidé à faire les bons choix
                    techniques et à structurer le projet afin d'accompagner au mieux notre croissance. Nous
                    continuons et continuerons à travailler avec l'équipe Bluesquare. Je ne peux que les
                    recommander pour leur rigueur, leur professionnalisme et leur respect de délais !
                  </p></span>
                  <div data-link="https://www.linkedin.com/in/arnaud-gracieux-16604743/"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/hubert-de-caslou.jpg')" }} />
                <div className="content-container"><h3 className="lato-bold">Hubert de Caslou</h3><p
                  className="lato-light role">Directeur</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/air-cosmos.jpg" className="logo-card" />
                  </div>
                  <span className="content lato block-with-text"><p> Nous travaillons avec la société Bluesquare
                                depuis maintenant trois ans, je peux certifier de la grandeur rigueur et qualité de ses
                                services.
                                Un atout particulier est sa grande capacité à comprendre nos besoins et notre stratégie
                                pour une exécution rapide et on time des développements.
                                Je recommande fortement, et poursuis en ce qui nous concerne notre coopération avec cette
                                société, Désormais devenu partenaire stratégique </p>
                  </span>
                  <div data-link="https://www.linkedin.com/in/hubert-de-caslou-1b91a98/"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/kesia-vasconcelos.jpg')" }} />
                <div className="content-container"><h3 className="lato-bold">Késia Vasconcelos</h3><p
                  className="lato-light role">Co-fondatrice</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/backacia.png" className="logo-card" />
                  </div>
                  <span className="content lato block-with-text"><p> Nous avons fait appel à Michel et son équipe pour la
                    refonte de notre marketplace. Les équipes sont compétentes et extrêmement réactives.
                    Nous avons apprécié que Bluesquare soit forcé de proposition, et que l’équipe prenne l’initiative de
                    nous suggérer des solutions techniques et évolutions.
                    Grâce à Bluesquare, nous avons automatisé des tâches et généré un gain de temps à nos équipes, nous
                    recommandons ! </p>
                  </span>
                  <div data-link="https://www.linkedin.com/in/k%C3%A9sia-vasconcelos-3421b2ba/"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>


              <div className="card">
                <div className="avatar"
                  style={{ backgroundImage: "url('https://webservice.bluesquare.io/web/images/damien-gaignard.jpg')" }} />
                <div className="content-container"><h3 className="lato-bold">Damien Gaignard</h3><p
                  className="lato-light role">Directeur</p>
                  <div className="img-container"><img
                    src="https://webservice.bluesquare.io/web/images/air-jobs.png" className="logo-card" />
                  </div>
                  <span className="content lato block-with-text"><p>Air&amp;Jobs a fait appel à Michel et l'équipe de
                    Bluesquare à différentes étapes de maturité du produit : réalisation d'une première version de notre
                    application, maintenance de la plateforme web, développement de nouvelles fonctionnalités.
                    Réactivité, agilité et compréhension ont été leurs principales qualités et me permettent de
                    considérer Bluesquare comme un véritable CTO externalisé ! </p>
                  </span>
                  <div data-link="https://www.linkedin.com/in/damien-gaignard/"
                    className="linkedin-container"><a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
              </div>
            </Slider>
          </Container>
        </div>

        <div id="articles" className="articles">
          <div className="title">
            <img src="assets/pictures/background-oval-3.svg" className="background-oval-right" />
            <h3 className="lato-bold">Articles</h3>
          </div>
          <span className="container-background-oval-left">
            <img src="assets/pictures/background-oval-6.png" className="background-oval-left background-oval-6" />
          </span>
          <div className="articles-container" />
          <span className="container-background-oval-left">
            <img src="assets/pictures/background-square-2.png" className="background-oval-left background-square-2" />
          </span>
        </div>
      </Fragment>
    )
  }
}
