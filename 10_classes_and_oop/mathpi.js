const discripter = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(discripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai , "name" , {
    enumerable:true,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
        
    }
}
