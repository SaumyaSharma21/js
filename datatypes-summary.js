//the way we wan store and the way we can access the interview , data is catagorized into two types, primitive and non primitive/reference types

//primitive
//7 types : String, Number, Boolean, null, undefined, Symbol(used to make any value unique), BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

const bigNumber = 3284537856374967n


//reference type (non primitive)
// Array, Objects, Functions

//Array example
const heros = ["shaktiman", "naagraaj", "doga"]; 
//Object example
let myObject = {  
    name : "saumya",
    age: 22,
}
//Function example
const myFunction = function(){
    console.log("hello world");
}
// a dunction called typeof returns with the datatype
console.log(typeof myFunction);

//link to  study
// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++

// two types of memories : stack and heap 
// Stack (used for primitive ,we get the copy of the variable declared), Heap (used for non primitive, we get the reference of the original value)

let myYoutube = "abcdotcom"
let anothername = myYoutube
anothername = "xyzdotcom"
console.log(anothername);
console.log(myYoutube);
// here we get the copy of myYoutube, using anohername we make changes in the copy and not the original

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "abc@google.com" //accessing in objects is done using dot as seen here

console.log(userOne.email);
console.log(userTwo.email);
// here we are not given the copy but the reference to the originl i.e userone so any changes done in userTwo which is assigned as userOne are reflected in both 