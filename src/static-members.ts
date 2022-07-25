export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Taro";
  static lastName: string = "Suzuki";

  static get myName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static work(): string {
    return `Hey, guys! This is ${this.firstName}. Are you interested in TypeScript? Let's dive into TypeScript.`
    // return "Hey, guys! Are you interested in TypeScript? Let's dive into TypeScript."
  }
}

const me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.myName);
console.log(Me.name);
console.log(Me.work());
