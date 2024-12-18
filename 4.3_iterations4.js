//REDUCE:
const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function(accumulator, currVal){
//     console.log(`acc:${accumulator} and current value is${currVal}`)
//     return accumulator + currVal
// }, 0)
// doing same using arrow function
const myTotal = myNums.reduce((acc,curr)=> acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);