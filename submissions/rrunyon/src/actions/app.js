import axios from 'axios';

import { UPDATE_PLANET, UPDATE_LIST } from '../constants';

// enter load loop when app loads and list changes
// terminate when done

// functions for loading masters and apprentices separately, called based on
// which scroll button is clicked

// on scroll remove two items from the list and bump the remaining into their
// position

export function loadJedi(url, index) {
  return (dispatch) => {
    axios.get(url)
      .then((res) => {
        return res.data;
      })
      .then((jedi) => {
        dispatch({
          type: UPDATE_LIST,
          payload: {
            ...jedi,
            index: index
          }
        });
      });
  }
}

export function listenForPlanetChanges() {
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
