/**
 * Created by glebvorontsov on 20/11/16.
 */
import {gameTwoStats, gameContainerSecond} from '../data/gameData';
import header from './components/header';
import stats from './components/stats';
import gameThree from './game-3';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

const gameTwoMarkup = (gameData) => `<p class="game__task">${gameData.gameTask}</p>
<form class="game__content  game__content--wide">
  ${gameData.gameOptions.map((option, i) => `<div class="game__option">
    <img src="${option.gamePic}" alt="Option ${i + 1}" width="705" height="455">
    ${option.gameAnswers.map((answer) => `
    <label class="game__answer game__answer--${answer.gameAnswerValue}">
      <input name="question1" type="radio" value="${answer.gameAnswerValue}">
      <span>${answer.gameAnswerTitle}</span>
    </label>
    `).join('\n')}
  </div>`).join('\n')}
</form>`;

const gameTwo = getElementFromTemplate(`${header}
  <div class="game">
    ${gameTwoMarkup(gameContainerSecond)}
    ${stats(gameTwoStats)}
  </div>`);

const answerBtn = gameTwo.querySelectorAll('.game__answer');

[].forEach.call(answerBtn, function (item) {
  item.addEventListener('click', () => renderBlock(gameThree));
});

export default gameTwo;
