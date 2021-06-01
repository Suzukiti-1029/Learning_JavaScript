const words = ['Beachball', 'Rodeo', 'Angel',
  'Aardvark', 'Xylophone', 'November', 'Chocolate',
  'Papaya', 'Uniform', 'Joker', 'Clover', 'Bali'];
const longWords = words.reduce((a, w) => w.length > 6 ? a + ' ' + w : a, '').trim();
console.log(longWords);

const 単語リスト = [
  'ビーチボール', 'ルービックキューブ', 'ブタペスト', 'トロッコ',
  'コンゴ', 'ゴースト', 'トーラス', 'スマート', 'トンガ',
  'ガラパゴス', 'ストリート', 'トーマス', 'ストレッチ',
  'チベット', 'トキ', 'キツツキ', 'キリン',
];
const 長い単語 = 単語リスト.reduce((a, w) => w.length >= 5 ? a + ' ' + w : a, '').trim();
console.log(長い単語);
