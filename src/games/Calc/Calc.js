let name = prompt("May I have your name?");
const operation = ['+', '*', '-'];
const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
const thisOperation = operation[Math.floor(Math.random() *operation.length)];
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
