/**
 * Created by glebvorontsov on 11/12/16.
 */
import renderBlock from '../modules/renderBlock';
import AbstractView from './AbstractView';
import HeaderComponent from './components/HeaderComponent';
import renderGameScreen from './GameScreen';
import {GAME_RESULTS} from '../data/staticData'
import ResolveStats from '../data/ResolveStats'

class StatsScreen extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
    this.header = new HeaderComponent(this._data);
    this.resolveStats = new ResolveStats(this._data);
  }

  getMarkup() {
    return `
    ${this.header.getMarkup()}
    <div class="result">
      <h1>${this._data.forTheWin ? GAME_RESULTS.WIN : GAME_RESULTS.LOSE}</h1>
      ${this._data.map((game, i) => `<table class="result__table">
          <tr>
            <td class="result__number">${i + 1}.</td>
            <td colspan="2">
              ${statsRender(game.stats)}
            </td>
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">900</td>
          </tr> 
          <tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">50</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">100</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">-100</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">950</td>
          </tr>
        </table>`).join('\n')}
    </div>`;
  }

  get levelStats() {
    return `
    <ul class="stats">
      ${this._data.map((item) => `<li class="stats__result stats__result--${item}"></li>`).join('\n')}
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
    if (this._data.forTheWin === GAME_RESULTS.WIN) {
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
