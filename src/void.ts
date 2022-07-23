export {};

function returnNothing(): void {
  console.log("I don't return anything");
}

function returnNothing2(): undefined {
  console.log("I don't return anything");
  return;
}

console.log(returnNothing());
returnNothing2();
