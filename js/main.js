import {intro} from './templates/intro';
import {greeting} from './templates/greeting';
import {rules} from './templates/rules';
import {gameOne} from './templates/game-1';
import {gameTwo} from './templates/game-2';
import {gameThree} from './templates/game-3';
import {stats} from './templates/stats';

(function () {

  // Rules
  const rulesElement = rules;
  const rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesElement.querySelector('.rules__input').oninput = (e) => {
    if (e.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  const mainElement = document.getElementById('main');

  const switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  const slides = [
    intro,
    greeting,
    rules,
    gameOne,
    gameTwo,
    gameThree,
    stats
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  let nextArrow = document.querySelector('.next');
  let prevArrow = document.querySelector('.prev');

  nextArrow.onclick = (e) => {
    e.preventDefault();
    if ((current + 1) < slides.length) {
      select(current + 1);
    }
  };

  prevArrow.onclick = (e) => {
    e.preventDefault();
    if ((current - 1) >= 0) {
      select(current - 1);
    }
  };


  select(0);
})();
