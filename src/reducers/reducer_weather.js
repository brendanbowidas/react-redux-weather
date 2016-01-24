import { FETCH_WEATHER, REMOVE_ITEM } from '../actions/index';


export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [
        action.payload.data,
        ...state

        ];
      case REMOVE_ITEM:
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];
  }
  return state;
}
