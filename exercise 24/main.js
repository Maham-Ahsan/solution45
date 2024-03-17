"use strict";
let myName = 'Maham';
let numbers = [1, 2, 3, 4];
//Equality and inequality with strings
//Test 1: equality
console.log(myName == 'Maham'); //True
console.log(myName !== 'Maham'); //false
//Test 2: using lower case function
console.log(myName == 'Maham'); //True
console.log(myName == 'maham'); //false
//Test 3: numberics
let myNumber = 12;
console.log(myNumber == 12); //True
console.log(myNumber !== 12); //false
console.log(myNumber > 8); //True (greater then)
console.log(myNumber < 8); //false (less then)
console.log(myNumber >= 8); //true (greater then or equal to)
console.log(myNumber <= 8); //false (less then or equal to)
//Test 4: and && =====  or || (pipe)
let num1 = 10;
let num2 = 8;
console.log(num1 > 9 && num2 < 5); //false
//true statement & false statement
console.log(num1 > 9 || num2 < 5); //true
//true statement || false statement
//array and string
let myArray = [2, 3, "Maham"];
let myString = "Hani";
console.log(Array.isArray(myArray)); //true
console.log(Array.isArray(myString)); //false
