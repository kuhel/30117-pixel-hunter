/**
 * Created by glebvorontsov on 10/12/16.
 */

import AbstractView from '../AbstractView';
import Application from '../../Application';

export default class HeaderComponent extends AbstractView {
  constructor(gameData) {
    super();
    this.state = gameData;
  }

  _drawLives(index) {
    const full = index < this.state.lives;
    return `<img src="img/heart__${full ? 'full' : 'empty'}.svg" class="game__heart" alt="Life" width="32" height="32">`;
  }

  _range(from = 0, to) {
    return (callback) => {
      const array = [];
      for (let i = from; i < to; i++) {
        array.push(callback(i));
      }
      return array;
    };
  }

  update(newState) {
    this.state = newState;
    this.element.innerHTML = this.getMarkup();
  }

  onClick() {
    Application.showIntro();
  }

  getMarkup() {
    return `
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">${this.state.time}</h1>
      <div class="game__lives">
        ${this._range(0, 3)((i) => this._drawLives(i)).reverse().join('')}
      </div>
    </header>`;
  }

  bindHandlers() {
    this.element.querySelector('.back').addEventListener('click', (evt) => {
      this.onClick();
    });
  }
}
