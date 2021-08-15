const numbers = [13, 7, 53, 33, 86, 31, 40, 112, 53];
const numbers2 = new Array(13, 7, 53, 33, 86, 31, 40 );
const fruit = ['Watermelon','Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;
val = numbers.length;
val = Array.isArray(numbers);
val = numbers[2];
numbers[2] = 100;
val = numbers.indexOf(86);

//end
numbers.push(250);
//front
numbers.unshift(123);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice values
numbers.splice(1,3);

numbers.reverse();

val = numbers.concat(numbers2);
val = fruit.sort();
//sorts by a first number (not the lowest)
val = numbers.sort();

val = numbers.sort(function(x,y){
    return x-y;
});
val = numbers.sort(function(x,y){
    return y - x;
});

function under50(num){
    return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);