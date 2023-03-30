function sumCalculation() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const sum = (Number(num1) + Number(num2));
    document.getElementById("sumResult").innerHTML = sum;
    
    if (sum == 0) {
        document.getElementById("sumResult").style.color = "grey";
    } else if (sum > 0 && sum <= 50) {
        document.getElementById("sumResult").style.color = "rgb(0,255,127)";
    } else if (sum >= 51 && sum <= 200) {
        document.getElementById("sumResult").style.color = "rgb(50,205,50)";
    } else if (sum >= 201 && sum <= 500) {
        document.getElementById("sumResult").style.color = "rgb(34,139,34)";
    } else if (sum >= 501) {
        document.getElementById("sumResult").style.color = "rgb(0,100,0)";
    } else if (sum <= -1 && sum >= -50) {
        document.getElementById("sumResult").style.color = "#ff0000";
    } else if (sum <= -51 && sum >= -200) {
        document.getElementById("sumResult").style.color = "#b20000";
    } else if (sum <= -201 && sum >= -500) {
        document.getElementById("sumResult").style.color = "#660000";
    } else {
        document.getElementById("sumResult").style.color = "#330000";
    }
}

function differenceCalculation() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const difference = num1 - num2;
    document.getElementById("differenceResult").innerHTML = difference;

    if (difference == 0) {
        document.getElementById("differenceResult").style.color = "grey";
    } else if (difference > 0 && difference <= 50) {
        document.getElementById("differenceResult").style.color = "rgb(0,255,127)";
    } else if (difference >= 51 && difference <= 200) {
        document.getElementById("differenceResult").style.color = "rgb(50,205,50)";
    } else if (difference >= 201 && difference <= 500) {
        document.getElementById("differenceResult").style.color = "rgb(34,139,34)";
    } else if (difference >= 501) {
        document.getElementById("differenceResult").style.color = "rgb(0,100,0)";
    } else if (difference <= -1 && difference >= -50) {
        document.getElementById("differenceResult").style.color = "#ff0000";
    } else if (difference <= -51 && difference >= -200) {
        document.getElementById("differenceResult").style.color = "#b20000";
    } else if (difference <= -201 && difference >= -500) {
        document.getElementById("differenceResult").style.color = "#660000";
    } else {
        document.getElementById("differenceResult").style.color = "#330000";
    }
}

function productCalculation() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const product = num1 * num2;
    document.getElementById("productResult").innerHTML = product;

    if (product == 0) {
        document.getElementById("productResult").style.color = "grey";
    } else if (product > 0 && product <= 50) {
        document.getElementById("productResult").style.color = "rgb(0,255,127)";
    } else if (product >= 51 && product <= 200) {
        document.getElementById("productResult").style.color = "rgb(50,205,50)";
    } else if (product >= 201 && product <= 500) {
        document.getElementById("productResult").style.color = "rgb(34,139,34)";
    } else if (product >= 501) {
        document.getElementById("productResult").style.color = "rgb(0,100,0)";
    } else if (product <= -1 && product >= -50) {
        document.getElementById("productResult").style.color = "#ff0000";
    } else if (product <= -51 && product >= -200) {
        document.getElementById("productResult").style.color = "#b20000";
    } else if (product <= -201 && product >= -500) {
        document.getElementById("productResult").style.color = "#660000";
    } else {
        document.getElementById("productResult").style.color = "#330000";
    }
}

function quotientCalculation() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;
    const quotient = num1 / num2;
    if (num2 == 0) {
        alert(`There's been a mistake. Division by 0 is not possible`);
    }
    document.getElementById("quotientResult").innerHTML = quotient;

    if (quotient == 0) {
        document.getElementById("quotientResult").style.color = "grey";
    } else if (quotient > 0 && quotient <= 50) {
        document.getElementById("quotientResult").style.color = "rgb(0,255,127)";
    } else if (quotient >= 51 && quotient <= 200) {
        document.getElementById("quotientResult").style.color = "rgb(50,205,50)";
    } else if (quotient >= 201 && quotient <= 500) {
        document.getElementById("quotientResult").style.color = "rgb(34,139,34)";
    } else if (quotient >= 501) {
        document.getElementById("quotientResult").style.color = "rgb(0,100,0)";
    } else if (quotient <= -1 && quotient >= -50) {
        document.getElementById("quotientResult").style.color = "#ff0000";
    } else if (quotient <= -51 && quotient >= -200) {
        document.getElementById("quotientResult").style.color = "#b20000";
    } else if (quotient <= -201 && quotient >= -500) {
        document.getElementById("quotientResult").style.color = "#660000";
    } else {
        document.getElementById("quotientResult").style.color = "#330000";
    }
}




