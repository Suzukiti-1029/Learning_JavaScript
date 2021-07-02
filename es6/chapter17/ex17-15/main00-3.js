let html1 = `<a class='abc' href="/www.xx.yyy">サイトxx</a>`;
let html2 = `<a class='abc' href='/www.xx.yyy'>サイトxx</a>`;

r = html1.replace(/<a .*?(href=(["']).*?\2).*?>/, '<a $1>');
console.log(r);
r = html2.replace(/<a .*?(href=(["']).*?\2).*?>/, '<a $1>');
console.log(r);
