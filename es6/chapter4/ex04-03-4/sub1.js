for (let i = 0; i < bigArrayOfNumbers.length; i++) {
  if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}

for (let i = bigArrayOfNumbers.length - 1; i >= 0; i--) {
  if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}