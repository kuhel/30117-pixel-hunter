/**
 * Created by glebvorontsov on 10/12/16.
 */
import renderBlock from '../modules/renderBlock';
import AbstractView from './AbstractView';
import renderRuleScreen from './RulesScreen.js';
import {rulesData} from '../data/staticData';

class GreetingScreen extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
    this.bindHandlers();
  }

  getMarkup() {
    return `
    <div class="greeting  central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>${this._data.title}</h3>
        <p>${this._data.description}</p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>`;
  }

  bindHandlers() {
    this.element.querySelector('.greeting__continue').addEventListener('click', () => {
      renderRuleScreen(rulesData);
    });
  }
}

export default (data) => {
  renderBlock(new GreetingScreen(data).element);
};
