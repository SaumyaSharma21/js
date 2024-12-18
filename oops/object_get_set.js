const User = {
    _email : 'xyz@gmail.com',
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email (value){
        this._email =value
    }
}
//usually we only get class based getters and setters , using getters and setters using functions and objects is not that common
const tea = Object.create(User)
console.log(tea.email);
//getters and setters are considered special methods which works on the property , they just bring and set from the memory , they just overwrite the process of taking it from the memory and then setting it to the memory
