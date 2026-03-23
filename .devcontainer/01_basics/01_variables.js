const accountId = 144553 //change nhi hoga
let accountEmail = "yukta@google.com" // change ho skta h, used in most cases
var accountPassword = "12345" // old manner
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@eg.com"
accountPassword = "232222"
accountCity = "Deoghar"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and fuctional scope
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
