// Dates

//let myDate = new Date()
// console.log(myDate); // ---->> 2023-12-31T18:01:08.599Z
// console.log(myDate.toString()); // ---->> Sun Dec 31 2023 23:32:08 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //---->> Sun Dec 31 2023
// console.log(myDate.toLocaleString()); // ---->> 31/12/2023, 11:32:54 pm

// console.log(typeof myDate); // ---->> Object


let myCreatedDate = new Date(2003,0,24) // ---->> Fri Jan 24 2003 --->> Month starts from 0 - 11 => jan - dec
// console.log(myCreatedDate.toDateString());



// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


let todayDay = newDate.toLocaleString('default', {
    weekday : "long",
})
console.log(todayDay);