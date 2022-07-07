function foo(x: string, y: string): string {
  return x + y;
}

foo("a", "b");

type Ifn = (x: string, y: string) => string;

const bar: Ifn = (a, b) => {
  return a + b;
};

function foo1(x: number, y: number = 1): number {
  return x + y;
}

// console.log(foo1(1));

// 函数重载
function toArray(val: number): number[];
function toArray(val: string): string[];
// console.log(toArray);
function toArray(val: string | number) {
  if (typeof val === "number") {
    return [val];
  } else {
    return val.split("");
  }
}

export {};
