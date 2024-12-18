const user = {
    username : "saumya",
    price : 999,

    // this keyword is use to refer to the current context, i.e to access all the variables withing the given scope

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this);
// in browser the global object is window object but here we have empty object as global object

// function chai(){
//     let username = "saumya"
//     console.log(this.username);
// }
// chai();
// -> this can only be used in an object , it cannot be used in functions

// const chai = function (){
//     let username = "saumya"
//     console.log(this.username)
// }
// this method too gived undefined as output

const chai = () =>{
    let username = "saumya"
    console.log(this);
}

// chai()

// ArROW FUNCTION :
// basic syntax : () => {} , can aldo be held inside a variable

// explicit return method :
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return method :
//const addTwo = (num1, num2) => num1 + num2

//another method
//const addTwo = (num1, num2) => (num1 + num2)
// returning an object , always have to wrap it in paranthesis
const addTwo = (num1, num2) => ({username : "saumya"})

console.log(addTwo(3,4))

// const myArray = [2, 5, 3, 7, 8] 
// myArray.forEach()

