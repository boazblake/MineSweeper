import * as types from '../constants/actionTypes';

const INITIAL_TILE_COUNT = 0;

const { UPDATE, RESET } = types.openTiles;

export default function openTiles(state = INITIAL_TILE_COUNT, action){
  switch (action.type) {
    case UPDATE:
     return state + action + 1;
    case RESET:
      return INITIAL_TILE_COUNT;
    default:
      return state;
  }
}