for (let temp, i = 0, j = 1; j < 300; temp = i, i = j, j = i + temp) {
  console.log(j);
}

// for (;;) console.log("永遠に繰り返し！");
