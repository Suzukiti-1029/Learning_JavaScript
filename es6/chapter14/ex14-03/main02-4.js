function countdown(seconds) {
  return new Promise((onFulfilled, onRejected) => {
    const timeoutIds = [];
    for (let i = seconds; i >= 0; i--) {
      timeoutIds.push(
        setTimeout(() => {
          if (i === 13) {
            timeoutIds.forEach(clearTimeout);
            onRejected(new Error(`${i}という数は不吉過ぎます`));
          } else if (i > 0) {
            console.log(`${i}...`);
          } else {
            console.log('GO!');
            onFulfilled();
          }
        },
        (seconds - i) * 1000),
      );
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
