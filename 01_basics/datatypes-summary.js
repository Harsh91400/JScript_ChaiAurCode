//  Primitive

//  7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // ---->> dataType -> Object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber1 = 12457896532145878745  // ---->> 12457896532145880000  not consider like bigInt
const bigNumber2 = 12457896532145878745n // ---->> 12457896532145878745n consider like bigInt
console.log(bigNumber1); 
console.log(bigNumber2);

console.log(typeof bigNumber1); // ---->> dataType -> number
console.log(typeof bigNumber2); // ---->> dataType -> bigint
// Reference (Non primitive)

// Array, Objects, Function

const heros = ["Saktiman", "Naagraj", "Mirjapur"]

let myObj = {
    name : "Harsh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj);
