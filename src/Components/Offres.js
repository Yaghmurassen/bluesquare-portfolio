import React, { Component, Fragment } from 'react';

export default class Offres extends Component {
  render() {
    return (
      <Fragment>
        <div className="items">
          <h3 className="lato-bold title">{this.props.title}</h3>
          <p className="lato-light subtitle">{this.props.subtitle}</p>
          <p className="lato content">{this.props.content}</p>
          <p className="link-to" v-if="item.link.length > 0" >
            <a href="item.link" className="lato-bold" target="_blank">En savoir plus ></a>
          </p>
          <p className="email">
            <a href="#" className="lato-bold">{this.props.mail}</a>
          </p>
        </div >
      </Fragment >
    )
  }
}

