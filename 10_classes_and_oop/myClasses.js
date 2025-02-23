class user{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptpassword(){
        return `${this.password}aaa`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new user("chai","chai@gmail.com","bhagira")

console.log(chai.encryptpassword());
console.log(chai.changeusername());


//behind the scene

function User(username,mail,password){
    this.username = username
    this.mail = mail
    this.password = password


}

User.prototype.encryptpassword = function(){
    return `${this.password}nji`
}

User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","a@gmail.com","wesrdtygu")

console.log(tea.encryptpassword());
console.log(tea.changeusername());


