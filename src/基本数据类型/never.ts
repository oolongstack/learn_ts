// 不可达

// 永远不可达的判断
function setVal(val: string) {
  if (typeof val === "string") {
    // console.log(val);
  } else {
    // 永远走不到这里
    val; // never
  }
}
