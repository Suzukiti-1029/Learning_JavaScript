const sam1 = {
  name: 'Sam',
  age: 4,
};
console.log(sam1);

const sam2 = { name: 'Sam', age: 4 };
console.log(sam2);

console.log(sam1.name === sam2.name);
console.log(sam1.age === sam2.age);
console.log(sam1 === sam2);

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
console.log(sam3);

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
console.log(タマ);