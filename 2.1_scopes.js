// {} :  scope of the function
var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER:", a)
}

//console.log(a); we get an error saying a is not defined
//console.log(b); similar error
console.log(c); // but this gives us a result but it is out of its scope which is not right and hence we do not use this commonly

// everything inside it is known as block scope and everything outside it is known as global scope, anything written in gloabal scope is available almost everywhere within the program but anything in block scope is only availaible within the block and not outside the block
console.log(a);

// NESTED SCOPE:
function one(){
    const username = "saumya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

// two can access everything in one as for two one is global scope, but one cannot access the variables of two as they are declared inside two and hence not available outside


if(true){
    const username = "saumya"
    if(username === "saumya"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

// ++++++++++++++ interesting ++++++++++++++

//case1
function addone (num){
    return num+1
}
addone(5)
//case 2
const addtwo = function(num){
    return num +2
}
addtwo(5)
// in case1 we can access the function and it can even be executed before declaration but in case 2 since we are storing it in a const we cannot access or execute the function before declaring it , it will throw an error