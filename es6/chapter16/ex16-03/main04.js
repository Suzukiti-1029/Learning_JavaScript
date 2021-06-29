// [0, 1) -> Math.random()
console.log(Math.random());
// [x, y) -> x + (y - x) * Math.random()
console.log(10.1 + (99.9 - 10.1) * Math.random());
// [m, n)の整数 -> m + Math.floor((n - m) * Math.random())
console.log(100 + Math.floor((1000 - 100) * Math.random()));
// [m, n]の整数 -> m + Math.floor((n - m + 1) * Math.random())
console.log(1 + Math.floor((10 - 1 + 1) * Math.random()));
