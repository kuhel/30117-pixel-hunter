/**
 * Created by glebvorontsov on 01/12/16.
 */
import statsPage from './stats';
import header from './components/header';
import statsRender from './components/stats';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

const gameRender = (data, playNumber = 0) => {
  const gameType = data[playNumber].gameOptions.length;
  let gameMarkup = null;
  let answerBtn;

  if (gameType === 1) {
    gameMarkup = `<p class="game__task">${data[playNumber].gameTask}</p>
      <form class="game__content  game__content--wide">
        ${data[playNumber].gameOptions.map((option, i) => `<div class="game__option">
            <img src="${option.gamePic}" alt="Option ${i + 1}" width="705" height="455">
            ${option.gameAnswers.map((answer) => `
            <label class="game__answer game__answer--${answer.gameAnswerValue}">
              <input name="question1" type="radio" value="${answer.gameAnswerValue}">
              <span>${answer.gameAnswerTitle}</span>
            </label>`).join('\n')}
          </div>`).join('\n')}
        </form>`;
  } else if (gameType === 2) {
    gameMarkup = `<p class="game__task">${data[playNumber].gameTask}</p>
      <form class="game__content">
        ${data[playNumber].gameOptions.map((option, i) => `
        <div class="game__option">
          <img src="${option.gamePic}" alt="Option ${i + 1}" width="468" height="458">
          ${option.gameAnswers.map((answer) => `
          <label class="game__answer game__answer--${answer.gameAnswerValue}">
            <input name="question${i + 1}" type="radio" value="${answer.gameAnswerValue}">
            <span>${answer.gameAnswerTitle}</span>
          </label>`).join('\n')}
        </div>`).join('\n')}
      </form>`;
  } else if (gameType === 3) {
    gameMarkup = `<div class="game">
      <p class="game__task">${data[playNumber].gameTask}</p>
      <form class="game__content  game__content--triple">
        ${data[playNumber].gameOptions.map((option, i) => `<div class="game__option ${option.chosen ? 'game__option--selected' : ''}">
          <img src="${option.gamePic}" alt="Option ${i + 1}" width="304" height="455">
        </div>`).join('\n')}
      </form>
    </div>`;
  }

  const game = getElementFromTemplate(`${header}
  <div class="game">
    ${gameMarkup}
    ${statsRender(data[playNumber].stats)}
  </div>`);

  if (gameType === 1 || gameType === 2) {
    answerBtn = game.querySelectorAll('.game__answer');
  } else if (gameType === 3) {
    answerBtn = game.querySelectorAll('.game__option');
  }

  if (playNumber < data.length - 1) {
    [].forEach.call(answerBtn, function (item) {
      item.addEventListener('click', () => {
        playNumber += 1;
        renderBlock(gameRender(data, playNumber));
      });
    });
  } else {
    [].forEach.call(answerBtn, function (item) {
      item.addEventListener('click', () => renderBlock(statsPage(data)));
    });
  }
  return game;
};

export default gameRender;
