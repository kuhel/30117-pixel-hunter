/**
 * Created by glebvorontsov on 20/11/16.
 */
import {gameThreeData, allGameStats} from '../data/gameData';
import header from './components/header';
import statsRender from './components/stats';
import gameThree from './game-3';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

export default (data, stats) => {
  const gameTwoMarkup = `<p class="game__task">${data.gameTask}</p>
<form class="game__content  game__content--wide">
  ${data.gameOptions.map((option, i) => `<div class="game__option">
    <img src="${option.gamePic}" alt="Option ${i + 1}" width="705" height="455">
    ${option.gameAnswers.map((answer) => `
    <label class="game__answer game__answer--${answer.gameAnswerValue}">
      <input name="question1" type="radio" value="${answer.gameAnswerValue}">
      <span>${answer.gameAnswerTitle}</span>
    </label>`).join('\n')}
  </div>`).join('\n')}
</form>`;

  const gameTwo = getElementFromTemplate(`${header}
  <div class="game">
    ${gameTwoMarkup}
    ${statsRender(stats)}
  </div>`);

  const answerBtn = gameTwo.querySelectorAll('.game__answer');

  [].forEach.call(answerBtn, function (item) {
    item.addEventListener('click', () => renderBlock(gameThree(gameThreeData, allGameStats[2])));
  });

  return gameTwo;
}
