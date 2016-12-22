/**
 * Created by glebvorontsov on 13/12/16.
 */
import renderBlock from './modules/renderBlock';
import IntroScreen from './views/IntroScreen';
import GreetingScreen from './views/GreetingScreen';
import RulesScreen from './views/RulesScreen';
import GameScreen from './views/GameScreen';
import StatsScreen from './views/StatsScreen';
import ErrorScreen from './views/ErrorScreen';
import LoaderScreen from './views/LoaderScreen';
import {introData, greetingData, rulesData} from './data/staticData';
import 'whatwg-fetch';

let levels = null;
const API = 'https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/';

export default class Application {

  static showIntro() {
    const intro = new IntroScreen(introData);
    return intro;
  }

  static showGreeting() {
    const greeting = new GreetingScreen(greetingData);
    return greeting;
  }

  static showRules() {
    const rules = new RulesScreen(rulesData);
    return rules;
  }

  static showGame(user) {
    const game = renderBlock(new GameScreen(levels, user));
    return game;
  }

  static showStats(stats, user) {
    const _stats = new StatsScreen(stats, user);
    return _stats;
  }

  static showError(error) {
    const _error = new ErrorScreen(error);
    return _error;
  }

  static showLoading() {
    const _loading = new LoaderScreen();
    return _loading;
  }

  static set data(data) {
    levels = data;
  }
  static checkResponseStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

  static saveGame(state) {
    this.showLoading();
    window.fetch(`${API}${state.user}`, {
      method: 'POST',
      body: JSON.stringify({
        'stats': state.stats,
        'lives': state.lives
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
        .then((response) => {
          return this.checkResponseStatus(response);
        })
        .then(() => window.fetch(`${API}${state.user}`))
        .then((response) => this.checkResponseStatus(response))
        .then((response) => response.json())
        .then((data) => {
          this.showStats(data, state.user);
        })
        .catch(this.showError);
  }
}
