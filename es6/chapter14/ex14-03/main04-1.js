function countdown(seconds) {
  return new Promise((onFulfilled, onRejected) => {
    const timeoutIds = [];
    for (let i = seconds; i >= 0; i--) {
      timeoutIds.push(
        setTimeout(() => {
          if (i === 13) {
            timeoutIds.forEach(clearTimeout);
            return onRejected(new Error(`${i}という数は不吉過ぎます`));
          }
          if (i > 0) console.log(`${i}...`);
          else onFulfilled(console.log('GO!'));
        },
        (seconds - i) * 1000),
      );
    }
  });
}

function launch() {
  return new Promise((onFulfilled, onRejected) => {
    console.log('発射！');
    setTimeout(() => {
      onFulfilled('周回軌道に乗った！');
    }, 2 * 1000);
  });
}

countdown(5)
  .then(launch)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(`管制塔、管制塔。トラブル発生... ${err}`);
  });
