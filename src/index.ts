export const randomPick = <T>(arr: T[], quantity: number): [T[], T[]] => {
  if (arr.length < quantity) {
    throw new Error();
  }
  let newArr: T[] = [];
  let copyArr: T[] = arr.concat();
  while (newArr.length < quantity) {
    const randomNum: number = Math.floor(Math.random() * copyArr.length);
    newArr.push(copyArr[randomNum]);
    copyArr.splice(randomNum, 1);
  }
  return [newArr, copyArr];
};

export const shuffle = <T>(arr: T[]): T[] => {
  let newArr: T[] = [];
  let copyArr: T[] = arr.concat();
  while (copyArr.length) {
    const randomNum: number = Math.floor(Math.random() * copyArr.length);
    newArr.push(copyArr[randomNum]);
    copyArr.splice(randomNum, 1);
  }
  return newArr;
};

const fn = (n: number) => {
  return n * 2;
};
