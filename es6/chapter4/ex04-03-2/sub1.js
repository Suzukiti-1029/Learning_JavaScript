let firstPrime = null;
for (let n of bigArrayOfNumbers) {
  if (isPrime(n) && firstPrime === null) firstPrime = n;
}

firstPrime = null;
for (let n of bigArrayOfNumbers) {
  if (isPrime(n) && firstPrime === null) {
    firstPrime = n;
    break;
  }
}
