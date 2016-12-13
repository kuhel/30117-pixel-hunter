/**
 * Created by glebvorontsov on 10/12/16.
 */

import AbstractView from '../AbstractView';

export default class StatsComponent extends AbstractView {
  constructor(gameData) {
    super();
    this.stats = gameData;
  }

  update(newState) {
    this.state.stats = newState;
    this.element.innerHTML = this.getMarkup();
  }

  getMarkup() {
    return `
    <div class="stats">
      <ul class="stats">
        ${this.stats.map((stat) => `<li class="stats__result ${stat}"></li>`).join('\n')}
      </ul>
    </div>`;
  }
}
