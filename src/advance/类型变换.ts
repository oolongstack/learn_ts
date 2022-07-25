// 类型推断
let a = 1; // a被推断为number
// a = "d"; // 报错，不能将类型“"d"”分配给类型“number”

// function add(a: number, b: number): number
function add(a: number, b: number) {
  return a + b;
}
