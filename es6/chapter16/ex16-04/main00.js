console.log(Math.sin(Math.PI / 2));
console.log(Math.sin(Math.PI / 4));

console.log(Math.cos(Math.PI));
console.log(Math.cos(Math.PI / 4));

console.log(Math.tan(Math.PI / 4));
console.log(Math.tan(0));

console.log(Math.asin(0));
console.log(Math.asin(Math.SQRT1_2));

console.log(Math.acos(0));
console.log(Math.acos(Math.SQRT1_2));

console.log(Math.atan(0));
console.log(Math.atan(Math.SQRT1_2));

console.log(Math.atan2(0, 1));
console.log(Math.atan2(1, 1));

function deg2rad(d) { return d / 180 * Math.PI; }
function rad2deg(r) { return r / Math.PI * 180; }

console.log(deg2rad(90));
console.log(rad2deg(Math.PI / 4));
