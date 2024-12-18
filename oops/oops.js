//OBJECT LITERAL
const user = {
    username: "saumya",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from the database");
        //console.log(`Username : ${this,this.username}`);
        //console.log(this);
    }
}

//console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    //return this //this is implicitely defined so if we do not write return this we still will get the output
     this.greeting = function(){
        console.log(`welcome ${this.username}`);
     }
     return this
}
const userOne = new 
User("saumya", 12, true)
const userTwo = new User("abc", 3, false); // it overwrote all the values of the userOne to prevent this use new keyword
console.log(userOne.constructor);
//console.log(userTwo);

// new keyword, when we use this an empty object named instance is created, then the constructor function is called due to the new keyword, in the next step the elements of this keywords are injected into the object and then we finally get the function
//instance of keyword: read about it on google ig 
//prototype gives us the access to classes, new keyword, this keyword