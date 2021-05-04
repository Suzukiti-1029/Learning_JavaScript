bigArrayOfNumbers = [i for i in range(1, 101)]

i = len(bigArrayOfNumbers) - 1
while i >= 0:
  if bigArrayOfNumbers[i] % 2 == 0:
    bigArrayOfNumbers.pop(i)
  i -= 1

print(bigArrayOfNumbers)
'''



for (let i = 0; i < bigArrayOfNumbers.length; i++) {
  if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}
'''
