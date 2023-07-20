const add = function(a, b) {
  return a + b;
};
console.log(add(0,0));

const subtract = function(a, b) {
	return a - b;
};
console.log(subtract(10, 5));

const sum = function(array) {
	let newSum = 0;

  for (let i = 0; i < array.length; i++) {
    newSum += array[i];
  }
  return newSum;
};
console.log(sum([3, 10]));

const multiply = function(...numbers) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};
console.log(multiply(2,2));

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};
console.log(power(2,3));

const factorial = function(n) {
	let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
