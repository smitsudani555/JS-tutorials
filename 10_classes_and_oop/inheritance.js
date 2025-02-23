class user{
    constructor(name){
        this.name = name
    }

    logme(){
        console.log(`username is this : ${this.name}`);
        
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password = password
    }

    addCourse(){
        console.log(`name is ${this.username}`);
        
    }
}

const chai = new teacher("chai","chai@gmail.com","iugyfd")

chai.logme()

const masalachi = new user("masala he bhai")

masalachi.logme()


console.log(chai instanceof user);
// console.log(user instanceof chai);


console.log(chai instanceof teacher);
console.log(masalachi instanceof user);
// console.log(masalachai instanceof teacher);
