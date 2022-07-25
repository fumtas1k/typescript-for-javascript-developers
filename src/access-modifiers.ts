export {};

class Person {
  public name: string;
  // privateはclass外からもサブクラスでは呼び出せない
  private age: number;
  // protectedはclass外からは呼び出せないがサブクラスからも呼び出せる
  protected nationality: string;

  // constructorの戻り値の型は記述しない
  constructor(name: string, age: number, nationality: string = "JPN") {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  get profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }

  // privateはclass内であれば、他のインスタンスも呼び出せる
  older(other: Person): boolean {
    return this.age < other.age;
  }
}
const taro = new Person("taro", 30);
console.log(taro.profile);
console.log(taro.name);
// console.log(taro.age);

const hanako = new Person("hanako", 45, "USA");
console.log(taro.older(hanako));

class Android extends Person {
  constructor(name: string, age: number, nationality: string = "USA") {
    super(name, age, nationality);
  }

  get profile(): string {
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

const android = new Android("android", 1);
console.log(android.profile);
