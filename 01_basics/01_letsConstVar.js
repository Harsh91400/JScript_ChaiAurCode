const accountId = 123456
let accountEmail = "abc@gmail.com"  // ---->> let and var are same we would prefer to use let in place of var
var accountPass = "abc@123"  // ---->> var not use because is you declear a variable accountPass and enter a value and any auther user came and make a another file and create there a new accountpass variable and enter a value there and save value change as well as in the first file that's why we would not prefer to use var dataType 
accountCity = "Jaipur"
let accountState;

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

// accountId = 123 ---->> Not Allowed to change const variables 

accountEmail = "xyz@gmail.com"
accountPass = "xyz@123"
accountCity = "Gorakhpur"

console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity, accountState])