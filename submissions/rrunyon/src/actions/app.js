import request from 'superagent';

import {
  UPDATE_PLANET,
  UPDATE_LIST,
  SCROLL_UP,
  SCROLL_DOWN,
  FREEZE,
  UNFREEZE
} from '../constants';

// enter load loop when app loads and list changes
// terminate when done

// functions for loading masters and apprentices separately, called based on
// which scroll button is clicked

// on scroll remove two items from the list and bump the remaining into their
// position

export function loadJedi(url, index) {
  return (dispatch) => {
    request
      .get(url)
      .end((err, res) => {
        if (!err) {
          dispatch({
            type: UPDATE_LIST,
            payload: {
              ...res.body,
              index: index
            }
          });
        }
      });
  };
}

export function listenForPlanetChanges() {
  return (dispatch, getState) => {
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

export function scrollUp() {
  return {
    type: SCROLL_UP
  }
}

export function scrollDown() {
  return {
    type: SCROLL_DOWN
  }
}

export function freeze() {
  return {
    type: FREEZE
  }
}

export function unFreeze() {
  return {
    type: UNFREEZE
  }
}
