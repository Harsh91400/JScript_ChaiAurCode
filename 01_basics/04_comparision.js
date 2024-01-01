// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // ---->> javaScript automatically converted "2" -> 2 string -> number
// console.log("02a" > 1); // ---->> But here "02a" -> NaN ---->> false

console.log(null > 0);  // ---->> null -> NaN or 0
console.log(null == 0); // ---->> null -> NaN or 0
console.log(null >= 0); // ---->> null -> NaN or 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// ===

console.log("2" === 2); // ---->> Don't compare different data types