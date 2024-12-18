// if statement
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature == 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50 ")

// }

//comparision operators : <, >, <=, ==(used to compare equality whereas = is used for simply assigning the value), !=, ===(strict equal to)

// const score = 200
// if (score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`Use poer : ${power}`)

// short hand notation:
const balance = 1000
//if(balance > 500) console.log("test"), console.log("test2"); // implicit scope , not good coding practice, not readable 

// if( balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200")
// }


const UserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//&& 
if(UserLoggedIn && debitcard ){
    console.log("allow to  buy");
}
//||
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}


