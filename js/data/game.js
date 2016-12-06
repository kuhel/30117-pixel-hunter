/**
 * Created by glebvorontsov on 05/12/16.
 */
import {gameLevels, ANSWER_TIME} from './gameData';

export const initialGame = {
  level: 0,
  lives: 3,
  time: 0
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
