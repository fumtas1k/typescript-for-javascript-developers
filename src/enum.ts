export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
};

console.log({ Months });
console.log(Months.January);

enum COLORS {
  RED = "#FF000",
  WHITE = "#FFFFFF",
  GREEN = "#008000",
  BLUE = "#0000FF",
  // YELLOW = "#FFFF00",
  BLACK = "#000000",
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = "#FFFF00",
  GRAY = "#808080",
}

console.log(COLORS.YELLOW);
