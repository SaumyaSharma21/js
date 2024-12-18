const name = "saumya"
const repoCount = 50

//console.log(name + repoCount + "value");
//string interpolation
console.log(`hello my name is ${name} and my repo is{repoCount} `);

//declaring a string 2
const gameName = new String ('user-S') 
console.log(gameName[0]);
console.log(gameName,__proto__);// returns the object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('S'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-1, 2)
console.log(anotherString);

const newStringOne = "    saumya    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saumya.com/abc%20xyz"

console.log(url.replace ('%20', '-'));
console.log(url.includes('saumya'));

console.log(gameName.split('-'));