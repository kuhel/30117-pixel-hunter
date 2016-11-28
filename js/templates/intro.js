/**
 * Created by glebvorontsov on 20/11/16.
 */
import greeting from './greeting';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

const content = {
  asteriskContent: '*',
  asteriskClassName: 'intro__asterisk',
  mottoContent: '<sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.',
  mottoClassName: 'intro__motto'
};

const introConstructor = {
  asteriskContainer: `<h1 class="${content.asteriskClassName}">${content.asteriskContent}</h1>`,
  mottoContainer: `<p class="${content.mottoClassName}">${content.mottoContent}</p>`
};

const intro = getElementFromTemplate(`<div id="intro" class="intro">
      ${introConstructor.asteriskContainer}
      ${introConstructor.mottoContainer}
    </div>`);


intro.addEventListener('click', () => {
  renderBlock(greeting);
});

export default intro;
