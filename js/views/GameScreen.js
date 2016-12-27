/**
 * Created by glebvorontsov on 10/12/16.
 */
import GameModel from '../data/GameModel';
import HeaderComponent from './components/HeaderComponent';
import QuestionView from './QuestionView';
import Application from '../Application';
import {rulesData} from '../data/staticData';
import renderRulesScreen from './RulesScreen';
import {QuestionType} from '../data/staticData';


class GamePresenter {
  constructor(model) {
    this.model = model;
    this.header = new HeaderComponent(this.model.state);
    this.content = new QuestionView(this.model.getCurrentLevel(), this.model.state);

    this.root = document.createElement('div');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  startGame() {
    this.changeQuestion();
    this.model.resetTime();

    this.intervalId = setInterval(() => {
      this.model.tick();
      this.updateHeader();
      if (this.model.isTimeRanOut()) {
        this.stopGame();
        if (!this.model.isDead()) {
          this.model.die();
        }
        this.model.setStats(false);
        this.changeView();
      }
    }, 1000);
  }

  restart(continueGame) {
    if (!continueGame) {
      this.model.restart();
    }
    this.startGame();
  }

  stopGame() {
    clearInterval(this.intervalId);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  changeQuestion() {
    this.updateHeader();
    const question = new QuestionView(this.model.getCurrentLevel(), this.model.state);
    question.onAnswer = this.onAnswer.bind(this);
    this.changeContentView(question);
  }

  changeView() {
    if (this.model.isDead() || !this.model.hasNextLevel()) {
      this.exitGame();
    } else {
      this.model.nextLevel();
      this.startGame();
    }
  }

  isDead() {
    return this._state.lives <= 0;
  }

  exitGame() {
    Application.saveGame(this.model.state);
  }

  checkAnswer(answer) {
    const question = this.model.getCurrentLevel();
    switch (question.type) {
      case QuestionType.TINDER_LIKE:
        return answer === question.answers[0].type;
      case QuestionType.TWO_OF_TWO:
        return answer[0] === question.answers[0].type && answer[1] === question.answers[1].type;
      case QuestionType.ONE_OF_THREE:
        let _answer = null;
        if (question.answers[0].type === question.answers[1].type) {
          _answer = 2;
        } else if (question.answers[0].type === question.answers[2].type) {
          _answer = 1;
        } else {
          _answer = 0;
        }
        return question.answers[answer].type === question.answers[_answer].type;
      default:
        throw new Error('Something wrong with answer');
    }
  }

  onAnswer(answer) {
    this.stopGame();
    let isAnswer = this.checkAnswer(answer);
    if (!isAnswer) {
      this.model.die();
    }
    this.model.setStats(isAnswer);
    this.changeView();
  }

  onBackClick() {
    this.stopGame();
    renderRulesScreen(rulesData);
  }

  updateHeader() {
    const header = new HeaderComponent(this.model.state);
    header.onBackClick = this.onBackClick;
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }
}

export default (levels, user) => {
  const game = new GamePresenter(new GameModel(levels, user));
  game.restart(true);
  return game.root;
};
