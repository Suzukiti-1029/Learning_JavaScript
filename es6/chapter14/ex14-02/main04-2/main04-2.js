const fs = require('fs');

function readSketchyFile() {
  try {
    fs.readFile('does_not_exist.txt', (err, data) => {
      if (err) throw err;
      else console.log('無事読み込めました');
    });
  } catch (err) {
    console.log('警告：マイナーな問題が発生。実行を継続します');
  }
}

readSketchyFile();
