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

// +++++++++++++++++++++++++++++++++++++++++++++++++++

//memory are of two types : stack and heap

// Stack (used for Primitive type data), Heap(used for referential data)
//in stack whatever memory is declared is considered as copy.

//while in heap when the memory is declared it references to original variable thus the changes occur to original variables

let myYoutubename = "yuktadotcom"

let anothername = myYoutubename
anothername = "Yuki the storyteller"

console.log(myYoutubename); //output = yuktadotcom
console.log(anothername); //output = Yuki the storyteller

//the above example is of stack which in practical changes the value of copied variable anothername even though it already was declared to be equal to myYoutubename

let userOne = {
    email: "yukta@gmail.com",
    upi: "user@sbi"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne.email); //output = user@gmail.com
console.log(userTwo.email); //output = user@gmail.com

//in the above example of heap we can see first that we used object as variable here , second thing is that if we wrote that userTwo = userOne then even if we gave different value of userOne email, it still changed to the new value of userTwo
//thus we can conclude that the variable always declares the value that references to the new value

// the diagram for more understanding are as follows:
//  STACK                                   HEAP
// ───────────────                         ─────────────────────────

// ┌──────────────┐                        ┌──────────────────────────┐
// │ userTwo      |----------------------->│ {                        │
// ├──────────────┤  both references to    │  email: "user@google.com"│
// │ userOne      │----------------------->│  upi:   "user@ybl"       │
// ├──────────────┤                        │ }                        │
// │ myYoutube    │ → "yuktadotcom"        └──────────────────────────┘
// ├──────────────┤
// │ anotherName  │ → "Yuki the storyteller"
// ├──────────────┤
// │ myYoutube    │ → "yuktadotcom"
// └──────────────┘



