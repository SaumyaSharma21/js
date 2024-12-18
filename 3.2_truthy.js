// truthy and falsy values

const userEmail = "abc@gmail.com"
if(userEmail){ // truthy value : assuming the string given in argument is true
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

// falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values : "0", 'false', " ", [], {}, function(){}

// if(userEmail.length == 0){
//     console.log("array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj). length === 0){
    console.log("object is empty");
}

//Nullish Coalescing Operator (??) : null undefined

let val; 
//val1  = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator (smaller of else synatx )
// codition ? true : false
const icedTea = 100
icedTea >= 80 ? console.log("less than 80") : comsole.log("more than 80");
