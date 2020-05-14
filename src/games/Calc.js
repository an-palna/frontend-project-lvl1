import random from '../randomaizer.js';

let name = prompt("May I have your name?");
console.log("Hello,", name, "!");
const operation = ['+', '*', '-'];
const num1 = random(0, 100);
const num2 = random(0, 100);
const thisOperation = operation[random(0, operation.length)];
let str = prompt('What is calc ' + num1 + thisOperation + num2 + ' ?');
let calc;
switch(thisOperation) {
	case '+':
	calc = num1 + num2;
	break;
	
	case '*':
	calc = num1 * num2;
	break;
	
	case '-':
	calc = num1 - num2;
	break;
}
str == calc ? alert('Correct!') : alert("Sorry! It's incorrect.");
