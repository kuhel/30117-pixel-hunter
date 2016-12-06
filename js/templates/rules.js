/**
 * Created by glebvorontsov on 20/11/16.
 */
import {gameLevels} from '../data/gameData';
import gameRender from './gameRender';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

export default (data) => {
  const rules = getElementFromTemplate(`<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules  central--none">
    <h1 class="rules__title">${data.title}</h1>
    <p class="rules__description">${data.description}
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`);

  const rulesSubmit = rules.querySelector('.rules__button');
  const rulesInput = rules.querySelector('.rules__input');

  rulesSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    renderBlock(gameRender(gameLevels));
  });
  rulesInput.addEventListener('change', (e) => {
    if (e.target.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  });
  return rules;
};
