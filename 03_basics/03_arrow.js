const user = {
    username: "hitesh",
    price: 999,

    message: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.message()
// user.username="smit"
// user.message()


// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

chai()


// const addtwo = (num1,num2) => {
//     return num1+num2
// }

const addtwo = (num1,num2) => num1+num2

console.log(addtwo(3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()