export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type simpleProfile = Pick<DetailedProfile, "name" | "weight">;
type smallProfile = Omit<DetailedProfile, "height">;

// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type MyOmit = Pick<DetailedProfile, Exclude<"name" | "height" | "weight", "height">>;
// type MySmallProfile = MyOmit<DetailedProfile, "height">;
type MySmallProfile = MyOmit;
