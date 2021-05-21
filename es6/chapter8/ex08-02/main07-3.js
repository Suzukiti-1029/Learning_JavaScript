let arr = [{ name: 'Suzanne' }, {name: 'Jim' },
              { name: 'Trevor' }, { name: 'Amanda' }];
console.log(arr);
arr.sort((a, b) => {
  let nameA = a.name.toUpperCase(); // 大文字と小文字を無視する
  let nameB = b.name.toUpperCase(); // 大文字と小文字を無視する
  if (nameA < nameB) { return -1; }
  if (nameA > nameB) { return 1; }
  return 0;
});
console.log('------');
console.log(arr);
arr.sort((a, b) => {
  let nameA = a.name.toUpperCase(); // 大文字と小文字を無視する
  let nameB = b.name.toUpperCase(); // 大文字と小文字を無視する
  if (nameA[1] > nameB[1]) { return -1; }
  if (nameA[1] < nameB[1]) { return 1; }
  return 0;
});
console.log('------');
console.log(arr);
