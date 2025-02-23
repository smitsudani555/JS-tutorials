// const user = {
//     username : "smit",
//     login_count: 9,
//     sign_in: true,

//     guest_detail: function(){
//         console.log(this.username);
//         console.log(this);
        
        
//     }
// }

// console.log(user.username);
// console.log(user.guest_detail());


function user(username,age,isLoggin){
    this.username = username
    this.age = age
    this.isLoggin = true

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this


}

const userOne = new user("smit",12,true)
const userTwo = new user("rano",22,false)

console.log(userOne.greeting());
