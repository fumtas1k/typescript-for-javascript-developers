export {};

type Profile = {
  name: string;
  age: number;
}

type PartialProfile = Partial<Profile>;

// Partialと同じ機能を作ることができる
type Optional<T> = { [P in keyof T]?: T[P]};
type OptionalProfile = Optional<Profile>;

// さらにnullも許容する型を作ることもできる
type Optional2<T> = { [P in keyof T]?: T[P] | null};
type OptionalProfile2 = Optional2<Profile>;
