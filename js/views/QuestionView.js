/**
 * Created by glebvorontsov on 10/12/16.
 */
import AbstractView from './AbstractView';
import OneQuestionView from './OneQuestionView';
import TwoQuestionView from './TwoQuestionView';
import ThreeQuestionView from './ThreeQuestionView';

export default class QuestionView extends AbstractView {
  constructor(question, state) {
    super();
    this._question = question;
    this._stats = state.stats;
    this.questionView = null;
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  get element() {
    if (!this._element && this._question.gameOptions.length) {
      switch (this._question.gameOptions.length) {
        case 1:
          this.questionView = new OneQuestionView(this._question, this._stats);
          break;
        case 2:
          this.questionView = new TwoQuestionView(this._question, this._stats);
          break;
        case 3:
          this.questionView = new ThreeQuestionView(this._question, this._stats);
          break;
        default:
          throw new Error('⛔️ We are not ready for such kind of question');
      }
      this.questionView.onAnswer = this._onAnswer;
      this._element = this.questionView.element;
    }
    return this._element;
  }
}
