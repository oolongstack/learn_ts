// 用来表达复杂的类型
type Cart<T> = { list: T[] } | T[];

const c1: Cart<number> = { list: [1, 2, 3] };
const c2: Cart<string> = ["a", "b", "c"];
