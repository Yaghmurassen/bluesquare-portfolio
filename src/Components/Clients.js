import React, { Component, Fragment } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Clients extends Component {

  renderLaptop = () => {
    return (
      <div className="clients">
        <div className="text"><h3 className="lato-bold">Nos clients</h3><p className="lato-light">Plus de 100
              entreprises <br /> nous font déjà confiance !</p></div>
        <div className="blue-square-gradient">
          <div className="row">
            <div className="img-container"><img src="assets/pictures/lemon.png" className="col-3 1" /></div>
            <div className="img-container"><img src="assets/pictures/ornikar.png" className="col-3 2" /></div>
            <div className="img-container"><img src="assets/pictures/AccorHotels.png" className="col-3 3" /></div>
            <div className="img-container"><img src="assets/pictures/AirCosmos.png" className="col-3 4" /></div>
            <div className="img-container"><img src="assets/pictures/prepacademy.png" className="col-3 5" /></div>
            <div className="img-container"><img src="assets/pictures/mountain.png" className="col-3" style={{ maxHeight: 80 }} /></div>
          </div>
          <div className="row">
            <div className="img-container"><img src="assets/pictures/studionet.png" className="col-1 7" style={{ paddingLeft: 50 }} /></div>
            <div className="img-container"><img src="assets/pictures/delicorner.png" className="col-1 8" /></div>
            <div className="img-container"><img src="assets/pictures/agora.png" className="col-1 9" style={{ width: 150 }} /></div>
            <div className="img-container"><img src="assets/pictures/backacia.png" className="col-1 10" /></div>
            <div className="img-container"><img src="assets/pictures/unibail.png" className="col-1 11" /></div>
            <div className="img-container"><img src="assets/pictures/adrenaline.png" className="col-1" style={{ maxWidth: 50, paddingRight: 50 }} /></div>
          </div>
        </div>
      </div>
    )
  }

  renderSmallDevice = () => {
    return (
      <div className="clients">
        <div className="text"><h3 className="lato-bold">Nos clients</h3><p className="lato-light">Plus de 100
              entreprises <br /> nous font déjà confiance !</p></div>
        <div className="blue-square-gradient">
          <div className="tech-slideshow">
            {/* <div><img className="mover-1" src="assets/pictures/pano-bluesquare2.png" /></div> */}
            <div><img className="mover-1" src="assets/pictures/pano-bluesquare3.png" /></div>
            {/* <div><div className="mover-2" style={{ background: 'url("assets/pictures/pano-bluesquare3.png")' }} /></div> */}
          </div>
        </div>
      </div>
    )
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplaySpeed: 100,
      autoplay: true,
      easing: "ease-in-out",
      fade: true,
      centerMode: true,
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
            infinite: true,
            initialSlide: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    };
    return (
      <Fragment>
        {window.innerWidth < 975 ? this.renderSmallDevice() : this.renderLaptop()}
      </Fragment>
    )
  }
}




