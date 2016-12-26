/**
 * Created by glebvorontsov on 30/11/16.
 */

export const QuestionType = {		
  TWO_OF_TWO: 'two-of-two',		
  TINDER_LIKE: 'tinder-like',		
  ONE_OF_THREE: 'one-of-three'		
};

export const AnswerType = {
  PAINTING: 'painting',
  PHOTO: 'photo'
};

export const AnswerTypeName = {
  PAINTING: 'Рисунок',
  PHOTO: 'Фото'
};

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

export const STATS_TYPES = {
  CORRECT: 'correct',
  WRONG: 'wrong',
  FAST: 'fast',
  SLOW: 'slow',
  UNKNOWN: 'unknown'
};

export const ANSWER_TIME = {
  TOTAL: 30,
  FAST: 10,
  SLOW: 20
};

export const GAME_RESULTS = {
  WIN: 'Победа!',
  LOSE: 'Проиграл('
};
