const promise_one = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

promise_one.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("async task2");
        resolve()
        
    }, 1000);
}).then(function(){
    console.log("async resolve execute");
    
})

const promise_three = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username : "smit",pass : "123"})
    },1000)
})

promise_three.then((user)=>{
    console.log(user);
    
})

const promise_four = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username : "smit",pass : "123"})
        }
        else
        {
            reject('ERROR :smething went wrong')
        }
    })
})

promise_four.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log((username));
}).catch((err) => {
    console.log(err);
}).finally(() =>{
    console.log("whatever happen this will run");
    
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


async function custom_promise_five(){
    try{
        const responce = await promiseFive
        console.log(responce);
        
    }
    catch(error){
        console.log(error);
        
    }
}
custom_promise_five()


async function getalluser(){
    try{
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await responce.json()

        console.log(data);
        
    }
    catch(err){
        console.log(err);
        
    }
}

getalluser()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((responce) => {
    return responce.json()
}).then((data) => {
    console.log(data);
    
}).catch((err) => {
    console.log(err);
    
})