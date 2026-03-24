let score = "33abc"

console.log(typeof score);
console.log(typeof (score)); //the difference between both the loc is that in this part first bracket part will be solved and in above it will solved directly for further understanding take example of (score + "real") and score + ("real")  

let valueInNumber = Number(score) // number() this is a type of constructor that converts any value into numeric form for numbers it will show exact that number for alphabets it will show NaN "not a number" and boolean true then 1 false then 0
console.log(typeof valueInNumber);// since valueInNumber is chosen to be number() thus typeof will show it as number regardless of the point it's NaN
console.log(valueInNumber);
// similarly check for score = null and undefined as well as for boolean for furthur understanding...

let isLoggedIn = undefined

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);
// conclusion is that if isLoggedIn is:
// 1 => true, 0 =>false
// empty,i.e, "" => false, undefined = false
// string => true

let someNumber = 21

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);








