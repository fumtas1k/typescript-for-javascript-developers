export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "たろう",
  age: 43
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "二郎",
  age: 40
};

// friend.age++;

// Readonlyを自分で定義してみる
type YomitoriSenyo<T> = {readonly [P in keyof T]: T[P]};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
