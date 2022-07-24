export {};

// シグネチャー
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  return typeof value === "number" ? value * 2 : value.repeat(2);
  // return throw "numberでもstringでもないので、引数の型を確認してください。";
  // return value * 2 || value.repeat(2);
};

// function double(value: string): string {
//   return value.repeat(2);
// }

console.log(double(100));
console.log(double("Go "));
// console.log(double(true));
