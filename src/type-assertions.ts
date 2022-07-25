export {};

let name: any = "たろう";
// let length = name.length as number;
let length = (name as string).length;
// 以下は推奨されていない。reactに似た記法があるらしい
// let length = (<string>name).length;
console.log(length);
// length = "foo";
// console.log(length);
