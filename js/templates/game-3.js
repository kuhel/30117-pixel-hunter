/**
 * Created by glebvorontsov on 20/11/16.
 */
import statsPage from './stats';
import {allGameStats} from '../data/gameData';
import header from './components/header';
import statsRender from './components/stats';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';


export default (data, stats) => {
  const gameThreeMarkup = `<div class="game">
    <p class="game__task">${data.gameTask}</p>
    <form class="game__content  game__content--triple">
      ${data.gameOptions.map((option, i) => `<div class="game__option ${option.chosen ? 'game__option--selected' : ''}">
        <img src="${option.gamePic}" alt="Option ${i + 1}" width="304" height="455">
      </div>`).join('\n')}
    </form>
  </div>`;

  const gameThree = getElementFromTemplate(`${header}
  <div class="game">
    ${gameThreeMarkup}
    ${statsRender(stats)}
  </div>`);

  const answerBtn = gameThree.querySelectorAll('.game__option');

  [].forEach.call(answerBtn, function (item) {
    item.addEventListener('click', () => renderBlock(statsPage(allGameStats)));
  });

  return gameThree;
}
