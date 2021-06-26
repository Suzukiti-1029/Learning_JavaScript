function countdown(seconds) {
  return new Promise((onFulfilled, onRejected) => {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(() => {
        if (i > 0) console.log(`${i}...`);
        else onFulfilled(console.log('GO!'));
      }, (seconds - i) * 1000);
    }
  });
}

const p = countdown(5);
p.then(() => {
  console.log('カウントダウン成功');
});
p.catch((err) => {
  console.log(`カウントダウンでエラーが起こった: ${err.message}`);
});
