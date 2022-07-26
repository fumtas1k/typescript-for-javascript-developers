import { type } from "os";

export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// オプショナルなものを作りたくなった場合
// type Profile2 = {
//   name?: string;
//   age?: number;
// };

// オプショナルなものを作りたくなった場合
type PrtialType = Partial<Profile>;

// 全てが必須なものを作りたくなった場合
type RequiredType = Required<Profile>;
