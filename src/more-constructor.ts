export {};

class Person {
  // public name: string;
  // protected age: number;

  // 引数にpublic, private, protectedをつけることでメンバ変数を宣言できる
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }

  get profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }

  isOlderThan(other: Person): boolean {
    return this.age > other.age
  }
}
const taro = new Person("taro", 30);
console.log(taro.name);
console.log(taro.profile);
// console.log(taro.age);

const hanako = new Person("hanako", 40);
console.log(hanako.isOlderThan(taro));
