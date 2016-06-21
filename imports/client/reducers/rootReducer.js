import { combineReducers } from 'redux';
import gameStatus from './gameStatus.js';
import gameStats from './gameStatus.js';
import gameTime from './gameTime.js';
import flagNumbers from './flagNumbers.js';
import openTiles from './openTiles.js';

const rootReducer = combineReducers({
  gameStatus,
  openTiles: incrementReducer("OPEN_TILES"),
  gameTime: incrementReducer("TIME"),
  flagNumbers,
  gameStats
});

export default rootReducer;