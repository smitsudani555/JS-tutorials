let name="smit"
let age=19

console.log(name+" " +age);

console.log(`Hello my name is ${name} and age is ${age}`);

const gameName = new String('smit-the-king')

console.log(gameName[4]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf('m'));


const newstr = gameName.substring(0,4)
console.log(newstr);

const anstr = gameName.slice(1,4)
console.log(anstr);

const spstr = "    smit     "
console.log(spstr);
console.log(spstr.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('babu'));

console.log(url.split('//'));







