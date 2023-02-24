let firstNumber;
let secondNumber;
let input;

firstNumber = prompt("Enter first number");
secondNumber = prompt("Enter second number");

let sum = Number(firstNumber) + Number(secondNumber);
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;


alert(`The sum of these two numbers is ${sum}`);


if (Number(secondNumber) > Number(firstNumber)) {
   input = prompt("Are you sure you want to continue substraction? Enter yes or no.");

    if(input === 'yes') {
        alert(`The difference of these two numbers is ${difference}`);
    } else {
        alert(`The difference can't be calculated. The first number is smaller than the second number.`);
    }

    // Я лишила свій варіант з повідомленням, бо так якось логічніше. 
    // Щоби ніякого повідомлення не було (як ви просили в ДЗ) тре написати код так:
    // else {} 
    
} else {
    alert(`The difference of these two numbers is ${difference}`);
}

alert(`The product of these two numbers is ${product}`);

if (secondNumber == 0) {
    alert(`There's been a mistake. Division by 0 is not possible`);
} else {
    alert(`The quotient of these two numbers is ${quotient}.`);
}

