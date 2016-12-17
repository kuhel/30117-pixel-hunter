/**
 * Created by glebvorontsov on 11/12/16.
 */
import renderBlock from '../modules/renderBlock';
import AbstractView from './AbstractView';
import {GAME_RESULTS} from '../data/staticData';
import ResolveStats from '../data/ResolveStats';
import Application from '../Application';

class StatsScreen extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
    this.resolveStats = new ResolveStats(this._data);
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
    <div class="result">
      <h1>${this._data.forTheWin ? GAME_RESULTS.WIN : GAME_RESULTS.LOSE}</h1>
      ${this.allGameStats}
    </div>`;
  }

  bindHandlers() {
    const back = this.element.querySelector('.back');
    back.addEventListener('click', () => Application.showIntro());
  }

  get levelStats() {
    return `
    <ul class="stats">
      ${this._data.stats.map((item) => `<li class="stats__result stats__result--${item}"></li>`).join('\n')}
    </ul>`;
  }

  get fastAnswers() {
    if (this.resolveStats.pointsFast) {
      return `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">
          ${this.resolveStats.fastAnswers}
          <span class="stats__result stats__result--fast"></span>
        </td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.resolveStats.pointsFast}</td>
      </tr>`;
    }
    return '\n';
  }

  get slowAnswers() {
    if (this.resolveStats.pointsSlow) {
      return `
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">
            ${this.resolveStats.slowAnswers}
            <span class="stats__result stats__result--slow"></span>
          </td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">
            ${this.resolveStats.pointsSlow}
           </td>
        </tr>`;
    }
    return '\n';
  }

  get livesBonus() {
    if (this.resolveStats.pointsLives) {
      return `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">
            ${this._data.lives}&nbsp;
            <span class="stats__result stats__result--heart"></span>
          </td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">
          ${this.resolveStats.pointsLives}
        </td>
      </tr>`;
    }
    return '\n';
  }

  get allGameStats() {
    if (this._data.forTheWin) {
      return `
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            ${this.levelStats}
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">
            ${this.resolveStats.levelPoints}
          </td>
        </tr>
        ${this.fastAnswers}
        ${this.livesBonus}
        ${this.slowAnswers}
        <tr>
          <td colspan="5" class="result__total  result__total--final">
            ${this.resolveStats.pointsTotal}
          </td>
        </tr>
      </table>`;
    } else {
      return `
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            ${this.resolveStats.pointsTotal}
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">${GAME_RESULTS.LOSE}</td>
        </tr>
      </table>`;
    }
  }

}

export default (state) => {
  renderBlock(new StatsScreen(state).element);
};
