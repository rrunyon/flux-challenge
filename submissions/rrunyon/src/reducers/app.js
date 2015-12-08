import { UPDATE_PLANET, UPDATE_LIST } from '../constants';

function initialState() {
  return {
    list: [
      null, null, null, null, null
    ]
  };
}

function processList(list, index, jedi) {
  return list.map((obj, i) => {
    if (i === index) {
      return jedi;
    } else {
      return obj;
    }
  });
}

export default function appReducer(state = initialState(), action) {
  switch (action.type) {
    case UPDATE_PLANET:
      return {
        ...state,
        planet: action.payload.planet
      };
    case UPDATE_LIST:
      return {
        ...state,
        list: processList(state.list,
                          action.payload.index,
                          { ...action.payload })
      };
    default:
      return state;
  }
}
