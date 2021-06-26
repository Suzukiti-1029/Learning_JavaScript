function asyncFunc(paramsAsyncFunc) {
  return new Promise(
    (onFulfilled, onRejected) => {
      // 非同期処理の記述
      // ...
      onFulfilled(/* paramsOnFulfilled */);
      // ...
      onRejected(/* paramsOnRejected */);
    },
  );
}

let paramsAsyncFunc;
let paramsPromise;

asyncFunc(paramsAsyncFunc).then(
  (paramsOnFulfilled) => {
  },
  (paramsOnRejected) => {
  },
);

asyncFunc(paramsPromise)
  .then((paramsOnFulfilled) => {
  })
  .catch((paramsOnRejected) => {
  });
