//DATE

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

//let newDate = new Date(2023, 0, 23)
// months start from 0 in js
//let newDate = new Date(2023, 0, 23, 5, 3)
// let newDate = new Date("2024-01-14")
let newDate = new Date("01-14-2024")
//console.log(newDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/ 1000));

let newDate2 = new Date()
console.log(newDate2);
console.log(newDate2.getMonth()+1);
console.log(newDate2.getDay());


// `${newDate2.getDay()} and the time`

newDate2.toLocaleString('default',{
    weekday : "long"
})
