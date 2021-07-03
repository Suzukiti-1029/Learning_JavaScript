function validPassword(p) {
  return /[A-Z].*[0-9].*[a-z]/.test(p);
}

console.log(validPassword('aiueo'));
console.log(validPassword('3aiuEo'));
console.log(validPassword('traveLer2'));
console.log(validPassword('日本語3aB'));
console.log(validPassword('Pocke3'));
console.log(validPassword('Pocké3'));
