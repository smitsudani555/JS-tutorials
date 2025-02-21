const obj = {
    js : "javascript",
    cpp : "c++",
    py : "python"
}

for(const key in obj){
    console.log(key);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key of programming){
    console.log(key);
    
}

for(const key in programming){
    console.log(key);
    
}

console.log("???????????????????????????????????");

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key of map) {
    console.log(key);
}

