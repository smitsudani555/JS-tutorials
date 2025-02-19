// singleton
// Object.create

// object literals


const my_sym = Symbol('key1')

const js_user = {
    name:"smit",
    "full name":"smit sudani",
    [my_sym] : "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(js_user.age)
console.log(js_user[my_sym]);

js_user.email="smit@google.com"
// Object.freeze(js_user)
js_user.email="smitbhai@gmail.com"
console.log(js_user);

js_user.gretting = function(){
    console.log("Hello Js User");
    
}

js_user.gretting2 = function(){
    console.log(`Hello user i am ${this.name}`);
    
}

console.log(js_user.gretting());
console.log(js_user.gretting2());

