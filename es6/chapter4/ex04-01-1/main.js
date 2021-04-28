// m以上n以下のランダムな整数を返す
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// サイコロの目のどれかひとつを表す文字列をランダムに返す
function randFace() {
  return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}

let funds = 50;

while (funds < 100) {
  funds = 50;
  let round = 0;


  while (funds > 0 && funds < 100) {
    round++;
    console.log(`第${round}ラウンド`);
    console.log(`　手持ち資金：${funds}`);

    // 賭ける
    const bets = { crown: 0, anchor: 0, heart: 0,
                  spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);
    if(totalBet === 7) {
      totalBet = funds;
      bets.heart = totalBet;
    } else {
      let remaining = totalBet;
      do {
        let bet = rand(1, remaining);
        let face = randFace();
        bets[face] = bets[face] + bet;
        remaining = remaining - bet;
      } while (remaining > 0);
    }
    funds = funds - totalBet;
    console.log(`　掛け金：${totalBet}(`
          + Object.keys(bets).map(face => `${face}: ${bets[face]}`).join(', ')
          + ')');

    // サイコロを振る
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
      hand.push(randFace());
    }
    console.log(`　出目：${hand.join(', ')}`);

    // 払戻金をもらう
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
      let face = hand[die];
      if (bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`　払戻金：${winnings}`);
  }
  console.log(`　残金：${funds}`);
}

if (100 <= funds) console.log('意気揚々と船に戻る。\n');
else console.log('トボトボと船に帰る。\n');
