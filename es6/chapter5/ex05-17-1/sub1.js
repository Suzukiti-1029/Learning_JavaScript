let label, n = 3;
if(n % 2 === 0) {
  label = '偶数';
} else {
  label = '奇数';
}
console.log(label);

n = 4;
label = n % 2 === 0 ? '偶数' : '奇数';
console.log(label);