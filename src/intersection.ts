export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  // throwingSpeed: 154,
  battingAverage: 0.367,
}

const OhtaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
}

console.log({ DaimajinSasaki });
console.log({ OchiaiHiromitsu });
console.log({ OhtaniShohei });
