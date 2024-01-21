// this --->> Current Context , this use in normal function only

const user = {
    username: "Harsh",
    price: 9999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website 
Please Pay you Dues ${this.price} Rs Before Due Date`);
        console.log(this); // --->> this refers to user
    }
}
// user.welcomeMessage()

// user.username = "Awnish"

// user.welcomeMessage()

// console.log(this);   // --->> this refers to empty object


// function chai(){
//     let username = "Harsh"
//     console.log(this.username); //--->> this context works only in object we can not use in function
// }
// chai()

const chai = function() {
    let username = "Harsh"
    console.log(this.username); // ---->> undefined
}
// chai()

// const chai = () => {
//     let username = "Harsh"
//     // console.log(this.username); // ---->> undefined
//     console.log(this); // ---->> {} // --->> We can use { this } in arrow function
// }
// chai()



// const addTwo = (num1,num2) => {  //--->> Basics Arrow Function -->> explicitlly use 
//     return num1 + num2
// }

// ------->>>> if we Use { } curly then we must give return function but if we are not using ' { } curly ' then we don't want to add return keyword

// const addTwo = (num1,num2) => num1 + num2  // --->> Implicitlly use

// const addTwo = (num1,num2) => (num1 + num2) // --->> Implicitlly use

// const addTwo = (num1,num2) => {username:"Harsh"} // --->> undefined -->> we can return the object without ''() parantheses''

const addTwo = (num1,num2) => ({username:"Harsh"}) // --->> we can return the object ''() parantheses''
console.log(addTwo(4,5));
// app.set('view engine','ejs');
// app.get('/', (req,res)=>{
    
// })
