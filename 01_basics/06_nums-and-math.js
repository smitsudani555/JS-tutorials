const score = 40

const target = new Number(100)

console.log(score);
console.log(target);

console.log(target.toString().length);
console.log(score.toFixed(1));


const othernum=123.46
console.log(othernum.toPrecision(4));

const hund = 10000000
console.log(hund.toLocaleString('en-IN'));

// <------------------------math----------------------->

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(2,3,4,5,6));
console.log(Math.max(5,7,6,9,44));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) + min)
