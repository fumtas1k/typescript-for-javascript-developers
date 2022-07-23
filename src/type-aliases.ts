export {};

type Mojiretsu = string;

let str: Mojiretsu = "文字列";

const example1 = {
  name: "Ham",
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "Ham",
  age: 43,
};

type Profile2 = typeof example1;


console.log(str);
