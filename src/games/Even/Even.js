import random from '../randomaizer.js';

let name = prompt("May I have your name?");
console.log("Hello,", name, "!");
const num = random(0, 100);
console.log(num);
let isEven = 'yes';
if (num % 2 !== 0) {
	isEven = 'no';
}
let str = prompt("Is number " + num + " even?");
str === isEven ? console.log('Correct!') : console.log("Sorry! It's incorrect.");



