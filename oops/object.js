function multiplyBy5(num){
    return num *5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // prototype provies us with not just the method but also the properties of the function

function createUSer (username, score){
    this.username = username
    this.score = score
}

createUSer.prototype.increment = function(){
    this.score ++
}

createUSer.prototype.printME = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUSer ("chai", 25)
const tea = createUSer("tea", 250)

chai.printME()

/* 
NEW KEYWORD:
here is what happens behind the scenes in the new keyword
a new object id created: the new keyword initiates the creation of a new js object

a prototype is linked : the newly created object gets linked to the prototype property of the constructor function, this means that it has access ro the properties and methods defined on the constructor's prototype
js does not create constructor function using classes but new keyword instead
the constructor is called : the constructor function is called with the specified arguments and this is bound to the newly created object, if no explicit return value is specified from the constructor js assumes this, the newly created object to be th intended return value

the new object is returned : after the constructor function has been called, if it doesnt return a non-primituve value (object, array, function, etc), the newly created object is returned
*/

