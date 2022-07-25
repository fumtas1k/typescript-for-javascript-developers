export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
const taro = new Person("taro", 30);
console.log(taro.profile);
const hanako = new Person("hanako", 20);
console.log(hanako.profile);
