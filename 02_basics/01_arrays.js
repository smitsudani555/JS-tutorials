const myHero = ["thor","ironman","natasa"]
const myArr = [0,1,2,3,4,5]

const myarr2 = new Array(1,2,3,4,5)

myArr.push(6)
myArr.push(7)

console.log(myArr);
myArr.pop()
console.log(myArr)

myarr2.unshift(9)
myarr2.shift()
console.log(myarr2);

console.log((myarr2.includes(9)));
console.log(myarr2.indexOf(2));


console.log("next data ----------------");



const newarr = myArr.join()
console.log(newarr)


console.log("a ",myArr)

const mynarr = myArr.slice(1,5)

console.log(mynarr)

console.log("b ",myArr)

const myn2 = myArr.splice(2,5)
console.log(myn2);
console.log(myArr);
