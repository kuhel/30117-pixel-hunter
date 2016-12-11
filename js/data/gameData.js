/**
 * Created by glebvorontsov on 26/11/16.
 */
import {STATS_TYPES} from './staticData';

export const headerData = {
  headerTimer: 'NN',
  lives: ['empty', 'full', 'full']
};

export const gameData = {
  level: 0,
  lives: 3,
  stats: [
    STATS_TYPES.UNKNOWN,
    STATS_TYPES.UNKNOWN,
    STATS_TYPES.UNKNOWN,
    STATS_TYPES.UNKNOWN,
    STATS_TYPES.UNKNOWN,
    STATS_TYPES.UNKNOWN,
    STATS_TYPES.UNKNOWN,
    STATS_TYPES.UNKNOWN,
    STATS_TYPES.UNKNOWN,
    STATS_TYPES.UNKNOWN
  ],
  time: 0,
  points: 0,
  forTheWin: false
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
    answer: ['photo', 'paint', 'photo'],
    time: 0,
    stats: [
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN
    ]
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
    answer: ['photo', 'paint'],
    time: 0,
    stats: [
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN
    ]
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
    answer: 1,
    time: 0,
    stats: [
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN,
      STATS_TYPES.UNKNOWN
    ]
  }
];
