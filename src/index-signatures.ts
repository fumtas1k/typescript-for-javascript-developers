export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// How to write index signatures
// { [index: typeForIndex]: typeForValue }
// let profile: { name?: string} = {};
// let profile: { [index: string]: string | number} = {};
let profile: Profile = {name: "たろう", underTwenty: false};

profile.age = 43;
profile.nationality = "JPN";

console.log(profile.name);
