const add = function(a,b) {
	return (a+b);
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
};

const power = function(a,b) {
	return (a**b);
};

const factorial = function(a) {
let fac=1
for (let i = 1; i <= a; i++) {
  fac *= i;}
return fac
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
