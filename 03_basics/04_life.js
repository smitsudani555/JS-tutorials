
// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`DB Connected`);
    
})();

((name) => {
    console.log(`name is ${name}`);
    
})('smit')