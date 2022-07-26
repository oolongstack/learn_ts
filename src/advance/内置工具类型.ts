interface A {
  a: string;
  b: number;
  c: boolean;
}

type MyPartial<T> = {
  readonly [key in keyof T]?: T[key];
};
const x: MyPartial<A> = {
  a: "a",
};
//--------------------------------------------------------------------------------

interface Company {
  id: number;
  name: string;
}
interface Person {
  id: number;
  name: string;
  company: Company;
}
type PartialPerson = Partial<Person>;

// 深度Partial
type MyDeepPartial<T> = {
  [U in keyof T]?: T[U] extends object ? MyDeepPartial<T[U]> : T[U];
};

const p: MyDeepPartial<Person> = {
  id: 1,
  name: "a",
  company: {},
};

// 将可选类型变为必选

interface Person1 {
  name: string;
  age: number;
  gender?: "male" | "female";
}
type Required<T> = {
  [key in keyof T]-?: T[key];
};
const p1: Required<Person1> = {
  name: "s",
  age: 20,
  gender: "male",
};

//------------------------------
// Pick 减少属性
interface Person2 {
  n: string;
  a: number;
  gender: "male" | "female";
}

// 保留 a n
type Picked = Pick<Person2, "a" | "n">;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
const aaa: Picked = {
  n: "n",
  a: 20,
};

namespace namespaceA {
  // Record
  function map() {}
}
export {};
