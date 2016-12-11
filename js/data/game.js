/**
 * Created by glebvorontsov on 05/12/16.
 */
import {gameLevels} from './gameData';
import {ANSWER_TIME, STATS_TYPES} from './staticData';

export const initialGame = {
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

/**
 * Level setter
 * @param {Object} game Game itself
 * @param {Number} level level to set
 * @return {Object} updated Game object
 */
export const setCurrentLevel = (game, level) => {
  if (level < 0 || level > gameLevels.length) {
    throw new RangeError('Incorrect number of level');
  }
  let _game = JSON.parse(JSON.stringify(game));
  _game.level = level;
  return _game;
};

/**
 * Time setter
 * @param {Object} game Game itself
 * @param {Number} time time to set
 * @return {Object} updated Game object
 */
export const setTime = (game, time) => {
  if (time < 0 || time > ANSWER_TIME.TOTAL) {
    throw new RangeError('Incorrect time');
  }
  let _game = JSON.parse(JSON.stringify(game));
  _game.time = time;
  return _game;
};

/**
 * Lives setter
 * @param {Object} game Game itself
 * @param {Number} lives number of lives to set
 * @return {Object} updated Game object
 */
export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError('Number of lives can\'t be negative');
  } else if (lives > 3) {
    throw new RangeError('Number of lives can\'t be more than 3');
  }
  let _game = JSON.parse(JSON.stringify(game));
  _game.lives = lives;
  return _game;
};

/**
 * Checks if level exists
 * @param {Number} num Number of level to check
 * @return {Boolean}
 */
export const hasLevel = (num) => typeof gameLevels[num] !== 'undefined';

/**
 * Level getter
 * @param {Number} num Number of level to get
 * @return {Object} game level object
 */
export const getLevel = (num) => {
  if (!hasLevel(num)) {
    throw new RangeError(`This game has no level ${num}`);
  }

  return gameLevels[num];
};


export const pushStatsResult = (state, result, number) => {
  if (result !== 'correct' && result !== 'wrong' && result !== 'fast' && result !== 'slow') {
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
  _state.stats = statsToUpdate;
  return JSON.parse(JSON.stringify(_state));
};

export const setFinalResult = (state, result) => {
  if (typeof result !== 'boolean') {
    throw new Error('Value should be boolean');
  }

  let _state = state;
  _state.result = result;
  return JSON.parse(JSON.stringify(_state));
}
