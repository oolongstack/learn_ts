const n: string = "hhh";
const age: number = 22;

// 类型推导
let num = 1;
// num = "lll";

// 包装类型
const num1: Number = new Number(1);

const arr: number[] = [1, 2, 3, 4];

// 并集数组
const arr1: (string | number | symbol)[] = [
  1,
  2,
  3,
  4,
  "a",
  "b",
  "c",
  Symbol("a"),
];
const res1 = arr1.pop();
// 元组 数据必须是固定类型的
const arr2: [number, string, any, symbol, null, undefined] = [
  1,
  "a",
  {},
  Symbol("a"),
  null,
  undefined,
];
const res2 = arr2.pop();
export {};
