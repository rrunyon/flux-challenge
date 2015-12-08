import { UPDATE_PLANET, UPDATE_LIST } from '../constants';

// enter load loop when app loads and list changes
// terminate when done

// functions for loading masters and apprentices separately, called based on
// which scroll button is clicked

// on scroll remove two items from the list and bump the remaining into their
// position

function loadApprentices() {
  while this.getState.next is null
  load the last guys apprentice
}

function loadMasters() {
  while this.getstate.prev is null
  loda the last guys master
}

export function initializeApp() {
  return listenForPlanetChanges() && loadJediList();
}

function listenForPlanetChanges() {
  return (dispatch) => {
    const socket = new WebSocket('ws://localhost:4000');
    
    socket.onmessage = (event) => {
      dispatch({
        type: UPDATE_PLANET,
        payload: {
          planet: JSON.parse(event.data).name
        }
      });
    };
  }
}

function loadJediList() {
  return (dispatch) => {
    fetch('http://localhost:3000/dark-jedis/3616')
      .then((res) => {
        return res.json();
      })
      .then((jedi) => {
        dispatch({
          type: UPDATE_LIST,
          payload: {
            name: jedi.name,
            homeworld: jedi.homeworld.name,
            index: 0
          }
        });
      });
  }
}
