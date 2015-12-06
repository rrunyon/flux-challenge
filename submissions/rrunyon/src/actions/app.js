import { UPDATE_PLANET } from '../constants';

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
