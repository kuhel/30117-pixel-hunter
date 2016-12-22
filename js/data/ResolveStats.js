/**
 * Created by glebvorontsov on 11/12/16.
 */
import {STATS_TYPES} from './staticData';

export default class ResolveStats {
  constructor(level) {
    this._level = level;
  }

  levelResult(num) {
    return this._level.stats[num] === STATS_TYPES.WRONG ? 0 : 100;
  }

  get levelPoints() {
    return this._level.stats.reduce((prev, cur) => {
      let result = cur === STATS_TYPES.WRONG ? 0 : 100;
      return prev + result;
    }, 0);
  }

  get fastAnswers() {
    return this._level.stats.reduce((prev, cur) => {
      let result = cur === STATS_TYPES.FAST ? 1 : 0;
      return prev + result;
    }, 0);
  }

  get slowAnswers() {
    return this._level.stats.reduce((prev, cur) => {
      let result = cur === STATS_TYPES.SLOW ? 1 : 0;
      return prev + result;
    }, 0);
  }

  get pointsFast() {
    return this.fastAnswers * 50;
  }

  get pointsLives() {
    return this._level.lives * 50;
  }

  get pointsSlow() {
    return this.slowAnswers * (-50);
  }

  get pointsTotal() {
    return this.levelPoints + this.pointsFast + this.pointsSlow + this.pointsLives;
  }
}
