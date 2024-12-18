
function sayMyName (){
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("M");
    console.log("Y");
    console.log("A");

}
// if we only write sayMyName , it is the reference of our function
// if we add the paranthesis to it, i.e. sayMyame(), then it is the execution of the function
sayMyName()

// function addNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log(saumya);// in js in functions whatever we write after return id not executed
    return number1 + number2
}


addNumbers(); // if we do not give the arguments in the paranthesis we get NaN in the output
 const result = addNumbers(3,4)
 //console.log("result:", result);


 function loginUserMessage(username = "sam"){ // now we will not enter the block of code as the username will never be undefined as we have already given it a value
    if(username === undefined){ // OR if(!username)
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
 }

 //console.loh(loginUserMessage("saumya"))
console.log(loginUserMessage("saumya")); // this will simply be overwritten , sam will change to the value given here

// when we do not know how many parameters are there, we use resr/spread operator syntax being ...x.., we are returned by an array
function calculateCartPrice(...num1){
    return num1
}
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));
// object
const user ={
    username : "saumya",
    prices : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)
handleObject({
    username : "sam",
    prices : 399
})

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));
//OR
console.log(returnSecondValue([200, 400, 500, 1000]));


