/**
 * Created by glebvorontsov on 05/12/16.
 */
import {initialGame, hasLevel, setCurrentLevel, getLevel, setLives, setTime, pushStatsResult, setFinalResult} from './game';
import {STATS_TYPES, ANSWER_TIME} from './staticData';

class GameModel {
  constructor(state = initialGame) {
    this._state = state;
    this._initialState = initialGame;
  }  
  get state() {
    return this._state;
  }

  hasNextLevel() {
    return hasLevel(this._state.level + 1);
  }

  nextLevel() {
    this._state = setCurrentLevel(this._state, this._state.level + 1);
  }

  getCurrentLevel() {
    return getLevel(this._state.level);
  }

  die() {
    this._state = setLives(this._state, this._state.lives - 1);
  }

  restart() {
    this._state = initialGame;
  }

  isDead() {
    return this._state.lives === 0;
  }

  tick() {
    this._state = setTime(this._state, this._state.time + 1);
  }

  resetTime() {
    this._state = setTime(this._state, this._initialState.time);
  }

  isTimeRanOut() {
    return this._state.time <= 0;
  }

  setStats(result) {
    if (result && initialGame.time - this._state.time < ANSWER_TIME.FAST) {
      this._state = pushStatsResult(this._state, STATS_TYPES.FAST, this._state.level);
    } else if (result && initialGame.timer - this._state.timer > ANSWER_TIME.SLOW) {
      this._state = pushStatsResult(this._state, STATS_TYPES.SLOW, this._state.level);
    } else if (result) {
      this._state = pushStatsResult(this._state, STATS_TYPES.CORRECT, this._state.level);
    } else {
      this._state = pushStatsResult(this._state, STATS_TYPES.WRONG, this._state.level);
    }
  }

  setGameResult() {
    const result = !this.isDead();
    this.resetTime();
    this._state = setFinalResult(this._state, result);
  }

}

export default new GameModel();
