let x = 0;
while (true) { // 無限ループ
  x += 0.1;
  console.log(x);
  if (x === 0.3) break;
}
console.log(`${x}で停止。`);