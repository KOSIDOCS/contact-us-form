const add = (num1, num2) => num1 + num1;
const sub = (num1, num2) => num1 - num2;

const calculate = (num1, num2, func) => func(num1, num2); // higher order function

console.log(calculate(5, 5, add));
console.log(calculate(10, 5, sub));

const deal = (arr) => {
  let total = 0;
  for (let num in arr) {
    total += arr[num];
  }
  return total;
};

// const arr = [2, 2, 2];
// let al = 0;
// for (let i in arr) {
//   al += arr[i];
// }
// console.log(al);
const result = (arr, func) => func(arr);

console.log(result([2, 2, 2, 2], deal));
