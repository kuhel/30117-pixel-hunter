/**
 * Created by glebvorontsov on 10/12/16.
 */
import {AnswerType, AnswerTypeName} from '../data/staticData';
import AbstractView from './AbstractView';
import StatsComponent from '../views/components/StatsComponent';
import imageLoader from '../image-loader/image-loader';

export default class OneQuestionView extends AbstractView {
  constructor(question, stats) {
    super();
    this._question = question;
    this._stats = stats;
    this.statsView = new StatsComponent(this._stats);
    this.imageResize();
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
    return `
    <div class="game">
      <p class="game__task">${this._question.question}</p>
      <form class="game__content game__content--wide">
        <div class="game__option">
          <img src="${this._question.answers[0].image.url}" alt="Option 1" width="${this._question.answers[0].image.width}" height="${this._question.answers[0].image.height}">
          <label class="game__answer game__answer--${AnswerType.PHOTO}">
            <input name="question1" type="radio" value="${AnswerType.PHOTO}">
            <span>${AnswerTypeName.PHOTO}</span>
          </label>
          <label class="game__answer game__answer--${AnswerType.PAINTING}">
            <input name="question1" type="radio" value="${AnswerType.PAINTING}">
            <span>${AnswerTypeName.PAINTING}</span>
          </label>
        </div>
      </form>
      ${this.statsView.getMarkup()}
    </div>`;
  }

  imageResize() {
    imageLoader(this.element.querySelector('img'));
  }

  bindHandlers() {
    const answerBtn = this.element.querySelectorAll('.game__answer');
    [].forEach.call(answerBtn, (item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault();
        this._onAnswer(evt.currentTarget.querySelector('input[type=radio]').value);
      });
    });
  }

}
