const mynum = [1,2,3,4,5,6,7,8,9]

const mytotal = mynum.reduce(function(acc,num) {
    console.log(num);
    
    return acc+num
},0)

console.log(mytotal);


const mutotal = mynum.reduce((acc,num) => acc+num,0)
console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);