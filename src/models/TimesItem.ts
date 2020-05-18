export interface TimesItem {
  stage: number;
  factor: number;
  peeked: number;
  tried: number;
  correct: number;
  wrong: number;
  passed: number;
}

export interface TimesItems {
  [k: number]: TimesItem[];
}

export const initialTimesItems: TimesItems = {};

// i = stage (1 - 12), j = factors(1 - 9)
for (let i = 1; i < 13; i++) {
  for (let j = 1; j < 10; j++) {
    initialTimesItems[i] = [];
    initialTimesItems[i].push({
      stage: i,
      factor: j,
      peeked: 0,
      tried: 0,
      correct: 0,
      wrong: 0,
      passed: 0,
    });
  }
}
