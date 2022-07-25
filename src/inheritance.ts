export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return "I can run";
  }
}

const animal = new Animal("animal");
console.log(animal.name);
console.log(animal.run());

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    // superを記述しないとエラーになる
    super(name);
    this.speed = speed;
  }
  run():string {
    return `${super.run()} ${this.speed}km/h.`;
  }
}

const lion = new Lion("lion", 80);
console.log(lion.name);
console.log(lion.run());
