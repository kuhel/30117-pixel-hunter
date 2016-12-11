/**
 * Created by glebvorontsov on 10/12/16.
 */
import AbstractView from './AbstractView';
import StatsComponent from '../views/components/StatsComponent';

export default class OneQuestionView extends AbstractView {
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
      <form class="game__content game__content--wide">
        <div class="game__option">
          <img src="${this._question.gameOptions.gamePic}" alt="Option 1" width="705" height="455">
          ${this._question.gameAnswers.map((answer) => `
          <label class="game__answer game__answer--${answer.gameAnswerValue}">
            <input name="question1" type="radio" value="${answer.gameAnswerValue}">
            <span>${answer.gameAnswerTitle}</span>
          </label>
          `).join('')}
        </div>
      </form>
      ${this.statsView.getMarkup()}
    </div>`;
  }

  bindHandlers() {
    const answerBtn = this.element.querySelectorAll('.game__answer');
    const self = this;
    [].forEach.call(answerBtn, function (item) {
      item.addEventListener('click', (evt) => self._onAnswer(evt.currentTarget));
    });
  }

  isAnswer(node) {
    return node.querySelector('[type="radio"]').value === this._question.answer;
  }
}