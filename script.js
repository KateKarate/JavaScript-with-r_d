function sumCalculation(num1, num2) {
    const sum = num1 + num2;
    alert(`The sum of these two numbers is ${sum}`);
    return sum;
}

function differenceCalculation(num1, num2) {
    const difference = num1 - num2;
    if (num2 > num1) {
           input = prompt("Are you sure you want to continue substraction? Enter yes or no.");
        
            if(input == 'yes') {
                alert(`The difference of these two numbers is ${difference}`);
            } else {
                alert(`The difference can't be calculated. The first number is smaller than the second number.`);
            }
        } else {
            alert(`The difference of these two numbers is ${difference}`);
        }
    return difference;
}

function productCalculation(num1, num2) {
    const product = num1 * num2;
    alert(`The product of these two numbers is ${product}`);
    return product;    
}

function quotientCalculation(num1, num2) {
    const quotient = num1 / num2;
    if (num2 == 0) {
            alert(`There's been a mistake. Division by 0 is not possible`);
        } else {
            alert(`The quotient of these two numbers is ${quotient}.`);
        }
        return quotient;
}

const num1 = Number(prompt("Enter first number"));
const num2 = Number(prompt("Enter second number"));

const sumValue = sumCalculation(num1, num2);
console.log(sumValue);

const differenceValue = differenceCalculation(num1, num2);
console.log(differenceValue);

const productValue = productCalculation(num1, num2);
console.log(productValue);

const quotientValue = quotientCalculation(num1, num2);
console.log(quotientValue);


