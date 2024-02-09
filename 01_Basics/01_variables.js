const accountId = 122434
let accountEmail = "shubham@algdev.in"
var accountPassword = "12345"
accountCity = "Pune"

let accountState


//accountId = 2 //Not allowed - Constant cannot be changed.

accountEmail = "admin@algdev.in"
accountPassword = "asdfghjkl"
accountCity = "Ghodegaon"

//console.log(accountId)
//console.log(accountEmail)
//console.log(accountPassword)
//console.log(accountCity)

//Prefer not to use var, instead use let because of issue in block scope and  functional scope

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
