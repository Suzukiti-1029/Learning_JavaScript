const sam3 = {
  name: 'Sam',
  classification: {
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: 'F. catus',
  },
};

const タマ = {
  名前: 'タマ',
  分類: {
    界: '動物界',
    門: '脊索動物門',
    網: '哺乳網',
    目: 'ネコ目',
    科: 'ネコ科',
    亜科: 'ネコ亜科',
    属: 'ネコ属',
    種: 'ネコ',
  },
};

sam3.speak = function() { return "Meow!"; };
タマ.鳴く = function() { return "ニャーゴ"; };

console.log(sam3.speak());
console.log(タマ.鳴く());

delete sam3.classification;
delete sam3.speak;
console.log(sam3);

delete タマ.分類;
delete タマ.鳴く;
console.log(タマ);