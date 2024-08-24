console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Jamie'))

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('5 + 14 =', addNumbers(5,14));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1*num2*num3;
}
console.log('12*6*13 =', multiplyThree(12,6,13));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('is 2 positive?', isPositive(2));
console.log('is -46423 positive?', isPositive(-46423));
console.log('is 0 positive?', isPositive(0));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length -1];
}

console.log('last item in [4,1,2] is', getLast([4,1,2]));
console.log('last item in [] is', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for(item of array){
    if (item === value) return true;
  }
  return false;
}

console.log('finding 2 in [4,1,2]', find(2, [4,1,2]));
console.log('finding 12 in [4,1,2]', find(12, [4,1,2]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string[0].toLowerCase() === letter.toLowerCase();
  //toLowerCase is used here because the function would otherwise be case sensitive, as A !=== a
}
console.log('is a the first letter of Aoife?', isFirstLetter('a', 'aoife'));
console.log('is a the first letter of beluga?', isFirstLetter('a', 'beluga'))

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(num of array){
    sum += num;
  }
  // TODO: return the sum
  return sum;
}
//assuming here we are given a correct array of only numbers
console.log('sum of [4,1,2] is', sumAll([4,1,2]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(mixedArray) {
  let posArray = [];
for(item of mixedArray){
  if(isPositive(item)) posArray.push(item);
}
return posArray;
}
console.log('positive array of [4,1,-2,5,-17,0,1] is', allPositive([4,1,-2,5,-17,0,1]));
let inputSafetyCheck = [-5, 4, -3, 2, -1];
console.log('input safety check array is', inputSafetyCheck);
console.log(allPositive(inputSafetyCheck));
console.log('inputSafetyCheck after running is', inputSafetyCheck);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//https://edabit.com/challenge/WEvqZTFcHeYzFn74c
//challenge: a function that returns the perimeter of either a circle or square with a side or radius of given length, using two parameters l and num, where l is
//a letter either s or c, and num is the given length. additionally, no branching is allowed, and the code must use only arithmetic and comparison operators.


/*personal notes: parameter l will be either s or c. c  is the third letter and s is the 19th. we can replace our if/else statement with simply computing both
and dividing by a factor based on l. this may not give performance gains due to the additional wasted operation, but some efficiency is gained back by not branching.

perimeter of a square = 4*num. circle = 6.28*num (according to problem specification).

utf-16 encoding of c is 99 and s is 115. this is accessible through charCodeAt.

i used a graphing calculator to make a formula for a line containing points (99,6.28) and (115, 4). the formula is y=-2.28/16 x + 20.3875. 
i know this will make the computer do weird floating point math but performance is not a factor in this problem.
therefore, we can replace if(l===c) return num*6.28 elseif (l===s) return num*4
with return num*((-2.28/16)*l.charCodeAt(0) + 20.3875).

this solution is not accepted by edabit due to floating point math imprecision, which is crazy, because the problem requires floating point multiplication
*/
function perimeterCatch(l, num){
return num*(((-2.28/16)*l.charCodeAt(0)) + 20.3875)
}
console.log('perimeter of square with side 5', perimeterCatch('s', 5));
console.log('perimeter of circle with radius 12', perimeterCatch('c', 12));




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
