var c=300
let b=200
if(true){
    const a=1
    let b=2
    var c=3

    // console.log(b); // ---->> 2
}

// console.log(a);
// console.log(b); // ---->> 200
// console.log(c); // ---->> 3

function one(){
    const username = "Harsh"
    let price = 98

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); //--->> Out of scope
    console.log(price);

    two()
}

// one()


if(true){
    const username = "Harsh"
    if(username === "Harsh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //--->> Out of scope
}

// console.log(username); //--->> Out of scope



// ===========================================================

// console.log(addone(5));  // --->> We can call function before function declear because we are only declear the function directlly

function addone(num){
    return num + 1
}

// console.log(addone(5));
//   ----OR----
// let a = addone(5)
// console.log(a);

// console.log(addTwo(5)); // --->> We can not call this function because we are assigning this fuction in a veriable. We can access it after the function declear
const addTwo = function(num){  // addTwo -->> function or Expression
    return num + 2
}

// console.log(addTwo(5));

