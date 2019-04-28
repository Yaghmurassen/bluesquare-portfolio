import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';


import Recrutement from './Components/Recrutement';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <ParallaxProvider>
            <Route path="/" exact component={Home} />
            <Route path="/recrutement" exact component={Recrutement} />
          </ParallaxProvider>
        </Router>
      </Fragment >
    );
  }
}

export default App;
