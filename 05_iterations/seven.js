const arr = [1,2,3,4,5,6,7,78,9]

const newarr = arr.map((val)=>{return val*10})
                    .map((val) => val+1)
                    .map((val) => val >=40)

console.log(newarr);
