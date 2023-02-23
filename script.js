let firstNumber;
let secondNumber;

firstNumber = prompt("Enter first number");
secondNumber = prompt("Enter second number");

let sum = Number(firstNumber) + Number(secondNumber);
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;

alert(`The sum of these two numbers is ${sum}, 
The difference of these two numbers is ${difference},
The product of these two numbers is ${product},
The quotient of these two numbers is ${quotient}.`);