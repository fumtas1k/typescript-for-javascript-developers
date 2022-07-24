export {};

const reducer: (accu: number, curr: number) => number = (
  accu: number,
  curr: number
): number => {
  console.log({ accu, curr });
  return accu + curr
};


const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
