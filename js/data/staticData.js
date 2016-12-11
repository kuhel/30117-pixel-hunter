/**
 * Created by glebvorontsov on 30/11/16.
 */
export const introData = {
  asteriskContent: '*',
  asteriskClassName: 'intro__asterisk',
  mottoContent: '<sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.',
  mottoClassName: 'intro__motto'
};

export const rulesData = {
  title: 'Правила',
  description: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`
};

export const greetingData = {
  title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  description: `Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.`
};

export const statsClassNames = {
  correct: 'stats__result--correct',
  wrong: 'stats__result--wrong',
  fast: 'stats__result--fast',
  slow: 'stats__result--slow',
  unknown: 'stats__result--unknown'
};

export const STATS_TYPES = {
  CORRECT: 'stats__result--correct',
  WRONG: 'stats__result--wrong',
  FAST: 'stats__result--fast',
  SLOW: 'stats__result--slow',
  UNKNOWN: 'stats__result--unknown'
};

export const ANSWER_TIME = {
  TOTAL: 300,
  FAST: 10,
  SLOW: 20
};

export const GAME_RESULTS = {
  WIN: 'Победа!',
  LOSE: 'Проиграл('
};
