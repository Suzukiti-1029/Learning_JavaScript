const 入力 = '８月３０日ＭＡＺ昨日四月三〇日。';
let マッチ = 入力.match(/[０-９]/g);
console.log(マッチ);
マッチ = 入力.match(/[０-９]/);
console.log(マッチ);

マッチ = 入力.match(/[Ａ-Ｚ]/g);
console.log(マッチ);

マッチ = 入力.match(/[〇一二三四五六七八九十]/g);
console.log(マッチ);

マッチ = 入力.match(/[年月日]/g);
console.log(マッチ);
