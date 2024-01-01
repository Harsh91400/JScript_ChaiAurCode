// ---->> String is a object

const name ="Harsh"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('abcxyz')

// console.log(gameName);

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.toLowerCase());


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));


// const newString = gameName.substring(0,4) // ---->> (0,4) -->> 0 to 3 values -->> (abcx)
// console.log(newString);


// const anotherString = gameName.slice(-6,6)  // ---->> { gameName = abcxyz this is for analysis }
// console.log(anotherString);


// const newStringOne = "  harsh   "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://harsh.com/harsh%50tripathi"
console.log(url.replace(".com",".in"))
console.log(url.includes(".com"));
console.log(url.split("/"));

