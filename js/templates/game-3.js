/**
 * Created by glebvorontsov on 20/11/16.
 */
import statsPage from './stats';
import {gameThreeStats, gameContainerThird} from '../data/gameData'
import header from './components/header';
import stats from './components/stats';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

const gameThreeMarkup = (gameData) => `<div class="game">
    <p class="game__task">${gameData.gameTask}</p>
    <form class="game__content  game__content--triple">
      ${gameData.gameOptions.map((option, i) => `<div class="game__option ${option.chosen ? 'game__option--selected' : ''}">
        <img src="${option.gamePic}" alt="Option ${i + 1}" width="304" height="455">
      </div>`).join('\n')}
    </form>
    ${stats(gameThreeStats)}
  </div>`;

const gameThree = getElementFromTemplate(`${header}
  <div class="game">
    ${gameThreeMarkup(gameContainerThird)}
    ${stats(gameThreeStats)}
  </div>`);

const answerBtn = gameThree.querySelectorAll('.game__option');

[].forEach.call(answerBtn, function (item) {
  item.addEventListener('click', () => renderBlock(statsPage));
});

export default gameThree;
