const balance = new Number(100)
// console.log(balance);

// console.log(balance.toPrecision());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
 
const newBalance = 123.98511
// console.log(newBalance.toPrecision(5)); // ---->> 123.99

const newBalance1 = 10000000000
// console.log(newBalance1.toLocaleString('en-IN')); // ---->> 10,00,00,00,000


// =================================================>>

// console.log(Math);
// console.log(Math.abs(-2));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));

// console.log(Math.random());
// // console.log(Math.random().toFixed(1)*10);
// console.log((Math.random()*10) + 1 );
// console.log(Math.floor((Math.random()*10) + 1 ));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min)


