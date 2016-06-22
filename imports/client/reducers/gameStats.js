import * as types from '../constants/actionTypes'

const { EASY, NORMAL, HARD } = types.gameStats;

const defaultStat = {
  level:EASY.label,
  mineNum: 10,
  rowNum: 9,
  colNum: 9
};

const normalStat = {
  level: NORMAL.label,
  mineNum: 40,
  rowNum: 16,
  colNum: 16
};

const hardStat = {
  level: HARD.label,
  mineNum: 100,
  rowNum: 16,
  colNum: 30
};

export default function gameStatistics(state, action) {
  switch (action.type) {
    case EASY.value:
      return defaultStat;
    case NORMAL.value:
      return normalStat;
    case HARD.value:
      return hardStat;
      default:
        return defaultStat;
  }
}