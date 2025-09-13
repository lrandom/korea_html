/* function greet() {
    console.log("Hello, world!");
}

const greet4 = function(){
    console.log("Hello, world!");
}
greet();

//ECMA Script 2017
//ES6
//context 
const greet2 = () => {
    console.log("Hello, world!");
}

//new function 
const greet3 = new Function("console.log('Hello, world!')");
 */


/* const  greet = function(){
    console.log("Hello, world!");
}

let greet2 = greet;
greet2(); */


//callback function 
//higher order function 
const test = function(callback){
    console.log("call");
    callback();
}

test(function(){
    console.log("Hello, world!");
});

test(function(){
    console.log("Hello, world! 2");
})