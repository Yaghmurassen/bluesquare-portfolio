import React, { Component, Fragment } from 'react';

export default class Articles extends Component {
  state = {
    id: 0,
    articles: [],
  }

  _fetch = () => {
    fetch('https://api.bluesquare.io/externals/articles')
      .then((res) => res.json())
      .then((articles) => {
        //this.setState({ articles })
        this.setState({
          articles: [
            {
              id: 1,
            }
          ]
        })
      })
  }

  componentDidMount() {
    this._fetch();
  }

  render() {
    return (
      <Fragment>
        <div className="title">
          <img src={"assets/pictures/background-oval-3.svg"} className={"background-oval-right"} />
          <h3 className="lato-bold">Articles</h3>
        </div>
        <span className="container-background-oval-left">
          <img src="assets/pictures/background-oval-6.png" className="background-oval-left background-oval-6" />
        </span>
        <div className="articles-container">
          {this.state.articles.map(article => {
            return <div>{article.id}</div>
          })}
        </div>
        <div className="btn-container">
          <button className="bluesquare-btn bluesquare-btn-blue lato-bold">Voir plus d'articles</button>
        </div>
        <span className="container-background-oval-left">
          <img src="assets/pictures/background-square-2.png" className="background-oval-left background-square-2" />
        </span>
      </Fragment>
    )
  }
}

