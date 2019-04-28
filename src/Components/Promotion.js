import React, { Component, Fragment } from 'react';
// import { Button, Fade } from 'reactstrap';
import PromotionItem from './PromotionItem';
// import Script from 'react-load-script';
import { Parallax } from 'react-scroll-parallax';


export default class Promotion extends Component {
  state = {
    // fadeIn: true,
    isCLicked: false
  }
  // handleScriptCreate() {
  //   this.setState({ scriptLoaded: false })
  // }

  // handleScriptError() {
  //   this.setState({ scriptError: true })
  // }

  // handleScriptLoad() {
  //   this.setState({ scriptLoaded: true })
  // }
  render() {
    if (window.innerWidth < 975) {
      return (
        <Fragment>
          <div className="promotion-container">
            <PromotionItem 
              title="Modernité"   
              description="Nous utilisons des technologies modernes et Open Source classées 
                            parmi les plus fiables, performantes et prometteuses." />
            <PromotionItem 
              title="Innovation" 
              description="Nous développons des projets en interne pour
                          améliorer notre productivité sans dégrader la fiabilité de nos services." />
            <PromotionItem 
              title="Responsabilité" 
              description="Nous proposons des services clef-en-main
                          et respectons le besoin d'indépendance de nos clients." />
          </div>
        </Fragment >
      )
    }
    return (
      <Fragment>
      {/* <Script
        url="./public/theme/js/t-scroll.min.js"
        onCreate={this.handleScriptCreate.bind(this)}
        onError={this.handleScriptError.bind(this)}
        onLoad={this.handleScriptLoad.bind(this)}/> */}
        <Parallax className="custom-class" x={[20,-60]} tagOuter="figure">
          <div className="promotion-container">
            <div className="promotion-item">
              <h3 className="lato-bold">Modernité</h3>
              <p className="lato">Nous utilisons des technologies modernes et Open Source classées parmi les plus fiables, performantes et prometteuses.</p>
            </div> 
            <div className="promotion-item">
              <h3 className="lato-bold">Innovation</h3>
              <p className="lato">Nous développons des projets en interne pour améliorer notre productivité sans dégrader la fiabilité de nos services.</p>
            </div> 
            <div className="promotion-item">
              <h3 className="lato-bold">Responsabilité</h3>
              <p className="lato">Nous proposons des services clef-en-main et respectons le besoin d'indépendance de nos clients.</p>
            </div>
          </div>
        </Parallax>
      </Fragment>
    )
  }
}




// <div className="promotion-item"><i className="plus-responsive fas fa-plus" onClick={this.toggle} />
//   <Fade in={this.state.fadeIn} tag="h3" className="lato-bold">Modernité</Fade>
// </div>
//   <div className="promotion-item"><i className="plus-responsive fas fa-plus" onClick={this.toggleCLick} /><h3
//     className="lato-bold">Innovation</h3>
//     <p className={this.state.isCLicked ? 'lato show' : 'hide'}>Nous développons des projets en interne pour
//               améliorer notre productivité sans dégrader la fiabilité de nos services.</p>
//   </div>
//   <div className="promotion-item"><i className="plus-responsive fas fa-plus" onClick={this.toggleCLick} /><h3
//     className="lato-bold">Responsabilité</h3>
//     <p className={this.state.isCLicked ? 'lato show' : 'hide'}>Nous proposons des services clef-en-main
//               et respectons le besoin d'indépendance de nos clients.</p>
//   </div>