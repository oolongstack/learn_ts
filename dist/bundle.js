(function () {
  'use strict';

  // 普通枚举 异构枚举 常量枚举
  // 普通枚举
  var ROLE;
  (function (ROLE) {
      ROLE[ROLE["USER"] = 0] = "USER";
      ROLE[ROLE["ADMIN"] = 1] = "ADMIN";
      ROLE[ROLE["MANNAGER"] = 2] = "MANNAGER";
  })(ROLE || (ROLE = {}));
  console.log(ROLE.USER); // 0
  console.log(ROLE[0], typeof ROLE[0]); // USER string
  // 异构枚举
  var ROLE1;
  (function (ROLE1) {
      ROLE1["USER"] = "USER";
      ROLE1[ROLE1["ADMIN"] = 5] = "ADMIN";
      ROLE1[ROLE1["MANNAGER"] = 6] = "MANNAGER";
  })(ROLE1 || (ROLE1 = {}));
  console.log(0 /* ROLE2.USER */); // 0

  let numOrStr;
  numOrStr = "str";
  console.log(numOrStr.includes("m")); //false
  let a;
  // a as any as boolean;
  a = false;
  console.log(a, "a");

  class Pointer {
      constructor(x = 10, y = 20) {
          this.x = x;
          this.y = y;
      }
      draw() {
          return this.x * this.y;
      }
  }
  Pointer.h = "pointer";
  const p = new Pointer(100, 200);
  console.log(p.x, p.y);
  console.log(p.draw());

})();
//# sourceMappingURL=bundle.js.map
