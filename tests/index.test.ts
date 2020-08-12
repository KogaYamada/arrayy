import { randomPick, shuffle } from '../src/index';
import { objArray, strArray, numArray, arrArray } from './dummy';

const pick = 3;
describe('randomPickのテスト', () => {
  test('文字列の配列のテスト', () => {
    const [pickResult, notPickResult] = randomPick(strArray, pick);
    expect(pickResult).toHaveLength(pick);
    expect(notPickResult).toHaveLength(strArray.length - pick);
  });

  test('数字の配列のテスト', () => {
    const [pickResult, notPickResult] = randomPick(numArray, pick);
    expect(pickResult).toHaveLength(pick);
    expect(notPickResult).toHaveLength(numArray.length - pick);
  });

  test('二次元配列のテスト', () => {
    const [pickResult, notPickResult] = randomPick(arrArray, pick);
    expect(pickResult).toHaveLength(pick);
    expect(notPickResult).toHaveLength(arrArray.length - pick);
  });

  test('オブジェクトの配列のテスト', () => {
    const [pickResult, notPickResult] = randomPick(objArray, pick);
    expect(pickResult).toHaveLength(pick);
    expect(notPickResult).toHaveLength(objArray.length - pick);
  });
});

/** ランダムになっているかを確認する係数 */
const randomCoefficient = 0.25;
describe('shuffleのテスト', () => {
  test('文字列の配列のテスト', () => {
    /** ランダムになっているかの指標 */
    const randomIndex = Math.floor(strArray.length * randomCoefficient);
    for (let i = 0; i < 10; i++) {
      /** ランダムできていない(要素のindex番号が変わっていない)数 */
      const result = shuffle(strArray).filter((el, index) => {
        return el === strArray[index];
      }).length;
      expect(result).toBeLessThanOrEqual(randomIndex);
    }
  });

  test('数字の配列のテスト', () => {
    /** ランダムになっているかの指標 */
    const randomIndex = Math.floor(numArray.length * randomCoefficient);
    for (let i = 0; i < 10; i++) {
      /** ランダムできていない(要素のindex番号が変わっていない)数 */
      const result = shuffle(numArray).filter((el, index) => {
        return el === numArray[index];
      }).length;
      expect(result).toBeLessThanOrEqual(randomIndex);
    }
  });

  test('二次元配列のテスト', () => {
    /** ランダムになっているかの指標 */
    const randomIndex = Math.floor(arrArray.length * randomCoefficient);
    for (let i = 0; i < 10; i++) {
      /** ランダムできていない(要素のindex番号が変わっていない)数 */
      const result = shuffle(arrArray).filter((el, index) => {
        return el === arrArray[index];
      }).length;
      expect(result).toBeLessThanOrEqual(randomIndex);
    }
  });

  test('オブジェクトの配列のテスト', () => {
    /** ランダムになっているかの指標 */
    const randomIndex = Math.floor(objArray.length * randomCoefficient);
    for (let i = 0; i < 10; i++) {
      /** ランダムできていない(要素のindex番号が変わっていない)数 */
      const result = shuffle(objArray).filter((el, index) => {
        return el === objArray[index];
      }).length;
      expect(result).toBeLessThanOrEqual(randomIndex);
    }
  });
});
