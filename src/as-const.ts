export {};

let name = "たろう";
name = "taro";

let nickname = "taro" as const;
nickname = "taro";
// nickname = "たろう";

// as constと書くだけで、メンバーがreadonlyになる。
// ネスとしていてもreadonlyになるらしい。
let profile = {
  name: "たろう",
  height: 170,
} as const;

// profile.name = "taro";
// profile.height = 190;

console.log({ profile });
