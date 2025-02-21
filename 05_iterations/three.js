const arr = [1,3,4,5,6]

for(const data of arr){
    console.log(data);
    
}

const greet = "hello word"

for(const char of greet){
    console.log(char);
    
}


// maps

const map = new Map()
map.set("IN","INDIA")
map.set("USA","america")
map.set("GE","germany")

console.log(map)


for(const [key,value] of map){
    console.log(key+" "+value);
    
}

const obj = {
    game1:"chess",
    game2:"kabaddi",
}

for(const [key,value] in obj){
    console.log(key + "   "+value);
    
}