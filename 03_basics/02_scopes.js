const a=10
var b=20
let c=30

if(true){
    const a=1
    var b=2
    let c=3

    console.log(a);
    console.log(b);
    console.log(c);
    
}

console.log(a);
console.log(b);
console.log(c);

console.log("__________________________________");


function one(){
    let name="smit"
    function two(){
        console.log(name)
        let age=30
    }
    two()
    //console.log(age);
    
}
one()

const fn = function(num){
    return num+1
}

console.log(fn(10))
