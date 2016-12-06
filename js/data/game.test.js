/**
 * Created by glebvorontsov on 05/12/16.
 */
import assert from 'assert';
import {setLives, setTime, setCurrentLevel, getLevel} from './game';
import {gameData} from './gameData';

describe('Game', function () {
  describe('Setting level', () => {
    describe('Returns', () => {
      it('setCurrentLevel() should return an {Object}', () => {
        assert.ok(typeof setCurrentLevel(gameData, 1) === 'object');
      });
    });
    describe('Number of level', () => {
      it('Level number cant be more than levels in data', () => {
        assert.throws(() => setLives(setCurrentLevel, 25));
      });
      it('Level number cant be less than 0', () => {
        assert.throws(() => setLives(setCurrentLevel, -4));
      });
    });
  });
  describe('Getting level', () => {
    describe('Returns', () => {
      it('getLevel() should return an {Object}', () => {
        assert.ok(typeof getLevel(1) === 'object');
      });
    });
    describe('Number of level is proper', () => {
      it('Level number is no more than level numbers', () => {
        assert.throws(() => getLevel(25));
      });
      it('Level number cant be less than 0', () => {
        assert.throws(() => getLevel(-4));
      });
    });
  });
  describe('Lives', () => {
    describe('Setting', () => {
      it('Number of player\'s lives successfully changes', () => {
        assert.equal(setLives(gameData, 2).lives, 2);
      });
    });
    describe('Failures', () => {
      it('setLives throws an error if negative value passed to it', () => {
        assert.throws(() => setLives(gameData, -1));
      });
      it('setLives throws an error if value > 3 passed to it', () => {
        assert.throws(() => setLives(gameData, 4));
      });
    });
  });
  describe('Time', () => {
    describe('Setting', () => {
      it('Number of time successfully changes', () => {
        assert.equal(setTime(gameData, 15).time, 15);
      });
    });
    describe('Failures', () => {
      it('setTime throws an error if time is larger than 30', () => {
        assert.throws(() => setLives(gameData, 9999999));
      });
      it('setTime throws an error if time is less than 0', () => {
        assert.throws(() => setLives(gameData, -100500));
      });
    });
  });
});
