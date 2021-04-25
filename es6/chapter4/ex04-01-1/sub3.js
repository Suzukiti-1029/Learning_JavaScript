let funds = 50;

// これは真似しないでください
if (funds > 1) {
  console.log("お金が残っている。");
  console.log("ということは、まだプレイが続く。");
} else
  console.log("破産した！終わり。");

// これも悪い例です
if(funds > 1)
  console.log("お金が残っている。ということは、まだプレイが続く。");
else {
  console.log("破産した！");
  console.log("終わり。");
}

// たとえばすぐ上の例は次のようにしたほうがよい
if(funds > 1) {
  console.log("お金が残っている。ということは、まだプレイが続く。");
} else {
  console.log("破産した！");
  console.log("終わり。");
}