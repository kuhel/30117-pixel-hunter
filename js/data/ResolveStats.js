/**
 * Created by glebvorontsov on 11/12/16.
 */
import {STATS_TYPES} from './staticData';

export default class ResolveStats {
  constructor(state) {
    this._state = state;
  }

  get levelPoints() {
    return this._state.stats.reduce((prev, cur) => {
      let result = cur === STATS_TYPES.WRONG ? 0 : 100;
      return prev + result;
    }, 0);
  }

  get fastAnswers() {
    return this._state.stats.reduce((prev, cur) => {
      let result = cur === STATS_TYPES.FAST ? 1 : 0;
      return prev + result;
    }, 0);
  }

  get slowAnswers() {
    return this._state.stats.reduce((prev, cur) => {
      let result = cur === STATS_TYPES.SLOW ? 1 : 0;
      return prev + result;
    }, 0);
  }

  get pointsFast() {
    return this.fastAnswers * 50;
  }

  get pointsLives() {
    return this._state.lives * 50;
  }

  get pointsSlow() {
    return this.slowAnswers * (-50);
  }

  get pointsTotal() {
    return this.levelPoints + this.pointsFast + this.pointsSlow + this.pointsLives;
  }
}
