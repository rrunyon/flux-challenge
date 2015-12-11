import {
  UPDATE_PLANET,
  UPDATE_LIST,
  SCROLL_UP,
  SCROLL_DOWN,
  FREEZE,
  UNFREEZE
} from '../constants';

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
    case SCROLL_UP:
      return {
        ...state,
        list: [
          null,
          null,
          ...state.list.slice(0, 3)
        ]
      }
    case SCROLL_DOWN:
      return {
        ...state,
        list: [
          ...state.list.slice(2),
          null,
          null
        ]
      }
    case FREEZE:
      return {
        ...state,
        freeze: true
      }
    case UNFREEZE:
      return {
        ...state,
        freeze: false
      }
    default:
      return state;
  }
}
