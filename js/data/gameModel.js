/**
 * Created by glebvorontsov on 05/12/16.
 */
import Game from './game';
import {STATS_TYPES, ANSWER_TIME} from './staticData';

export default class GameModel {
  constructor(data, state = Game.initialGame) {
    this._data = data;
    this._state = state;
    this._initialState = Game.initialGame;
  }

  get state() {
    return this._state;
  }

  hasNextLevel() {
    return Game.hasLevel(this._data, this._state.level + 1);
  }

  nextLevel() {
    this._state = Game.setCurrentLevel(this._state, this._state.level + 1);
  }

  getCurrentLevel() {
    return Game.getLevel(this._data, this._state.level);
  }

  die() {
    this._state = Game.setLives(this._state, this._state.lives - 1);
  }

  restart() {
    this._state = Game.initialGame;
  }

  isDead() {
    return this._state.lives === 0;
  }

  tick() {
    this._state = Game.setTime(this._state, this._state.time + 1);
  }

  resetTime() {
    this._state = Game.setTime(this._state, this._initialState.time);
  }

  isTimeRanOut() {
    return this._state.time > ANSWER_TIME.TOTAL - 1;
  }

  setStats(result) {
    if (result && this._state.time < ANSWER_TIME.FAST) {
      this._state = Game.pushStatsResult(this._state, STATS_TYPES.FAST, this._state.level);
    } else if (result && this._state.time > ANSWER_TIME.SLOW) {
      this._state = Game.pushStatsResult(this._state, STATS_TYPES.SLOW, this._state.level);
    } else if (result) {
      this._state = Game.pushStatsResult(this._state, STATS_TYPES.CORRECT, this._state.level);
    } else {
      this._state = Game.pushStatsResult(this._state, STATS_TYPES.WRONG, this._state.level);
    }
  }

  setGameResult() {
    const result = !this.isDead();
    this.resetTime();
    this._state = Game.setFinalResult(this._state, result);
  }

}
