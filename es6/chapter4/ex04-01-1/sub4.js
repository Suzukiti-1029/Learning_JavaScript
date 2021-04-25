// m以上n以下のランダムな整数を返す
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// サイコロの目のどれかひとつを表す文字列をランダムに返す
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"] [rand(0, 5)];
}