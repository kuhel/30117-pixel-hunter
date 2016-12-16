/**
 * Created by glebvorontsov on 10/12/16.
 */
import renderBlock from '../modules/renderBlock';
import AbstractView from './AbstractView';
import Application from '../Application';

class RulesScreen extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
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
    </header>
    <div class="rules  central--none">
      <h1 class="rules__title">${this._data.title}</h1>
      <p class="rules__description">${this._data.description}
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>`;
  }

  bindHandlers() {
    const rulesSubmit = this.element.querySelector('.rules__button');
    const rulesInput = this.element.querySelector('.rules__input');
    const back = this.element.querySelector('.back');

    rulesSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      Application.showGame();
    });
    rulesInput.addEventListener('change', (e) => {
      if (e.target.value) {
        rulesSubmit.removeAttribute('disabled');
      } else {
        rulesSubmit.setAttribute('disabled', '');
      }
    });
    rulesInput.addEventListener('keydown', (e) => rulesSubmit.removeAttribute('disabled'));

    back.addEventListener('click', () => Application.showIntro());
  }
}

export default (data) => {
  renderBlock(new RulesScreen(data).element);
};
