console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
// Cancelled out 'Test - should say'
console.log(/*'Test - should say "Hello World!"'*/ hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Nolen'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber , secondNumber) {
  return firstNumber + secondNumber;
}

console.log(addNumbers(5 , 3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber , secondNumber , thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}

console.log(multiplyThree(2 , 3 , 4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( '3 is positive, ' + isPositive(3) );
console.log( '0 is positive, ' + isPositive(0) );
console.log( '-3 is positive, ' + isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array = []) { 
  last = array[array.length - 1]

  if (array = '') {
    return undefined
  }
    return last
}

console.log(getLast(['Bear', 'Maple', 'Milli']));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let arrayToSearch = [1, 2, 3, 4, 5, 6, 7, 8];


function find(value){
  let i = 0;

  while(value != arrayToSearch[i] && arrayToSearch.length - 1 >= i ){
    i++;
}

if (value = arrayToSearch[i]){
  return true;
}
  return false;

}

console.log(find(8));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if(letter === string.charAt(0)){
      return true
  }
  else {
    return false
  }
}
console.log( 'the first letter of apple is a:', isFirstLetter('a', 'apple') );
console.log( 'the first letter of apple is z:', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll(arrayForSum) {
  let sum = 0
  let i = 0

  while(arrayForSum.length - 1 >= i){
    sum = arrayForSum[i] + sum
    i++;
  }
  return sum
}

console.log(sumAll([1, 2, 3]));
console.log(sumAll(arrayToSearch));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function postiveOnly(array){
  let i = 0
  
  while(array.length > i){
    
    if(array[i] <= 0){
    array.splice(i, 1); // is there a better method?
    }
    
    else{
      i++; // deleting a value changes i value the same^ 
    }      // only need one or the other in this case
    
  }
  
  return array
}

console.log(postiveOnly([8, -5, 10, -4, -7, 0, 2, 9]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Write a function that takes an integer as input, and returns the number
// of bits that are equal to one in the binary representation of that number.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case.

function integerToBinary(integer){
  let binary = integer.toString(2); // 1. number to a binary string
  return binary;
}

function splitIntoArray(num) {
  return Array.from(String(num), Number); // 3. clarrified array as numbers
}

function sumAllBinary(integer) {
  
  let binaryNumber = Number(integerToBinary(integer)); // 1. and 2. binary string to number
  
  let binaryArray = splitIntoArray(binaryNumber); // 3. number to an array
  
  let sum = 0
  let i = 0

  while(binaryArray.length - 1 >= i){
    sum = binaryArray[i] + sum;
    i++;
  }
  return sum // 4. sum of array
}
 
console.log(sumAllBinary(49));