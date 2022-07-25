export {};

// 抽象クラス
abstract class Animal {
  // 継承では必ずオーバーライドが必要
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "rear";
  }
}

// class Tiger extends Animal {
//   cry() {
//     super.cry();
//   }
// }
