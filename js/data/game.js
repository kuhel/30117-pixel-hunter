/**
 * Created by glebvorontsov on 05/12/16.
 */
import {ANSWER_TIME, STATS_TYPES} from './staticData';

class Game {

  get initialGame() {

    const _initialGame = {
      level: 0,
      lives: 3,
      stats: [
        STATS_TYPES.UNKNOWN,
        STATS_TYPES.UNKNOWN,
        STATS_TYPES.UNKNOWN,
        STATS_TYPES.UNKNOWN,
        STATS_TYPES.UNKNOWN,
        STATS_TYPES.UNKNOWN,
        STATS_TYPES.UNKNOWN,
        STATS_TYPES.UNKNOWN,
        STATS_TYPES.UNKNOWN,
        STATS_TYPES.UNKNOWN
      ],
      time: 0,
      points: 0,
      forTheWin: false
    };
    return _initialGame;
  }

  /**
   * Level setter
   * @param {Object} game Game itself
   * @param {Number} level level to set
   * @return {Object} updated Game object
   */
  setCurrentLevel(game, level) {
    if (level < 0 || level > game.length) {
      throw new RangeError('Incorrect number of level');
    }
    let _game = JSON.parse(JSON.stringify(game));
    _game.level = level;
    return _game;
  }

  /**
   * Time setter
   * @param {Object} game Game itself
   * @param {Number} time time to set
   * @return {Object} updated Game object
   */
  setTime(game, time) {
    if (time < 0 || time > ANSWER_TIME.TOTAL) {
      throw new RangeError('Incorrect time');
    }
    let _game = JSON.parse(JSON.stringify(game));
    _game.time = time;
    return _game;
  }

  /**
   * Lives setter
   * @param {Object} game Game itself
   * @param {Number} lives number of lives to set
   * @return {Object} updated Game object
   */
  setLives(game, lives) {
    if (lives < 0) {
      throw new RangeError('Number of lives can\'t be negative');
    } else if (lives > 3) {
      throw new RangeError('Number of lives can\'t be more than 3');
    }
    let _game = JSON.parse(JSON.stringify(game));
    _game.lives = lives;
    return _game;
  }

  /**
   * Checks if level exists
   * @param {Array} game Array if levels
   * @param {Number} num Number of level to check
   * @return {Boolean}
   */
  hasLevel(game, num) {
    return typeof game[num] !== 'undefined';
  }

  /**
   * Level getter
   * @param {Array} game Array if levels
   * @param {Number} num Number of level to get
   * @return {Object} game level object
   */
  getLevel(game, num) {
    if (!this.hasLevel(game, num)) {
      throw new RangeError(`This game has no level ${num}`);
    }

    return game[num];
  }

  pushStatsResult(state, result, number) {
    if (result !== STATS_TYPES.CORRECT && result !== STATS_TYPES.WRONG && result !== STATS_TYPES.FAST && result !== STATS_TYPES.SLOW) {
      throw new Error('Value should be from white-list');
    }
    if (number < 0) {
      throw new RangeError('Value should not be negative');
    }
    if (number >= state.stats.length) {
      throw new RangeError('Value should not be more than stats quantity');
    }
    let _state = state;
    const _stats = state.stats.slice(0);

    _stats[number] = result;
    _state.stats = _stats;
    return JSON.parse(JSON.stringify(_state));
  }

  setFinalResult(state, result) {
    if (typeof result !== 'boolean') {
      throw new Error('Value should be boolean');
    }

    let _state = state;
    _state.forTheWin = result;
    return JSON.parse(JSON.stringify(_state));
  }

}

export default new Game();
