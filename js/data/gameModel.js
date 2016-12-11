/**
 * Created by glebvorontsov on 05/12/16.
 */
import {initialGame, hasLevel, setCurrentLevel, setLives, getLevel, setTime, pushStatsResult} from './game';
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

  die() {
    this._state = setLives(this._state, this._state.lives - 1);
  }

  restart() {
    this._state = initialGame;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  getCurrentLevel() {
    return getLevel(this._state.level);
  }

  tick() {
    this._state = setTime(this._state, this._state.time + 1);
  }

  resetTime() {
    this._state = setTime(this._state, this._initialState.time);
  }

  isTimeRanOut() {
    return this._state.timer <= 0;
  }

  setStats(result) {
    if (result && initialGame.time - this._state.time < ANSWER_TIME.FAST) {
      this._state = pushStatsResult(this._state, STATS_TYPES.FAST, this._state.question);
    } else if (result && initialGame.timer - this._state.timer > ANSWER_TIME.SLOW) {
      this._state = pushStatsResult(this._state, STATS_TYPES.SLOW, this._state.question);
    } else if (result) {
      this._state = pushStatsResult(this._state, STATS_TYPES.CORRECT, this._state.question);
    } else {
      this._state = pushStatsResult(this._state, STATS_TYPES.WRONG, this._state.question);
    }
  }
}

export default new GameModel();
