/**
 * Created by glebvorontsov on 26/11/16.
 */
export const headerData = {
  headerTimer: 'NN',
  lives: ['empty', 'full', 'full']
};

export const gameOneData = {
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

export const gameTwoData = {
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

export const gameThreeData = {
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
  unknown: 'stats__result--unknown'
};

export let allGameStats = [
  [
    stats.wrong,
    stats.slow,
    stats.fast,
    stats.correct,
    stats.unknown,
    stats.unknown,
    stats.unknown,
    stats.unknown,
    stats.unknown,
    stats.unknown
  ],

  [
    stats.wrong,
    stats.slow,
    stats.fast,
    stats.correct,
    stats.wrong,
    stats.unknown,
    stats.slow,
    stats.unknown,
    stats.fast,
    stats.unknown
  ],

  [
    stats.wrong,
    stats.slow,
    stats.fast,
    stats.correct,
    stats.wrong,
    stats.unknown,
    stats.slow,
    stats.unknown,
    stats.fast,
    stats.unknown
  ]
]
