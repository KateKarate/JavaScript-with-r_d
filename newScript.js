
// 1. Hовий масив на 10 елементів з довільними числами.

const arr = [
    10,
    34,
    6,
    67,
    1,
    78,
    892,
    9,
    56,
    11
];



// 4. Перевірка чи є елементи числами.

let numbers = [];

arr.forEach(element => {
    if(typeof(element) == "number"){
        numbers.push(element);
    }
})

console.log(numbers);



// 2. Пошук суми елементів.

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log(sum);



// 3. Mінімальне та максимальне значення елементів.

function findMaxNumber(arr) {
    let maxNumber = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber;
}

const maxNumber = findMaxNumber(arr);
console.log(maxNumber);

function findMinNumber(arr) {
    let minNumber = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }

    return minNumber;
}

const minNumber = findMinNumber(arr);
console.log(minNumber);



// 5. Напівялинка.

var hashtag = "";
  for(let i = 1; i < 6; i++) {
    hashtag += "#";
      console.log(hashtag);
  }

