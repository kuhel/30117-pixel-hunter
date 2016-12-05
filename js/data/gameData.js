/**
 * Created by glebvorontsov on 26/11/16.
 */
import {statsClassNames} from './staticData';
export const headerData = {
  headerTimer: 'NN',
  lives: ['empty', 'full', 'full']
};

export const gameData = {
  level: 0,
  lives: 3,
  stats: [],
  time: 0,
  points: 0
};

export let gameLevels = [
  {
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
        ]
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
        ]
      }
    ],
    time: 0,
  },
  {
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
        ]
      }
    ],
    time: 0
  },
  {
    gameTask: 'Найдите рисунок среди изображений',
    gameOptions: [
      {
        gamePic: 'http://placehold.it/304x455',
        gameAnswers: []
      },
      {
        gamePic: 'http://placehold.it/304x455',
        gameAnswers: []
      },
      {
        gamePic: 'http://placehold.it/304x455',
        gameAnswers: []
      }
    ],
    time: 0
  }
];


export const ANSWER_TIME = {
  TOTAL: 30,
  FAST: 10,
  SLOW: 20
};

export let allGameStats = [
  [
    statsClassNames.wrong,
    statsClassNames.slow,
    statsClassNames.fast,
    statsClassNames.correct,
    statsClassNames.unknown,
    statsClassNames.unknown,
    statsClassNames.unknown,
    statsClassNames.unknown,
    statsClassNames.unknown,
    statsClassNames.unknown
  ],

  [
    statsClassNames.wrong,
    statsClassNames.slow,
    statsClassNames.fast,
    statsClassNames.correct,
    statsClassNames.wrong,
    statsClassNames.unknown,
    statsClassNames.slow,
    statsClassNames.unknown,
    statsClassNames.fast,
    statsClassNames.unknown
  ],

  [
    statsClassNames.wrong,
    statsClassNames.slow,
    statsClassNames.fast,
    statsClassNames.correct,
    statsClassNames.wrong,
    statsClassNames.unknown,
    statsClassNames.slow,
    statsClassNames.unknown,
    statsClassNames.fast,
    statsClassNames.unknown
  ]
];
