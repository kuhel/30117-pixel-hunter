import intro from './templates/intro';
import {renderBlock} from './modules/renderBlock';

(function () {

  // Rules


  // Slides changer

  const mainElement = document.getElementById('main');

  const switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  renderBlock(intro);


})();
