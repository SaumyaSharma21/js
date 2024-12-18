//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai (){ // it is a named iffe
    console.log(`DB CONNECTED`);
})();
// whenever we put anything in paranthesis a block is created and functions can be executed inside it 
// ()()first paranthesis is the defination andthe second is the execution
// iffe is not just a function which can immediately be executed but it is used to remove the pollution from the(variables or any declarations of the) global scope 
// in js the iffe does not know where to end so we should use a semicolon at the end to end the function 
(function aurcode(){
    console.log(`DB CONNECTED TWO`);
}) ();
// using arrow 
(()=>{
    console.log(`DB CONNECTED THREE`);
})();

((name) => { // this is an unnamed iffe
    console.log(`DB CONNECTED TO ${name}`);
})('saumya')