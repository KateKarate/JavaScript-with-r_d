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

console.log("--------------------------------");

const calc = {
    num1: 0,
    num2: 0,
    ask: function () {
        this.num1 = Number(prompt("Enter first number"));
        this.num2 = Number(prompt("Enter second number"));
        return `Your numbers are ${this.num1} and ${this.num2}`;
       },
    sum: function () {
        const sum1 = this.num1 + this.num2;
        return `The sum of these two numbers is ${sum1}`;
    },
    mul() {
        const mul1 = this.num1 * this.num2;
        return `The product of these two numbers is ${mul1}`;
    }
}

console.log(calc.ask());
console.log(calc.sum());
console.log(calc.mul());



