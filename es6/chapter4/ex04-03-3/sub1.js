let i = 0;
for (; i < bigArrayOfNumbers.length; i++) {
  if (isPrime(bigArrayOfNumbers[i])) break;
}
if (i === bigArrayOfNumbers.length) console.log('素数はなし！');
else console.log(`最初の素数の発見位置：${i}`);
