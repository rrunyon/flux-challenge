import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  frozenAndMatching(homeworld) {
    return this.props.isFrozen && (this.props.planet === homeworld);
  }

  renderList() {
    return this.props.list.map((jedi, i) => {
      if (jedi) {
        const liClass = `css-slot ${this.frozenAndMatching(jedi.homeworld.name) ? 'css-slot-frozen' : ''}`;
        return (
          <li className={liClass} key={i}>
            <h3>{jedi.name}</h3>
            <h6>Homeworld: {jedi.homeworld.name}</h6>
          </li>
        );
      } else {
        return <li className="css-slot" key={i}></li>;
      }
    });
  }
  
  render() {
    const upButtonClass = `css-button-up ${this.props.isFrozen ? 'css-button-disabled' : ''}`;
    const downButtonClass = `css-button-down ${this.props.isFrozen ? 'css-button-disabled' : ''}`;

    return (
      <section className="css-scrollable-list">
        <ul className="css-slots">
          {this.renderList()}
        </ul>

        <div className="css-scroll-buttons">
          <button onClick={this.props.handleScrollUp}
                  className={upButtonClass}></button>
          <button onClick={this.props.handleScrollDown}
                  className={downButtonClass}></button>
        </div>
      </section>
    );
  }
}
