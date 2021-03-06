const fs = require('fs');

function writeFile(fileName, data) {
  return new Promise((onFulfilled, onRejected) => {
    fs.writeFile(fileName, data, (err) => {
      err ? onRejected(err) : onFulfilled('OK');
    });
  });
}

function readFile(fileName) {
  return new Promise((onFulfilled, onRejected) => {
    const period = Math.random() * 1000;
    console.log(`${fileName}: ${period}`);
    setTimeout(() => {
      fs.readFile(fileName, 'utf8', (err, data) => {
        err ? onRejected(err) : onFulfilled([fileName, data]);
      });
    }, period);
  });
}

let selected;
Promise.race([readFile('a.txt'), readFile('b.txt'), readFile('c.txt')])
  .then((results) => {
    console.log(results);
    selected = results[0];
    return writeFile('d.txt', results[1]);
  })
  .then((mes) => {
    console.log(`ファイル${selected}の内容が書き込まれました。\n---`);
  })
  .catch((err) => {
    console.error(`エラーが起こりました: ${err}`);
  });
