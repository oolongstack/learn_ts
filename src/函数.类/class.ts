class Pointer {
  static h = "pointer";
  constructor(public x: number = 10, public y: number = 20) {}
  draw() {
    return this.x * this.y;
  }
}
const p = new Pointer(100, 200);
console.log(p.x, p.y);
console.log(p.draw());

export {};
