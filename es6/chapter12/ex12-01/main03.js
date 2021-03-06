class FibonacciSequence {
  [Symbol.iterator]() {
    let a = 0;
    let b = 1;
    return {
      next() {
        const rval = { value: b, done: false };
        b += a;
        a = rval.value;
        return rval;
      },
    };
  }
}

const fib = new FibonacciSequence();
let i = 0;
for (const n of fib) {
  console.log(`${i + 1}: ${n}`);
  if (++i > 99) break;
}
