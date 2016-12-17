/**
 * Created by glebvorontsov on 13/12/16.
 */
import renderBlock from './modules/renderBlock';
import IntroScreen from './views/IntroScreen';
import GreetingScreen from './views/GreetingScreen';
import RulesScreen from './views/RulesScreen';
import GameScreen from './views/GameScreen';
import StatsScreen from './views/StatsScreen';
import {introData, greetingData, rulesData} from './data/staticData';

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

  static showGame() {
    const game = renderBlock(new GameScreen());
    return game;
  }

  static showStats(stats) {
    const _stats = new StatsScreen(stats);
    return _stats;
  }

}
