import * as types from '../constants/actionTypes';

const { PLAYING, OVER, CLEARED } = types.gameStatusTypee;

export default function gameStatus(state = PLAYING.label, action){
  switch (action.type) {
    case PLAYING.value:
     return PLAYING.label;
    case OVER.value::
      return OVER.label;
    case CLEARED.value::
      return CLEARED.label;
    default:
      return state;
  }
}