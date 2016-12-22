/**
 * Created by glebvorontsov on 05/12/16.
 */
import assert from 'assert';
import Game from './game';

describe('Game', function () {
  describe('Setting level', () => {
    describe('Returns', () => {
      it('setCurrentLevel() should return an {Object}', () => {
        assert.ok(typeof Game.setCurrentLevel(Game.initialGame, 1) === 'object');
      });
    });
    describe('Number of level', () => {
      it('Level number cant be more than levels in data', () => {
        assert.throws(() => Game.setLives(Game.setCurrentLevel, 25));
      });
      it('Level number cant be less than 0', () => {
        assert.throws(() => Game.setLives(Game.setCurrentLevel, -4));
      });
    });
  });
  describe('Lives', () => {
    describe('Setting', () => {
      it('Number of player\'s lives successfully changes', () => {
        assert.equal(Game.setLives(Game.initialGame, 2).lives, 2);
      });
    });
    describe('Failures', () => {
      it('setLives throws an error if negative value passed to it', () => {
        assert.throws(() => Game.setLives(Game.initialGame, -1));
      });
      it('setLives throws an error if value > 3 passed to it', () => {
        assert.throws(() => Game.setLives(Game.initialGame, 4));
      });
    });
  });
  describe('Time', () => {
    describe('Setting', () => {
      it('Number of time successfully changes', () => {
        assert.equal(Game.setTime(Game.initialGame, 15).time, 15);
      });
    });
    describe('Failures', () => {
      it('setTime throws an error if time is larger than 30', () => {
        assert.throws(() => Game.setLives(Game.initialGame, 9999999));
      });
      it('setTime throws an error if time is less than 0', () => {
        assert.throws(() => Game.setLives(Game.initialGame, -100500));
      });
    });
  });
});

