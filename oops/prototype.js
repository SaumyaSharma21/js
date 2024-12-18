// let myName = "Saumya   "
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.saumya = function(){
    console.log(`saumya is present in all objects`);
}
//heroPower.saumya()
myHeros.saumya()
Array.prototype.heysaumya = function(){
    console.log(`saumya says hi`);
}
myHeros.saumya()
myHeros.heysaumya()
//heroPower.heysaumya()

//INHERITANCE
const User = {
    name: "abc",
    email:"xyz@google.com"

}
const Teacher = {
    makeVideos : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport ={
    makeAssignments:'JS assignment',
    fullTime : true,
    __proto__:TeachingSupport //the __proto__ property is used to exchange the information and link two objects that is to make another object get  access to the properties of another object
}
    
Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // teaching support gets access to the properties of teacher
let anotherUsername = "hello    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUsername.trueLength()
"saumya".trueLength()
"hello".trueLength()