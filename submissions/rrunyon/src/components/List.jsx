import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.list.map((jedi, i) => {
      if (jedi) {
        return (
          <li className="css-slot" key={i}>
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
    return (
      <section className="css-scrollable-list">
        <ul className="css-slots">
          {this.renderList()}
        </ul>

        <div className="css-scroll-buttons">
          <button className="css-button-up"></button>
          <button className="css-button-down"></button>
        </div>
      </section>
    );
  }
}
