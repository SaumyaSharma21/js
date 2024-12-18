//array

const myArr = [0, 1, 2, 3, 4,5]
//arrays in javascript are resizable
//they cannot be accesed using arbitrary strings
// they always make shallow copies, i.e their properties share the same reference point

const myHeros = ["shaktiman", "naagraaj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

//ARRAY METHODS

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // removes the last value from the arr
myArr.unshift(9) // adds element to the start of the arr
myArr.shift() // removes element from the start of the arr

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice , splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

//splice changes the array, the portion in removed, origibal array gets mnipulated , this does not happen in slice






