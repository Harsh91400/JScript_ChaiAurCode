let score = "33abc"
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
score = "33abc" --> NaN 
score = "33" --> 33
score = null --> 0
score = true / false --> 1/0
*/

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 ---->> true; 0 ---->> false;
// "" ---->> false
// "Harsh" ---->> true



let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value  = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);

let str1= "Hello"
let str2= "Harshit"
let str3= str1 + " " + str2
// console.log(str3);

// console.log("1"+ 2);      // ---->> 12
// console.log(1 + "2");     // ---->> 12
// console.log("1" + 2 + 3); // ---->> 123
// console.log(1 + 2 + "3"); // ---->>  33

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // ---->> 1
// console.log(true+); // ---->> SyntaxError

let num1, num2, num3

num1 = num2 = num3 = 2+2

// console.table([num1, num2, num3]);

// *********************** Prefix & Postfix ***********************

let gameCounter = 100
++gameCounter  // ---->> gameCounter -> 101
// console.log(gameCounter);

let preInc = ++gameCounter  // ---->> gameCounter -> 102 and PosInc -> 102
let posInc = gameCounter++  // ---->> gameCounter -> 103 but postInc -> 102

// console.table([gameCounter, preInc, posInc]); // ---->> gameCaounter -> 103, preInc -> 102, posInc -> 102