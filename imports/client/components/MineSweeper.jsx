import React from 'react';
import { connect } from 'react-redux';

//CONSTANTS
import { gameStatusType, gameStats } from '../constants/actionTypes';

//ACTIONS
import tickTime from '../actions/tick';
import judge from '../actions/judge';
import gameOver from '../actions/gameOver';
import checkFlag from '../actions/checkFlagNumber';
import addTile from '../actions/addOpenTiles';
import resetGame from '../actions/reset';

import{ setEasy, setNormal, setHard } from '../actions/setDifficulty';

//COMPONENTS
import Table from './Table';

class MineSweeper extends React.Component {
  constructor() {
    super();

    this.tick = this.tick.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.reset = this.reset.bind(this);
    this.checkFlagNumber = this.checkFlagNumber.bind(this);
    this.addOpenNum = this.addOpenNum.bind(this);
    this.setGameOver = this.setGameOver.bind(this);
  }

  componentWillUpdate() {
    const { gameStatus } = this.props;
    if (gameStatus === gameStatusType.PLAYING.label) {
      this.judge();
    }
  }

  componentWillMount() {
    this.interval = [];
  }

  tick() {
    const { openTiles, gameStatus } = this.props;
    return tickTime(openTiles, gameStatus);
  }

  judge() {
    const { gameStatistics, openTiles } = this.props;
    return judge(gameStatistics, openTiles);
  }

  checkFlagNumber() {
    return checkFlag(num);
  }

  setGameOver() {
    alert('game over')
    return gameOver();
  }

  setMine() {
    const { gameStatistics } = this.props;
    const mineTable = this.state.mineTable;
    const mineRange = __.range(gameStatistics.mineNum);
    __.each(mineRange, () => {
      const cell = mineTable[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)];
      if (cell.hasMine) {
        return;
      }
      cell.hasMine = true;
      return;
    });
    this.setState({
      mineTable
    });
  }

  addOpenNum() {
    const { openTiles } = this.props;

    if (openTiles === 0) {
      this.interval = setInterval(this.tick, 1000);
    }
    return addTile();
  }

  reset() {
    const { dispatch } = this.props;
    clearInterval(this.interval);
    return resetGame();
  }

  setDifficulty(type) {
    switch (type) {
      case gameStats.EASY.label:
        return setEasy();
      case gameStats.NORMAL.label:
        return setNormal();
      case gameStats.HARD.label:
        return setHard();
      default:
        return setEasy();
    }
  }

  render(){
    const { gameStatistics, flagNumbers, gameStatus, openTiles, gameTime } = this.props;
    return (
      <div>
        <div className="MineSweeper__level">
          <label>
            <input type="radio"
                    name="level"
                    onChange={_.partial(this.setDifficulty, gameStats.EASY.label)}
                    checked={gameStatistics.level === gameStats.EASY.label}/> Easy
          </label>
          <label>
            <input type="radio"
                    name="level"
                    onChange={_.partial(this.setDifficulty, gameStats.NORMAL.label)}
                    checked={gameStatistics.level === gameStats.NORMAL.label}/> Normal
          </label>
          <label>
            <input type="radio"
                    name="level"
                    onChange={_.partial(this.setDifficulty, gameStats.HARD.label)}
                    checked={gameStatistics.level === gameStats.HARD.label}/> Hard
          </label>
        </div>
        <div className={"MineSweeper " + gameStatistics.level}>
          <span className="MineSweeper__flagNum"> {gameStatistics.mineNum - flagNumbers}</span>
          <span className="MineSweeper__face" onClick={this.reset}>
            <span className={"button " + gameStatus}></span>
          </span>
          <span className="MineSweeper__time"> {gameTime}</span>
          <Table  openNum={openTiles}
                  mineNum={gameStatistics.mineNum}
                  rowNum={gameStatistics.rowNum}
                  colNum={gameStatistics.colNum}
                  gameOver={this.setGameOver}
                  addOpenNum={this.addOpenNum}
                  checkFlagNum={this.checkFlagNumber} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flagNumbers: state.flagNumbers,
    gameStatistics: state.gameStatistics,
    gameStatus: state.gameStatus,
    gameTime: state.gameTime,
    openTiles: state.openTiles
  };
}

export default connect(mapStateToProps)(MineSweeper);