
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered1 = numbers.filter(function evenNumbers (number) {
  return number % 2 === 0;
});

console.log('filter out the even numbers');
console.log(filtered1);