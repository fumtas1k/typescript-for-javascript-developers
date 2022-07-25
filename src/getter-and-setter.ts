export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できない
//   * 参照できる
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で変更できる
//   * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string {
    return this._owner;
  }

  set secretNumber(newNumber: number) {
    this._secretNumber = newNumber;
  }

  debugPrint(): string {
    return `name: ${this._owner}, secretNumber: ${this._secretNumber}`;
  }
}

const card = new MyNumberCard("たろう", 123456789);
console.log(card.owner);
// card.owner = "じろう";
console.log(card.debugPrint());
console.log(card.secretNumber);
// console.log(card._secretNumber);
card.secretNumber = 987654321;
console.log(card.debugPrint());
