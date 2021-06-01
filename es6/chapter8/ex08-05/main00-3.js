const words = ['Beachball', 'Rodeo', 'Angel',
  'Aardvark', 'Xylophone', 'November', 'Chocolate',
  'Papaya', 'Uniform', 'Joker', 'Clover', 'Bali'];
const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]])
    a[x[0]] = [];
  a[x[0]].push(x);
  // console.log(a[x[0]]); 途中経過をみるにはこれを有効に
  return a; }, {});
console.log(alphabetical);

const 単語リスト = [
  'ビーチボール', 'ルービックキューブ', 'ブタペスト', 'トロッコ',
  'コンゴ', 'ゴースト', 'トーラス', 'スマート', 'トンガ',
  'ガラパゴス', 'ストリート', 'トーマス', 'ストレッチ',
  'チベット', 'トキ', 'キツツキ', 'キリン',
];
const 先頭文字で分類したもの = 単語リスト.reduce((a, x) => {
  if (!a[x[0]]) a[x[0]] = [];
  a[x[0]].push(x);
  return a;}, {});
console.log(先頭文字で分類したもの);
