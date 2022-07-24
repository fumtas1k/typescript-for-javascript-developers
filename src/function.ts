export {};

function calcBmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(calcBmi(1.78, 86));
