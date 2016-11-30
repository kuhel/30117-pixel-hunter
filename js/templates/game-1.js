/**
 * Created by glebvorontsov on 20/11/16.
 */
import {gameTwoData, allGameStats} from '../data/gameData';
import header from './components/header';
import statsRender from './components/stats';
import gameTwo from './game-2';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';


export default (data, stats) => {
  const gameOneMarkup = `<p class="game__task">${data.gameTask}</p>
  <form class="game__content">
    ${data.gameOptions.map((option, i) => `
    <div class="game__option">
      <img src="${option.gamePic}" alt="Option ${i + 1}" width="468" height="458">
      ${option.gameAnswers.map((answer) => `
      <label class="game__answer game__answer--${answer.gameAnswerValue}">
      <input name="question${i + 1}" type="radio" value="${answer.gameAnswerValue}">
      <span>${answer.gameAnswerTitle}</span>
      </label>`).join('\n')}
    </div>`).join('\n')}
  </form>`;

  const gameOne = getElementFromTemplate(`${header}
  <div class="game">
    ${gameOneMarkup}
    ${statsRender(stats)}
  </div>`);

  const answerBtn = gameOne.querySelectorAll('.game__answer');

  [].forEach.call(answerBtn, function (item) {
    item.addEventListener('click', () => renderBlock(gameTwo(gameTwoData, allGameStats[1])));
  });

  return gameOne;
}
