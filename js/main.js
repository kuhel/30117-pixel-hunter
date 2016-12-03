import {introData} from './data/staticData';
import intro from './templates/intro';
import renderBlock from './modules/renderBlock';

renderBlock(intro(introData));

