/**
 * Created by glebvorontsov on 27/11/16.
 * @param {Array} statsData Stats of game
 * @return {String} HTML markup for stats
 */
const stats = (statsData) => {
  if (!statsData.length) {
    return `<div class="stats">
      <h3>There is no stats</h3>
    </div>`;
  }
  return `<div class="stats">
      <ul class="stats">
        ${statsData.map((stat) => `<li class="stats__result ${stat}"></li>`).join('\n')}
      </ul>
    </div>`;
};

export default stats;
