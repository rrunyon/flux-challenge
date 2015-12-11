import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  listenForPlanetChanges,
  loadJedi,
  scrollUp,
  scrollDown,
  freeze,
  unFreeze
} from '../actions/app';

import PlanetHeader from './PlanetHeader';
import List from './List';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(listenForPlanetChanges());
    this.props.dispatch(loadJedi('http://localhost:3000/dark-jedis/3616', 0));
  }

  componentWillReceiveProps(currentProps, nextProps) {
    let match = false;

    currentProps.list.map((jedi, i) => {
      if (jedi && (currentProps.planet === jedi.homeworld.name)) {
        match = true;
      }
      if (jedi !== null &&
          jedi.apprentice.url &&
          currentProps.list[i+1] === null) {
        this.props.dispatch(loadJedi(jedi.apprentice.url, i+1))
      } else if (jedi !== null &&
                 jedi.master.url &&
                 currentProps.list[i-1] === null) {
        this.props.dispatch(loadJedi(jedi.master.url, i-1))
      }
    });

    if (match) {
      this.props.dispatch(freeze());
    } else {
      this.props.dispatch(unFreeze());
    }
  }

  handleScrollUp() {
    if (!this.props.freeze) {
      this.props.dispatch(scrollUp());
    }
  }

  handleScrollDown() {
    if (!this.props.freeze) {
      this.props.dispatch(scrollDown());
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="css-root">
          <PlanetHeader planet={this.props.planet} />
          <List list={this.props.list}
                planet={this.props.planet}
                isFrozen={this.props.freeze}
                handleScrollUp={::this.handleScrollUp}
                handleScrollDown={::this.handleScrollDown} />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  planet: state.app.planet,
  list: state.app.list,
  freeze: state.app.freeze
}))(App);
