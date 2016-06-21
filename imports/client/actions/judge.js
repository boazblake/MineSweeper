import Store from '../store/store';
import { gameStatusType } from '../constants/actionTypes';

export default function judge(gameStats, openTiles) {
  const {mineNum, rowNum, colNum} = gameStats;
  if (mineNum + openTiles >= rowNum + colNum) {
    return Store.dispatch({
      type: gameStatusType.CLEARED.value
    })
  }
}