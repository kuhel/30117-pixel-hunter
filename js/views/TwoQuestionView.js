/**
 * Created by glebvorontsov on 10/12/16.
 */
import {AnswerType, AnswerTypeName} from '../data/staticData';
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
      <p class="game__task">${this._question.question}</p>
        <form class="game__content">
          ${this._question.answers.map((option, i) => `
          <div class="game__option">
            <img src="${option.image.url}" alt="Option ${i + 1}" width="${option.image.width}" height="${option.image.height}">
            <label class="game__answer game__answer--${AnswerType.PHOTO}">
              <input name="question${i + 1}" type="radio" value="${AnswerType.PHOTO}">
              <span>${AnswerTypeName.PHOTO}</span>
            </label>
            <label class="game__answer game__answer--${AnswerType.PAINTING}">
              <input name="question${i + 1}" type="radio" value="${AnswerType.PAINTING}">
              <span>${AnswerTypeName.PAINTING}</span>
            </label>
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
          this._onAnswer([chosenAnswers[0].value, chosenAnswers[1].value]);
        }
      });
    });
  }
}
