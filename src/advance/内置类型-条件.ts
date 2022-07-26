// Exclude
type T = "a" | "b" | "c";
type U = "a" | "b";

type MyExclude<T, U> = T extends U ? never : T;
type R = Exclude<T, U>; // 'c'

// T 排除掉 'a'
type R1 = Exclude<T, "a">; // 'b' | 'c'
// T 包含 U的部分
type R2 = Extract<T, U>; // 'a' | 'b'

type MyExtract<T, U> = T extends U ? T : never;

type MyNonNullable<T> = T extends null | undefined ? never : T;

// ReturnType Parameters
function getUser(a: number, b: string) {
  return {
    name: "张三",
    age: 10,
  };
  // return [1, 2, 3];
}
type GetUserType = typeof getUser;

type User = ReturnType<GetUserType>; // {name: string, age: number}
// const user: User = getUser();
type Paramters = Parameters<GetUserType>; // 返回函数参数的元祖类型 [a: number, b: string]

// ReturnType 获取函数的返回类型  infer R 表示待推断的函数返回值类型
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T;

type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

type MyReturnParams<T> = T extends (...args: infer P) => infer R ? P | R : any;

type GetReturnParams = MyReturnParams<GetUserType>;

const zz: GetReturnParams = [1, "h"];

// 获取构造函数的实例类型
class getConstructor {
  constructor(public name: string) {}
  getName() {
    return this.name;
  }
}
// 获取一个构造函数的参数类型的元组
type ClassParams = ConstructorParameters<typeof getConstructor>; // [string]

type ClassInstanceType = InstanceType<typeof getConstructor>;

const yy: ClassInstanceType = {
  name: "张三",
  getName() {
    return this.name;
  },
};

type MyConstructorParameters<T> = T extends new (...args: infer P) => any
  ? P
  : never;
type MyInstanceType<T> = T extends new (...args: any[]) => any ? T : never;

// infer 案例 tuple转为Union
// type TupleToUnion<T> = T extends [infer U, ...any[]] ? U : never;
type Tuple = [string, number, boolean];

type TupleToUnion<T> = T extends Array<infer E> ? E : never;

type Union = TupleToUnion<Tuple>; // string | number | boolean

// Union 转为 Intersection

type T1 = { name: string };
type T2 = { age: number };

// type T3 = T1 | T2;

type UnionToIntersection<T> = T extends {
  a: (x: infer U) => void;
  b: (x: infer U) => void;
}
  ? U
  : never;

type Inter = UnionToIntersection<{ a: (x: T1) => void; b: (x: T2) => void }>;

const bb: Inter = {
  name: "张三",
  age: 20,
};

export {};
