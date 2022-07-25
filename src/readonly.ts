export {};

class VisaCard {
  // readonly owner: string;

  // publicは省略可能だが記載した方が良いのでは
  constructor(public readonly owner: string) {
    // this.owner = owner;
  }
}

const myVisaCard = new VisaCard("たろう");
console.log(myVisaCard.owner);
// myVisaCard.owner = "じろう";
