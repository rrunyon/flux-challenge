import React, { Component } from 'react';
import { connect } from 'react-redux';

import { initializeApp } from '../actions/app';

import PlanetHeader from './PlanetHeader';
import List from './List';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initializeApp());
  }

  render() {
    return (
      <div className="app-container">
        <div className="css-root">
          <PlanetHeader planet={this.props.planet} />
          <List list={this.props.list} />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  planet: state.app.planet,
  list: state.app.list
}))(App);
