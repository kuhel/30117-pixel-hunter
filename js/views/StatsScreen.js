/**
 * Created by glebvorontsov on 11/12/16.
 */
import renderBlock from '../modules/renderBlock';
import AbstractView from './AbstractView';
import {GAME_RESULTS, STATS_TYPES} from '../data/staticData';
import ResolveStats from '../data/ResolveStats';
import Application from '../Application';

class StatsScreen extends AbstractView {
  constructor(data, user) {
    super();
    this._data = data.reverse();
    this._user = user;
  }

  getMarkup() {

    let _temp = `
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    </header>
    <div class="result">
    ${this._data.map((play) => this.allGameStats(play)).join('\n')}
    </div>`;
    return _temp;
  }

  bindHandlers() {
    const back = this.element.querySelector('.back');
    back.addEventListener('click', () => Application.showGame(this._user));
  }

  levelStats(play, level) {
    const _play = play;
    let _statsMarkup = _play.stats.map((stat, i) => {
      if (level === i) {
        return `<li class="stats__result stats__result--${stat}"></li>`;
      } else {
        return `<li class="stats__result stats__result--${STATS_TYPES.UNKNOWN}"></li>`;
      }
    });
    return `
    <ul class="stats">
      ${_statsMarkup}
    </ul>`;
  }

  fastAnswers(play) {
    const _play = play;
    const resolveStats = new ResolveStats(_play);
    if (resolveStats.pointsFast) {
      return `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">
          ${resolveStats.fastAnswers}
          <span class="stats__result stats__result--fast"></span>
        </td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${resolveStats.pointsFast}</td>
      </tr>`;
    }
    return '\n';
  }

  slowAnswers(play) {
    const _play = play;
    const resolveStats = new ResolveStats(_play);
    if (resolveStats.pointsSlow) {
      return `
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">
            ${resolveStats.slowAnswers}
            <span class="stats__result stats__result--slow"></span>
          </td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">
            ${resolveStats.pointsSlow}
           </td>
        </tr>`;
    }
    return '\n';
  }

  livesBonus(play) {
    const _play = play;
    const resolveStats = new ResolveStats(_play);
    if (resolveStats.pointsLives) {
      return `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">
            ${_play.lives}&nbsp;
            <span class="stats__result stats__result--heart"></span>
          </td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">
          ${resolveStats.pointsLives}
        </td>
      </tr>`;
    }
    return '\n';
  }

  allGameStats(play) {
    const _play = play;
    const resolveStats = new ResolveStats(_play);
    const date = new Date(_play.date);
    let head = `<h1>${_play.lives > 0 ? GAME_RESULTS.WIN : GAME_RESULTS.LOSE} — ${date.toLocaleDateString()}</h1>
    <table class="result__table">`;

    let _top = _play.stats.slice().map((item, i) => {
      if (item !== STATS_TYPES.UNKNOWN) {
        return `
        <tr>
          <td class="result__number">${i + 1}.</td>
          <td colspan="2">
            ${this.levelStats(_play, i)}
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">
            ${resolveStats.levelResult(i)}
          </td>
        </tr>`;
      } else {
        return '';
      }
    });

    let fastAnswers = this.fastAnswers(_play);
    let liveBonus = this.livesBonus(_play);
    let slowAnswers = this.slowAnswers(_play);
    return `
      ${head}
      ${_top}
      ${fastAnswers}
      ${liveBonus}
      ${slowAnswers}
      <tr>
        <td colspan="5" class="result__total  result__total--final">
          ${resolveStats.pointsTotal}
        </td>
      </tr>
    </table>`;
  }

}

export default (state, user) => {
  renderBlock(new StatsScreen(state, user).element);
};
