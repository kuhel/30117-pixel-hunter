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
            <img src="${option.image.url}" alt="Option ${i + 1}" data-answer="${i}" width="${option.image.width}" height="${option.image.height}">
          </div>`).join('\n')}
        </form>
      ${this.statsView.getMarkup()}
    </div>`;
  }

  bindHandlers() {
    const answerBtns = this.element.querySelectorAll('.game__option');
    [].forEach.call(answerBtns, (item) => {
      item.addEventListener('click', (evt) => {
        this._onAnswer(evt.currentTarget.children[0].dataset.answer);
      });
    });
  }
}
