// Stack (Primitive) , Heap (Non-Primitive)

let myVillageName = "Khodha"

let anotherName = myVillageName

anotherName = "Bartha"

console.log(myVillageName)
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "harsh@google.com"  // ---->> All changes in original value in case of non-primitive

console.log(userOne.email); // ---->> harsh@google.com
console.log(userTwo.email); // ---->> harsh@google.com


// 02:06:34  -  String in javascript
