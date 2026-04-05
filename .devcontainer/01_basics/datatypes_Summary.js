//there are two types of data types mainly : Primary and referential 
//Primary are of 7 types:String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedin = false //boolean
const outsideTemp = null //it means it has no value it's empty
let userEmail; //as we didn't assume any value thus it's undefined

const id = Symbol('123')
const Anotherid = Symbol('123')

console.log(id == Anotherid); //output = false

const bigNumber =47573448732697475897n


//Reference (non-primitive) are of 3 types: Array, Object, Functions

//below is the method to type array in js which is done using '[]'
const heroes = ["Dinesh", "Pintu", "Dadda"];
console.log(heroes);

//the object is defined using '{}' brackets which can be of any primary data types
let myObj = {
    name: "Yukta",
    age: 21,
}

//the fuctions are defined using 'function()'

const myFunction = function(){
    console.log("hello yukta");
}

//to know how to find the data type of any variables is to add "typeof"
console.log(typeof heroes); //output is object and reason is All arrays are special type of objects, but not all objects are arrays.
console.log(typeof myFunction); //output = Function

















