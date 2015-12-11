import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  listenForPlanetChanges,
  loadJedi
} from '../actions/app';

import PlanetHeader from './PlanetHeader';
import List from './List';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(listenForPlanetChanges());
    this.props.dispatch(loadJedi('http://localhost:3000/dark-jedis/3616', 0));
  }

  componentWillReceiveProps(currentProps, nextProps) {
    currentProps.list.map((jedi, i) => {
      if (jedi !== null &&
          jedi.apprentice.url &&
          currentProps.list[i + 1] === null) {
        this.props.dispatch(loadJedi(jedi.apprentice.url, i+1))
      }
    });
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
