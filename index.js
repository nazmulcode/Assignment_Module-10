function calculateDifference(a, b) {
  return a - b;
}

// console.log(calculateDifference(10, 5));

// 2nd
function isOdd(number) {
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

// console.log(isOdd(5));

// 3rd

// 4th
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEvenNumbers(number) {
  return number.filter((num) => num % 2 === 0);
}
let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);
