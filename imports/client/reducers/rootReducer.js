import { combineReducers } from 'redux';
import gameStatus from './gameStatus';
import gameStatistics from './gameStats';
import gameTime from './gameTime';
import flagNumbers from './flagNumbers';
import openTiles from './openTiles';
import incrementReducer from './incrementReducer';

const rootReducer = combineReducers({
  gameStatus,
  openTiles: incrementReducer("OPEN_TILES"),
  gameTime: incrementReducer("TIME"),
  flagNumbers,
  gameStatistics
});

export default rootReducer;