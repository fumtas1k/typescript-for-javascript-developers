export {};

namespace Japanese {
  export namespace Tokyo {
    // namespace外からもアクセスできるようにするためにはexportの記述が必要
    export class Person {
      constructor(public name: string){}
    }
  }
  export namespace Osaka {
    // namespace外からもアクセスできるようにするためにはexportの記述が必要
    export class Person {
      constructor(public name: string, public age: number = 20){}
    }
  }
}

namespace English {
  export class Person {
    constructor(public firstName: string, public middleName: string, public lastName: string){};

    get fullName(): string {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
  }
}

const taro = new Japanese.Tokyo.Person("taro");
console.log(taro.name);
console.log(taro);

const jiro = new Japanese.Osaka.Person("jiro");
console.log(jiro.name);
console.log(jiro);

const alice = new English.Person("alice", "in the", "world");
console.log(alice);
console.log(alice.fullName);
