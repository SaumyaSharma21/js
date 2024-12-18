// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach ( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);
// for each does not return 

const myNums = [1, 2, 3, 4, 5, 6, ,7 ,8 ,9, 10]

//1 const newNums = myNums.filter( (num) =>num > 4 ) // Or

//2 const newNums = myNums.filter( (num) =>{
//     return num>4
// })

//3  const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

//console.log(newNums);

const books = [
    { title: 'book one', genre: 'ficton', publish: 1981, edition:2004},
    { title: 'book two', genre: ' non-ficton', publish: 1992, edition:2008},
    { title: 'book three', genre: 'history', publish: 1999, edition:2007},
    { title: 'book four', genre: 'non-ficton', publish: 1989, edition:2010},
    { title: 'book five', genre: 'science', publish: 2009, edition:2014},
    { title: 'book six', genre: 'ficton', publish: 1987, edition:2010},
    { title: 'book seven', genre: 'history', publish: 1986, edition:1996},
    { title: 'book eight', genre: 'science', publish: 2011, edition:2016},
    { title: 'book nine', genre: 'non-ficton', publish: 1981, edition:1989},
]

let userBooks = books.filter( (bk) => bk.genre === 'history' )

userBooks = books.filter((bk) =>{
    return bk.publish >= 1995 && bk.genre ==="history"
} )
console.log(userBooks);




