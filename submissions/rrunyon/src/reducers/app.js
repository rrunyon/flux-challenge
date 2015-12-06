import { UPDATE_PLANET } from '../constants';

function initialState() {
  return {};
}

export default function appReducer(state = initialState(), action) {
  switch (action.type) {
    case UPDATE_PLANET:
      return {
        ...state,
        planet: action.payload.planet
      }
    default:
      return state;
  }
}
