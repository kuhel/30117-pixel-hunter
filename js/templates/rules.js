/**
 * Created by glebvorontsov on 20/11/16.
 */
import header from './components/header';
import gameOne from './game-1';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

const rulesData = {
  rulesTitle: 'Правила',
  rulesDescription: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`
};

const rules = getElementFromTemplate(`<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules  central--none">
    <h1 class="rules__title">${rulesData.rulesDescription}</h1>
    <p class="rules__description">${rulesData.rulesDescription}
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
renderBlock(gameOne);
});
rulesInput.addEventListener('change', (e) => {
  if (e.target.value) {
    rulesSubmit.removeAttribute('disabled');
  } else {
    rulesSubmit.setAttribute('disabled', '');
  }
});

export default rules;
