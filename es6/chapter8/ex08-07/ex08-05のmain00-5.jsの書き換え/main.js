const words = ['Beachball', 'Rodeo', 'Angel',
  'Aardvark', 'Xylophone', 'November', 'Chocolate',
  'Papaya', 'Uniform', 'Joker', 'Clover', 'Bali'];

const 単語リスト = [
  'ビーチボール', 'ルービックキューブ', 'ブタペスト', 'トロッコ',
  'コンゴ', 'ゴースト', 'トーラス', 'スマート', 'トンガ',
  'ガラパゴス', 'ストリート', 'トーマス', 'ストレッチ',
  'チベット', 'トキ', 'キツツキ', 'キリン',
];

console.log(words.filter(x => x.length > 6).join(' '))
console.log(単語リスト.filter(x => x.length >= 5).join(' '));