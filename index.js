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
// console.log(evenNumbers);

// 6th
function lowercaseFirstLetter(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}
// console.log(lowercaseFirstLetter("NAZMUL"));

// 7th

// 8th
let numbers2 = [10, 20, 30, 40, 50];
function findAverage(num) {
  let total = num.reduce((acc, val) => acc + val, 0);
  return total / num.length;
}
console.log(findAverage(numbers2));
