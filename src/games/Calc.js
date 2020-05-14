import random from '../randomaizer.js';

let name = prompt("May I have your name?");
const operation = ['+', '*', '-'];
const num1 = random(0, 100);
const num2 = random(0, 100);
const thisOperation = operation[random(0, operation.length)];
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
let str = prompt(name + ', what is calc ' + num1 + thisOperation + num2 + ' ?');
str == calc ? alert('Correct!') : alert("Sorry! It's incorrect.");
