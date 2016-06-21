import Store from '../store/store';
import { gameStatusType } from '../constants/actionTypes';

export default function gameOver() {
  return Store.dispatch({
    type: gameStatusType.OVER.value
  });
}