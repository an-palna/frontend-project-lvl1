let name = prompt("May I have your name?");
console.log("Hello,", name, "!");
const operation = ['+', '*', '-'];
const num1 = Math.floor(Math.random()*100);
const num2 = Math.floor(Math.random()*100);
const thisOperation = operation[Math.floor(Math.random()*3)];
console.log(num1 + thisOperation + num2);
let str = prompt('What is calc?');
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
str == calc ? console.log('Correct!') : console.log("Sorry! It's incorrect.");
