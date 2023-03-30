function Accumulator(startingValue) {
    this.value = startingValue;
}

Accumulator.prototype.increment = function() {
    return this.value++;
}

Accumulator.prototype.decrement = function() {
    return this.value--;
}

function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
    this.startingValue = startingValue;
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

CancelableAccumulator.prototype = Accumulator.prototype;

CancelableAccumulator.prototype.clear = function() {
    this.value = this.startingValue;
    return this.value;
}

const myAccumulator = new Accumulator(99);

console.log(myAccumulator.increment());
console.log(myAccumulator.increment());
console.log(myAccumulator.increment());
console.log(myAccumulator.decrement());
console.log(myAccumulator.decrement());
console.log(myAccumulator.decrement());
console.log(myAccumulator.decrement());
console.log(myAccumulator.decrement());
console.log(myAccumulator.decrement());
console.log(myAccumulator.decrement());
console.log(myAccumulator.decrement());
console.log(myAccumulator.decrement());
console.log(myAccumulator.decrement());

console.log(myAccumulator.clear());
console.log(myAccumulator.clear());


