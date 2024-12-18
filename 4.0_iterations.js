// for loop

for (let i = 0; i< 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number")
    }
    console.log(element);
    
}
for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop values :${j}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
}
let myArray = [ "flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

/// break , continue
// for (let index = 2; index < 20; index++) {
//     if(index == 5){
//         console.log('detected 5');
//         break;
//     }

//     console.log(`value of i is ${index}`);
    
// }

for (let index = 2; index < 20; index++) {
    if(index == 5){
        console.log('detected 5');
        continue;
    }

    console.log(`value of i is ${index}`);
    
}

//while loop
let index = 0
while(index <= 10){
    console.log(`value of index is ${index}`)
    index = index + 2
}

let myArr = ['flash', 'batman', 'superman']
let arr = 0
while(arr<myArr.length){
    console.log(`value is ${myArr[arr]}`);
    arr = arr +1
}

// do while loop {firt execution then condition is checked}
let score = 11
do{
    console.log(`score is ${score}`);
    score++
} while(score <= 10);

// for of loop
const arr1 = [1, 2, 3, 4, 5]

for (const num of arr1) {
    console.log(num);
    
}
const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
    
}

// maps 
const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('FR', "france")
map.set('IN', "india")

console.log(map);

for(const [key, value] of map){
    console.log(key, ':', value);
}

// const obj = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for(const [key, value] of obj){
//     console.log(key, ':', value)
// }
//for of loop does not work for objects so there in another loop named:
// FOR IN LOOP

const obj1 = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in obj1) {
    console.log(`${key} shortcut is for ${obj1[key]}`);

}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
// maps are not iteratable so this loop does not work 

//FOR EACH LOOP

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val){ 
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const mycode = [
    {

        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },

]

mycode.forEach( (item) => {
    console.log(item.languageName);
})




