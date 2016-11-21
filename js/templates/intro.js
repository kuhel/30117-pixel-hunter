/**
 * Created by glebvorontsov on 20/11/16.
 */
import {getElementFromTemplate} from '../modules/getElementFromTemplate';

const introTemplate = `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>`;

export const intro = getElementFromTemplate(introTemplate);
