export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(1, 2, add(1, 2));

type ReturnTypeFormAdd = ReturnType<typeof add>;

// <>は型定義の直後にしか書けない
// inferは条件の一部としてジェネリクス型を宣言できる
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
