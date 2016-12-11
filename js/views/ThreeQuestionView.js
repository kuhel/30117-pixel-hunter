/**
 * Created by glebvorontsov on 10/12/16.
 */
import AbstractView from './AbstractView';
import StatsComponent from '../views/components/StatsComponent';

export default class ThreeQuestionView extends AbstractView {
  constructor(question, stats) {
    super();
    this._question = question;
    this._stats = stats;
    this.statsView = new StatsComponent(this._stats);
    this.bindHandlers();
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
    return `
    <div class="game">
      <p class="game__task">${this._question.gameTask}</p>
      <form class="game__content">
        ${this._question.gameOptions.map((option, i) => `
          <div class="game__option">
            <img src="${option.gamePic}" alt="Option ${i + 1}" data-answer="${i + 1}" width="304" height="455">
          </div>`).join('\n')}
        </form>
      ${this.statsView.getMarkup()}
    </div>`;
  }

  bindHandlers() {
    const answerBtn = this.element.querySelector('.game__option');
    const self = this;
    [].forEach.call(answerBtn, function (item) {
      self._onAnswer(event.currentTarget);
    });
  }

  isAnswer(node) {
    return node.childNodes[0].dataset.answer === this._question.answer;
  }
}
