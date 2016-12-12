/**
 * Created by glebvorontsov on 10/12/16.
 */
import AbstractView from './AbstractView';
import StatsComponent from '../views/components/StatsComponent';

export default class TwoQuestionView extends AbstractView {
  constructor(question, stats) {
    super();
    this._question = question;
    this._stats = stats;
    this.statsView = new StatsComponent(this._stats);
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
            <img src="${option.gamePic}" alt="Option ${i + 1}" width="468" height="458">
            ${option.gameAnswers.map((answer) => `
            <label class="game__answer game__answer--${answer.gameAnswerValue}">
              <input name="question${i + 1}" type="radio" value="${answer.gameAnswerValue}">
              <span>${answer.gameAnswerTitle}</span>
            </label>`).join('\n')}
        </div>`).join('\n')}
      </form>
      ${this.statsView.getMarkup()}
    </div>`;
  }

  bindHandlers() {
    const answerBtn = this.element.querySelectorAll('.game__answer');
    let chosenAnswers = null;
    [].forEach.call(answerBtn, (btn) => {
      btn.addEventListener('click', () => {
        chosenAnswers = document.querySelectorAll('input:checked');
        if (chosenAnswers.length === 2) {
          this._onAnswer(this.isAnswer(chosenAnswers));
        }
      });
    });
  }

  isAnswer(nodes) {
    return [].map.call(nodes, (node, i) => {
      return node.value === this._question.answer[i];
    });
  }
}
