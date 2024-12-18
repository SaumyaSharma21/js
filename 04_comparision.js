// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* the reason for the result being false, false and null is that an equality checker == and comparisions > < >= <= work differently. comparisions convert null to a number, treating it as a zero, that is why (3) null >= is true and (1) null > 0 is false  that is comparision and equality checker behave differently*/

console.log (undefined == 0);
console.log (undefined > 0);
console.log (undefined < 0);

//STRICT CHECK === (not only checks the values but also checks their data types)
console.log("2" === 2);

//we should avoid such comparisions where the data types are different
