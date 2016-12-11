/**
 * Created by glebvorontsov on 10/12/16.
 */
import GameModel from '../data/GameModel';
import HeaderComponent from './components/HeaderComponent';
import QuestionView from './QuestionView';
import {rulesData} from '../data/staticData';
import renderRulesScreen from './RulesScreen';
import statsScreenRender from './StatsScreen';


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
    question.onAnswer = this.onAnswer;
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

  exitGame() {
    GameModel.setGameResult();
    statsScreenRender(GameModel.state);
  }

  onAnswer(result) {
    this.stopGame();
    if (!result) {
      GameModel.die();
    }
    GameModel.updateStats(result);
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
