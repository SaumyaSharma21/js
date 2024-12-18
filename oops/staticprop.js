class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
     static createID(){ // the static keyword is used when you do not want others to access this method
        return `123`
    }
}

const saumya = new User("saumya")
console.log(saumya.createID());
class Teacher extends USer {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","iphone.com")
console.log(iphone.createID());