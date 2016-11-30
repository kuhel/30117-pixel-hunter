/**
 * Created by glebvorontsov on 20/11/16.
 */
import {rulesData} from '../data/staticData';
import rules from './rules';
import renderBlock from '../modules/renderBlock';
import getElementFromTemplate from '../modules/getElementFromTemplate';

export default (data) => {
  const greeting = getElementFromTemplate(`<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.title}</h3>
      <p>${data.description}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`);

  const greetingElement = greeting.querySelector('.greeting__continue');

  greetingElement.addEventListener('click', () => renderBlock(rules(rulesData)));

  return greeting;
}
