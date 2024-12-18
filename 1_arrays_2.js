const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", " batman"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);
//SPREAD OPERATOR

const all_newHeroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_newHeroes);
const another_arr = [1, 2, 3, [4, 5, 6,], 7, [6, 7,[4, 5]]]
const realarr = another_arr.flat(Infinity)
console.log(realarr);

console.log(Array.isArray("saumya"));
console.log(Array.from("saumya"));
console.log(Array.from({name: "saumya"}))
// interesting , if we do not specify the keys, we get null array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3 ));