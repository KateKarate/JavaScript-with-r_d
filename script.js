function sumCalculation() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const sum = (Number(num1) + Number(num2));
    document.getElementById("sumResult").innerHTML = sum;
}

function differenceCalculation() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const difference = num1 - num2;
    if (num2 > num1) {
           input = prompt("Are you sure you want to continue substraction? Enter yes or no.");
        
            if(input == 'no') {
                    alert(`The difference can't be calculated. The first number is smaller than the second number.`);
            }
        } 
        document.getElementById("differenceResult").innerHTML = difference;
}

function productCalculation() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const product = num1 * num2;
    document.getElementById("productResult").innerHTML = product;   
}

function quotientCalculation() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const quotient = num1 / num2;
    if (num2 == 0) {
            alert(`There's been a mistake. Division by 0 is not possible`);
        } 
        document.getElementById("quotientResult").innerHTML = quotient;
}



// const sumValue = sumCalculation(num1, num2);
// console.log(sumValue);

// const differenceValue = differenceCalculation(num1, num2);
// console.log(differenceValue);

// const productValue = productCalculation(num1, num2);
// console.log(productValue);

// const quotientValue = quotientCalculation(num1, num2);
// console.log(quotientValue);



