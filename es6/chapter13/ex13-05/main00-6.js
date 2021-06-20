let i;
for (i = 5; i >= 0; i--) {
  setTimeout(() => {
    console.log(i === 0 ? 'go!' : i);
  }, (5 - i) * 1000);
}
