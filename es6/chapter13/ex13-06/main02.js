function sum(arr, f) {
  if (typeof f !== 'function') f = x => x;

  return arr.reduce((a, x) => a += f(x), 0);
}
console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3], x => x ** 2));
console.log(sum([1, 2, 3], x => x ** 3));
