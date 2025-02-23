class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get password(){
        return `${this.password}12345`
    }
    set password(value){
        this._password = value
    }
}

const obj = new user("smit@ok.com","qwert5432") 
console.log(obj.email);
