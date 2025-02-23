let myhero = ["thor","spider-man"]

let heropower = {
    thor : "hammer",
    spider_man : "sling",

    get_spider_power : function(){
        console.log(`spiderman power is : ${this.spider_man}`);
        
    }
}


Object.prototype.hitesh = function(){
    console.log("hitesh is present in all object");
    
}


Array.prototype.heysmit = function(){
    console.log("smit is present in all array");
    
}


heropower.hitesh()
myhero.hitesh()
myhero.heysmit()
// heropower.heysmit()


const user = {
    name : "smit",
    email: "smit@dada.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user

//modern syntex

Object.setPrototypeOf(TeachingSupport,Teacher)


//imp

let anothername = "smit the don        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
    
}

anothername.trueLength()
"smit  ".trueLength()
"ice cube".trueLength()