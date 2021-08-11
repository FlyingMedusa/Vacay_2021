let val;

val = String(555);
val = String(4+4);

val = String(true);
val = String(new Date());
val = String([1,2,3,4]);

val = (5).toString();
val = (true).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

val = Number('5');
val = Number(true);
val = Number(null);
val = Number('hello');

val = parseInt('100.30');
val = parseFloat('100.36');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(1));

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);