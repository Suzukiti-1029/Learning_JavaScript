'use strict';
const fs = require('fs');

function readFile(fileName) {
  return new Promise((onFulfilled, onRejected) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      // console.log(data);
      if (err) {
        // console.error(`readFile error: ${fileName} ${err}`);
        onRejected(err);
      }
      onFulfilled(data);
    });
  });
}

function writeFile(fileName, data) {
  return new Promise((onFulfilled, onRejected) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        // console.error(`writeFile error: ${fileName} ${err}`);
        onRejected(err);
      }
      onFulfilled('OK');
    });
  });
}

let allData = '';
readFile('a.txt')
  .then((fileData) => {
    allData += fileData;
    return readFile('b.txt');
  })
  .then((fileData) => {
    allData += fileData;
    return readFile('c.txt');
  })
  .then((fileData) => {
    allData += fileData;
    return writeFile('d.txt', allData);
  })
  .then((mes) => {
    console.log('ファイルの合体に成功しました。');
  })
  .catch((err) => {
    console.error(`エラーが起こりました: ${err}`);
  });
