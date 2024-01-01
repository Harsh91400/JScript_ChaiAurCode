// Array


// ---->> Shallow copy --> A shallow copy of an object is a copy whose properties share the same references (Working like Heap)

// ---->> Deep Copy    --> A deep copy of an object is a copy whose properties do not share the same references (Working like Stack)



const myArr = [0,1,2,3,4,5]
const myHeros = ["Saktiman","Krish","Flying Jatt"]
const myHeros2 = new Array("Iron Man","Thor","Captain America")

// console.log(`My Arr is ${myArr} and Then My Heros first list is ${myHeros} and then Again My Heros Second List ${myHeros2}`);

// console.log(myHeros2[0]);

// ==============================================================>>
// Array Methods


// console.log(myArr);
// myArr.pop()
// myArr.push(6)
// myArr.push("Harshit Tripathi")


// myArr.unshift(9)  // ---->> Add on the First Position
// myArr.unshift(8)
// console.log(myArr);
// myArr.shift()     // ---->> Remove from the First Position
// console.log(myArr);



// console.log(myArr.includes(5));
// console.log(myArr.indexOf(2));


const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr); // ---->> string

// slice , splice

console.log("A ",myArr); // ----->> Check Output to understand

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ",myArr);    // ----->> Check Output to understand

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);    // ----->> Check Output to understand
console.log(myn2);

/*

==============Output===================
A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]
C  [ 0, 4, 5 ]
[ 1, 2, 3 ]

*/