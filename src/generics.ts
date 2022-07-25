export {};

// const echo = (arg: number): number => {
//   return arg;
// }

// const echo = (arg: string): string => {
//   return arg;
// }

// T: 型引数
const echo = <T>(arg: T): T => {
  return arg;
}

console.log(echo<string>("こんにちは!"));
console.log(echo<number>(100));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

const mirror = new Mirror<number>(123);
console.log(mirror.echo());
const mirror2 = new Mirror<string>("Hello, generics!");
console.log(mirror2.echo());
