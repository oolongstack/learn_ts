interface Fish {
  name1: string;
}
interface Water {
  name2: string;
}
interface Bird {
  name3: string;
}
interface Sky {
  name4: string;
}

type Conditional<T> = T extends Fish ? Water : T extends Bird ? Sky : T;

// x 属于 Water 类型
const x: Conditional<Fish> = {
  name2: "fff",
};

// 条件类型的分发
const y: Conditional<Bird | Fish> = {
  name4: "fff",
};

// 找出T中不包含U的部分
type Diff<T, U> = T extends U ? never : T;

type R = Diff<"a" | "b" | "c", "a" | "c">;

type R1 = never | "b" | never;

// R => 'b' | 'c'
const w: R = "b";

export {};
