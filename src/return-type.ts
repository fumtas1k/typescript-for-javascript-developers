export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(1, 2, add(1, 2));

type ReturnTypeFormAdd = ReturnType<typeof add>;
