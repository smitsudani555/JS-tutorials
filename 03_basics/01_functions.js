function saymyname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

saymyname()

function addtwonum(num1,num2){
    return num1+num2
}

const result = addtwonum(5,7)
console.log(result);

function loginusermessage(username = "smit")
{
    if(!username){
        console.log("please enter valid username")
        return 
    }
    return `${username} is valid`
}
console.log(loginusermessage("bhagira"));


function calculatecartprice(num1,num2,...num3){
    return num3
}
console.log(calculatecartprice(100,200,300,400,500));

const user={
    username : "smit",
    price:199
}

function handleobj(anyobj){
    console.log(`${anyobj.username} is name and ${anyobj.price} is a price`)
}
handleobj(user)



const arr=[100,200,3004,500,6090]

function myfunc(arr){
    console.log(arr[1]);
    
}

myfunc(arr)