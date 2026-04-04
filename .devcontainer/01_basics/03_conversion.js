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
//console.log(stringNumber);
//console.log(typeof stringNumber);

let value = 3
let negValue = -value
//console.log(negValue);

//below are the basic operations
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2); // 2 to the power of 2
//console.log(2/2);
//console.log(2%2);

let str1 = "hello"
let str2 = " Yukta" //here i gave space so that when added there will be spaces between two strings
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //output = 12
console.log(1 + "2"); //output = 12
console.log("1" + 2 + 2); //output = 122 ; In this case and the below case we can see that if the string is came at first the other numerics will be seen as string as well while adding while in other case below if the numeric come first it will first sum the numerics and then it will perform string addition
console.log(1 + 2 + "2"); //output = 32 

console.log(2 + 3 - 1 % 3 * 6) // bad way to write code as it does not specify what to prioritize first 

console.log("1" + 2 + 2);  //output = 122
console.log("1" + (2 + 2)); //correct manner output = 14

console.log(+true); // true in boolean converts to 1 ; here we used plus sign to use operation
console.log(+""); //empty shows false and that converts to 0

let gameCounter = 100
//++gameCounter; output = 101
//--gameCounter; output = 99
gameCounter++; //output = 101 difference between this loc and the above locs are that this is postfix where the concept is increase later first compile while the above are prefix that means first increase/ decrease then write in terminal
console.log(gameCounter);

//| Operator | Behavior                 |
//| -------- | ------------------------ |
//| `+`      | String mila → concat     |
//| `-`      | Always number conversion |
//| `+x`     | Convert to number        |
//| `-x`     | Convert + negative       |
//| `++`     | Convert → increment      |

//link to study more - https://tc39.es/ecma262/multipage/abstract-operations.html?utm_source=chatgpt.com





