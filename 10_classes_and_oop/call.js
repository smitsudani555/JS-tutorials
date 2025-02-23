
function setusername(username){
    this.username = username
    console.log("called");
    
}

function createuser(username,score,password){
    setusername.call(username)

    this.score = score
    this.password = password
}

const chai = new createuser("chai",100,123)
console.log(chai);
