 function sayMyName(){
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}

// sayMyName()

function addTwoNum(num1, num2){ // parameter
    // console.log(num1 + num2);
}

// addTwoNum(1,2); // arguments

const result1 = addTwoNum(1,2);
// console.log("Result:", result1);  // ---->> Output --> Result: undefined  -->> We can not get the resultant value without return.

function subTwoNum(num1,num2){
    let result = num1 - num2;
    return result; // ------>> Now we can get the value in output because of return.
}

const result = subTwoNum(3,2)
// console.log("Result1:", result); // ----->> Output --> Result1: 1


// ---->> result variable in line 25 and line 21 are same name but both are different because of SCOPE . 

function loginUserMessage(username = "sam"){
    if(username === undefined){ // if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harsh"));


function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(100, 200, 300, 400));

const user = {
    username: "harsh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"Sam",
    price: 399,
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue([100,200,300,400,500]));
console.log(returnSecondValue(myNewArray));