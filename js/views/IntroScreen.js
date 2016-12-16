/**
 * Created by glebvorontsov on 10/12/16.
 */
import renderBlock from '../modules/renderBlock';
import AbstractView from './AbstractView';
import Application from '../Application';

class IntroScreen extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  getMarkup() {
    return `
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">${this._data.asteriskContent}</h1>
      <p class="intro__motto">${this._data.mottoContent}</p>
    </div>`;
  }

  bindHandlers() {
    this.element.querySelector('.intro__asterisk').addEventListener('click', () => {
      Application.showGreeting();
    });
  }
}

export default (data) => {
  renderBlock(new IntroScreen(data).element);
};
