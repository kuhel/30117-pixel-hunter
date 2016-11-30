/**
 * Created by glebvorontsov on 20/11/16.
 */
import {greetingData} from '../data/staticData';
import greeting from './greeting';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

export default (data) => {
  const introConstructor = {
    asteriskContainer: `<h1 class="${data.asteriskClassName}">${data.asteriskContent}</h1>`,
    mottoContainer: `<p class="${data.mottoClassName}">${data.mottoContent}</p>`
  };

  const intro = getElementFromTemplate(`<div id="intro" class="intro">
      ${introConstructor.asteriskContainer}
      ${introConstructor.mottoContainer}
    </div>`);


  intro.addEventListener('click', () => {
    renderBlock(greeting(greetingData));
  });

  return intro;
};
