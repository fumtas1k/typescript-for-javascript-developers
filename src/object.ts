export {};

let profile1: object = {name: "Ham"};
profile1 = {birthYear: 1976};

let profile2: {name: string} = {name: "Ham"};
// profile2 = {birthYear: 1976};
profile2 = {name: "HHHH"};

console.log({ profile1 });
console.log({ profile2 });
