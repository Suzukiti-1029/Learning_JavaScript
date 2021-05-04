while (funds > 1 && funds < 100) {
  let totalBet = rand(1, funds);
  if (totalBet === 13) {
    console.log('不吉だ...。今回はパス...');
  } else {
  // プレイする...
  }
}

while (funds > 1 && funds < 100) {
  let totalBet = rand(1, funds);
  if (totalBet === 13) {
    console.log('不吉だ...。今回はパス...');
    continue;
  }
  // プレイする...
}
