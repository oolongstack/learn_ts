// 普通枚举 异构枚举 常量枚举

// 普通枚举
enum ROLE {
  USER,
  ADMIN,
  MANNAGER,
}

console.log(ROLE.USER); // 0
console.log(ROLE[0], typeof ROLE[0]); // USER string

// 异构枚举
enum ROLE1 {
  USER = "USER",
  ADMIN = 5,
  MANNAGER,
}

// 常量枚举 不会将该枚举编译成对象 所以不支持返取
const enum ROLE2 {
  USER,
  ADMIN,
  MANAGER,
}

console.log(ROLE2.USER); // 0
