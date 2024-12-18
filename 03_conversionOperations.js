let score = "saumya"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // NaN : not a number

/*
conversions using Number() in line 6
"33" => 33
"33abc" => NaN , but type of NaN is number 
true => 1; false => 0
*/

let isLoggedIn = "saumya"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

/* 
conversions using Boolean() in line 18
1 => true; 
0 => false
"" => false
"saumya" => true
*/
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********** Operations**************//
let value = 3
let negValue = - value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " saumya"

let str3 = str1 +str2
console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2)
// console.log(1 + 2 +"2")
//if string is first all will be converted to string

// console.log(+true);
// console.log(+"");

let num1, num2, num3 
num1 = num2 = num3 = 2 +2

let gameCounter = 100
//gameCounter++;  prefix operator
++gameConter;  //postfix operator
console.log(gameCounter);

/*
link to study:
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
*/

