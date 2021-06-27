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
    if (Math.random() < 0.5) return;
    console.log('発射!');
    setTimeout(() => {
      onFulfilled('周回軌道に乗った!');
    }, 2 * 1000);
  });
}

function addTimeout(fn, period) {
  if (period === undefined) period = 1000;
  return function (...args) {
    return new Promise((onFulfilled, onRejected) => {
      const timeoutId = setTimeout(onRejected, period, new Error('プロミス タイムアウト'));
      fn(...args)
        .then((...args) => {
          clearTimeout(timeoutId);
          onFulfilled(...args);
        })
        .catch((...args) => {
          clearTimeout(timeoutId);
          onRejected(...args);
        });
    });
  };
}

countdown(3)
  .then(addTimeout(launch, 4 * 1000))
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(`管制塔、管制塔。トラブル発生... ${err.message}`);
  });
