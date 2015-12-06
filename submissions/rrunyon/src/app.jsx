import React, {Component} from 'react';

export default class App extends Component {
  render () {
    return (
      <div className="app-container">
        <div className="css-root">
          <h1 className="css-planet-monitor">Obi-Wan currently on Tatooine</h1>

          <section className="css-scrollable-list">
            <ul className="css-slots">
              <li className="css-slot">
                <h3>Jorak Uln</h3>
                <h6>Homeworld: Korriban</h6>
              </li>
              <li className="css-slot">
                <h3>Skere Kaan</h3>
                <h6>Homeworld: Coruscant</h6>
              </li>
              <li className="css-slot">
                <h3>Na'daz</h3>
                <h6>Homeworld: Ryloth</h6>
              </li>
              <li className="css-slot">
                <h3>Kas'im</h3>
                <h6>Homeworld: Nal Hutta</h6>
              </li>
              <li className="css-slot">
                <h3>Darth Bane</h3>
                <h6>Homeworld: Apatros</h6>
              </li>
            </ul>

            <div className="css-scroll-buttons">
              <button className="css-button-up"></button>
              <button className="css-button-down"></button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
