type A = {
  name: string;
};

type B = { age: number };

type C = A & B;

const c: C = {
  name: "cjl",
  age: 20,
};
