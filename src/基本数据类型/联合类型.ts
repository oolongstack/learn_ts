let numOrStr: string | number;
numOrStr = "str";
console.log(numOrStr.includes("m")); //false

type requestType = "GET" | "POST" | "DELETE" | "PUT";

function test(type: requestType) {}
test("POST");

let a: number | string;
// a as any as boolean;
(a as any as boolean) = false;

console.log(a, "a");

export {};
