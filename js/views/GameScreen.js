/**
 * Created by glebvorontsov on 10/12/16.
 */
import GameModel from '../data/GameModel';
import HeaderComponent from './components/HeaderComponent';
import QuestionView from './QuestionView';
import {rulesData} from '../data/staticData';
import renderRulesScreen from './RulesScreen';
import statsScreenRender from './StatsScreen';
import {AnswerType, QuestionType} from '../data/staticData';


class GamePresenter {
  constructor() {
    this.header = new HeaderComponent(GameModel.state);
    this.content = new QuestionView(GameModel.getCurrentLevel(), GameModel.state);

    this.root = document.createElement('div');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  startGame() {
    this.changeQuestion();
    GameModel.resetTime();

    this.intervalId = setInterval(() => {
      GameModel.tick();
      this.updateHeader();
      if (GameModel.isTimeRanOut()) {
        this.stopGame();
        GameModel.die();
        this.changeView();
      }
    }, 1000);
  }

  restart(continueGame) {
    if (!continueGame) {
      GameModel.restart();
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
    const question = new QuestionView(GameModel.getCurrentLevel(), GameModel.state);
    question.onAnswer = this.onAnswer.bind(this);
    this.changeContentView(question);
  }

  changeView() {
    if (GameModel.isDead() || !GameModel.hasNextLevel()) {
      this.exitGame();
    } else {
      GameModel.nextLevel();
      this.startGame();
    }
  }

  isDead() {
    return this._state.lives <= 0;
  }

  exitGame() {
    GameModel.setGameResult();
    statsScreenRender(GameModel.state);
  }

  checkAnswer(answer) {
    const question = GameModel.getCurrentLevel();
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
        return question.answers[answer].answer === question.answers[_answer].answer;
      default:
        throw new Error('Something wrong with answer');
    }
  }

  onAnswer(answer) {
    this.stopGame();
    let isAnswer = this.checkAnswer(answer);
    if (!isAnswer) {
      GameModel.die();
    }
    GameModel.setStats(isAnswer);
    this.changeView();
  }

  onBackClick() {
    this.stopGame();
    renderRulesScreen(rulesData);
  }

  updateHeader() {
    const header = new HeaderComponent(GameModel.state);
    header.onBackClick = this.onBackClick;
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }
}

const game = new GamePresenter();

export default () => {
  game.restart(false);
  return game.root;
};
