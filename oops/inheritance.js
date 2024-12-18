class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username) // the super keyword automatically refers the class being extended and the username of the other class being reffered to and sets its value and we can access it here
        this.email = email
        this.password = password
    }
    addCourse (){
        console.log(`a new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai", "chai@123", "123")
chai.addCourse()
const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log((chai instanceof User));


