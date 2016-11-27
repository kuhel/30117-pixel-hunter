/**
 * Created by glebvorontsov on 27/11/16.
 */
import {headerData} from '../../data/gameData';

const header = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${headerData.headerTimer}</h1>
    <div class="game__lives">
      ${headerData.lives.map((life) => `<img src="img/heart__${life}.svg" class="game__heart" alt="Life" width="32" height="32">`).join('\n')}
    </div>
  </header>`;

export default header;
