const firstname = 'Marta';
const lastname = 'Sleboda';
const greeting = 'Well hello, nice to meet you!';

let val;

val = firstname + ' ' + lastname;
val = "That's awesome";
val = 'That\'s awesome';

val = firstname.length;

val = firstname.concat(' ', lastname);

val = firstname.toUpperCase();
val = firstname.toLowerCase();

val = firstname[0];
val = firstname.indexOf('r');
val = firstname.lastIndexOf('a');

val = firstname.charAt('2');
val = firstname.charAt(firstname.length - 1);

val = firstname.substring(0, 3);
val = firstname.slice(0, 3);
val = firstname.slice(-3);

val = greeting.split(' ');
val = greeting.split(',');

val = greeting.replace('e', '3');

val = greeting.includes('hello');
val = greeting.includes('goodbye');

console.log(val);