function countdown(seconds) {
  return new Promise((onFulfilled, onRejected) => {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(() => {
        if (i === 13) return onRejected(new Error('この数は不吉過ぎます'));
        if (i > 0) console.log(`${i}...`);
        else onFulfilled(console.log('GO!'));
      }, (seconds - i) * 1000);
    }
  });
}

countdown(15).then(
  () => {
    console.log('カウントダウン成功');
  },
  (err) => {
    console.log(`カウントダウンでエラーが起こった: ${err.message}`);
  },
);
