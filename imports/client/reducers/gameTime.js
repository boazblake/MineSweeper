import * as types from '../constants/actionTypes';

const INITIAL_TIME = 0;

const { UPDATE, RESET } = types.gameTimeType;

export default function openTiles(state = INITIAL_TIME, action){
  switch (action.type) {
    case UPDATE:
     return state + action + 1;
    case RESET:
      return INITIAL_TIME;
    default:
      return state;
  }
}