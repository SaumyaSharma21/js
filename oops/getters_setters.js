class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    
    get email (){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }

    get password(){
        return `${this._password}saumya`
    }
    set password (value){
        this._password = value
    }
}

const saumya = new User("a@abc.ai", "abc")
console.log(saumya.email);