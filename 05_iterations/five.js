const coding = ["java","python","c","cpp","react"]

coding.forEach(function (val) {
    console.log(val);
    
});

coding.forEach(function(val) {
    console.log(val);
    
} )

console.log("????????????????????????????????????");

coding.forEach((val)=>{
    console.log(val);
    
})

console.log("????????????????????????????????????");
console.log("????????????????????????????????????");

function printme(item){
    console.log(item);
    
}

coding.forEach(printme)
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )


console.log("????????????????????????????????????");
console.log("????????????????????????????????????");

const objarr = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

objarr.forEach((value)=>{
    console.log(value.languageFileName);
    
})