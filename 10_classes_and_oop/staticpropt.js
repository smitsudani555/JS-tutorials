class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is : ${this.username}`);
        
    }

    static createid(){
        return '123'
    }
}

const smit = new user("smit")

smit.logme()
//smit.createid()

class teacher extends user{
    constructor(username,id){
        super(username)
        this.id = id
    }


}

const phone = new teacher("i-phone",123)

// phone.logme()
// // phone.createid()

// console.log(phone.createid());
