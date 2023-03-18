const user = {
    name: "Kate",
    age: 33,
    sayHello: function () {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old!`;
    }
}

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

for (let i = 0; i < user.length; i++) {

    const test = user[i];

    if (isObjectEmpty(test)) {
        continue;
    }
}
console.log(user.sayHello());

// --------------------------------

const calc = {
    ask: function () {
        const num1 = Number(prompt("Enter first number"));
        const num2 = Number(prompt("Enter second number"));
        return `Your numbers are ${num1} and ${num2}`;
       },
    sum: function () {
        const sum1 = this.ask.num1 + this.ask.num2;
        return `The sum of these two numbers is ${sum1}`;
    },
    mul() {
        const mul1 = this.ask.num1 * this.ask.num2
        return `The product of these two numbers is ${mul1}`;
    }
}

console.log(calc.ask());
console.log(calc.sum());
console.log(calc.mul());



