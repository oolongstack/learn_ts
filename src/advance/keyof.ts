interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}
// 批量将 Person中的属性都变为（可选 readonly等等）(Partial源码)
type PartialPerson = {
  readonly [key in keyof Person]?: Person[key];
};
// 内置类型 Partial
type PartialOrigin = Partial<Person>;

const y: PartialOrigin = {
  name: "cjl",
};
const x: PartialPerson = {
  name: "cjl",
};

// ------------------------------------------------------------

type Animal = {
  height: number;
  weight: number;
};

type Bird = {
  readonly [key in keyof Animal]?: Animal[key];
};

const bird: Bird = {};
export {};
