let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCD = new Date(2023,0,23)
let myCDa = new Date(2023,0,14,5,25)
let myCDb = new Date("10-2-2024")

console.log(myCD);
console.log(myCDa);
console.log(myCDb);

console.log(myCDb.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
