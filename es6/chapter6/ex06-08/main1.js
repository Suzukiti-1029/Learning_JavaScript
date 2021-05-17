// 'use strict'; /* これを有効にすると「greet()」がエラーになる
const bruce = { 名前: "ブルース" };
const madeline = { 名前: "マデライン" };

/* この関数はオブジェクトに関連していないがcallを使えばthisが使えるようになる */
function greet() {
  return `私は${this.名前}よ！`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));
