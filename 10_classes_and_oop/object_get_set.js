const User = {
    _email : "smit@a.com",
    _pass : "ert54",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const obj = Object.create(User)
console.log(obj.email);
