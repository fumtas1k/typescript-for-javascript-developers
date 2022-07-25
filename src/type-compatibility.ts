import { type } from "os";

export {};

let fooCompatible: any;
let barCompatible: string = "TypeScript";

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(fooCompatible);
console.log(typeof fooCompatible);
fooCompatible = 1;
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = "string";
fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 2022 = 2022;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  // name: string;
}

class Person {
  constructor(public age: number) {}
}

// 代入できるかどうかは型が同じかとは違う。メンバーが定義と同じかどうか
// 構造的部分型
let me: Animal;
me = new Person(15);
console.log({ me });
