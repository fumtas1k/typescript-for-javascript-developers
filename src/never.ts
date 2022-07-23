export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("困ったな");
  console.log(result);
} catch (e) {
  console.log({ e });
} finally {
  console.log("終了");
}

let foo: void = undefined;
let bar: never = error("only me!");
