import Store from '../store/store';
import {openTiles, flagActions, gameTimeType } from '../constants/actionTypes';

export default function resetGame() {
  Store.dispatch({
    type: openTiles.RESET
  });
  Store.dispatch({
    type: flagActions.RESET
  });
  Store.dispatch({
    type: gameTimeType.RESET
  });
}