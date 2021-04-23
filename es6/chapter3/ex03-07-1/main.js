const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
console.log(dialog1);
console.log(dialog1 === dialog2);

const dialog3 = `He looked up and said "don't do that!" to Max.`;
console.log(dialog3);
console.log(dialog2 === dialog3);