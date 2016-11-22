/**
 * Created by glebvorontsov on 20/11/16.
 */
import greeting from './greeting';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

const intro = getElementFromTemplate(`<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>`);
const introAsteriskElement = intro.querySelector('.intro__asterisk');

const onClick = (e) => {
  renderBlock(greeting);
};

introAsteriskElement.addEventListener('click', onClick);


export default intro;
