// singleton, when objects are declared by literals, singleton is not formed while when declared using constructor, singleton is created
// Object.create is the constructor method to create object 

//object literals

const mySym = Symbol("key1")
const jsuser = {
    name : "saumya",
    "full name" : "saumya sharma",
    [mySym] : "mykey1",
    age : 19,
    location : "himachal",
    email : "saumya@abc.com",
    isLoggedIn : false,
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email = "saumya@xyz.com" // over writing existing values
//Object.freeze(jsuser) // used to freeze the object, i.e after freezing we cannot change the values
jsuser.email = "saumya@microsoft.com"
//console.log(jsuser.email);

// function
jsuser.greeting = function(){
    console.log("hello js user");
}
console.log(jsuser.greeting); // only reference of the function is given

jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());



