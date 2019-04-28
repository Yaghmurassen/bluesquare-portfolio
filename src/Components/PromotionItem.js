import React, { Component, Fragment } from 'react';
import { Fade } from 'reactstrap';

export default class PromotionItem extends Component {

  state = {
    // items: [
    //   { title: "Modernité", content: "Nous utilisons des technologies modernes et Open Source classées parmi les plus fiables, performantes et prometteuses." },
    //   { title: "Innovation", content: "Nous développons des projets en interne pour améliorer notre productivité sans dégrader la fiabilité de nos services." },
    //   { title: "Responsabilité", content: "Nous proposons des services clef-en-main et respectons le besoin d'indépendance de nos clients." }
    // ],
    fadeIn: true,
    isOpened: false,
  }

  render() {
    return (
      <Fragment>
        <div className="promotion-item">
          <Fade in={this.state.fadeIn}>
            <i className={this.state.isOpened ? "plus-responsive fas fa-minus" : "plus-responsive fas fa-plus"}
              onClick={() => this.setState({ isOpened: !this.state.isOpened })} />
          </Fade>
          <h3 className="lato-bold">{this.props.title}</h3>
          <p className={this.state.isOpened ? 'lato show' : 'hide'}>{this.props.description}</p>
        </div>
      </Fragment>
    )
  }
}


// <div className="promotion-item">
//   {this.state.items.map(item => {
//     <div>
//       <i className={this.state.isOpened ? "plus-responsive fas fa-minus" : "plus-responsive fas fa-plus"}
//         onClick={() => this.setState({ isOpened: !this.state.isOpened })} />
//       <h3 className="lato-bold">{item.title}</h3>
//       <p className="lato">{item.content}</p>
//     </div>
//   })
//   }
// </div>