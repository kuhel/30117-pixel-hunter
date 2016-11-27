/**
 * Created by glebvorontsov on 26/11/16.
 */
export const headerData = {
  headerTimer: 'NN',
  lives: ['empty', 'full', 'full']
};

export const gameContainerFirst = {
  gameTask: 'Угадайте для каждого изображения фото или рисунок?',
  gameOptions: [
    {
      gamePic: 'http://placehold.it/468x458',
      gameAnswers: [
        {
          gameAnswerValue: 'photo',
          gameAnswerTitle: 'Фото',
          isAnswer: false
        },
        {
          gameAnswerValue: 'paint',
          gameAnswerTitle: 'Рисунок',
          isAnswer: true
        }
      ],
      chose: false
    },
    {
      gamePic: 'http://placehold.it/468x458',
      gameAnswers: [
        {
          gameAnswerValue: 'photo',
          gameAnswerTitle: 'Фото',
          isAnswer: false
        },
        {
          gameAnswerValue: 'paint',
          gameAnswerTitle: 'Рисунок',
          isAnswer: true
        }
      ],
      chose: false
    }
  ]
};

export const gameContainerSecond = {
  gameTask: 'Угадай, фото или рисунок?',
  gameOptions: [
    {
      gamePic: 'http://placehold.it/705x455',
      gameAnswers: [
        {
          gameAnswerValue: 'photo',
          gameAnswerTitle: 'Фото',
          isAnswer: false
        },
        {
          gameAnswerValue: 'paint',
          gameAnswerTitle: 'Рисунок',
          isAnswer: true
        }
      ],
      chose: false
    }
  ]
};

export const gameContainerThird = {
  gameTask: 'Найдите рисунок среди изображений',
  gameOptions: [
    {
      gamePic: 'http://placehold.it/304x455',
      gameAnswers: [],
      chosen: false
    },
    {
      gamePic: 'http://placehold.it/304x455',
      gameAnswers: [],
      chosen: true
    },
    {
      gamePic: 'http://placehold.it/304x455',
      gameAnswers: [],
      chosen: false
    }
  ]
};

export const stats = {
  correct: 'stats__result--correct',
  wrong: 'stats__result--wrong',
  fast: 'stats__result--fast',
  slow: 'stats__result--slow',
  unkown: 'stats__result--unknown'
};

export let gameOneStats = [
  stats.wrong,
  stats.slow,
  stats.fast,
  stats.correct,
  stats.unkown,
  stats.unkown,
  stats.unkown,
  stats.unkown,
  stats.unkown,
  stats.unkown
];

export let gameTwoStats = [
  stats.wrong,
  stats.slow,
  stats.fast,
  stats.correct,
  stats.wrong,
  stats.unkown,
  stats.slow,
  stats.unkown,
  stats.fast,
  stats.unkown
];

export let gameThreeStats = [
  stats.wrong,
  stats.slow,
  stats.fast,
  stats.correct,
  stats.wrong,
  stats.unkown,
  stats.slow,
  stats.unkown,
  stats.fast,
  stats.unkown
];
