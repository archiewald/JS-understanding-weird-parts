
// function statement
function greet(name) {
    console.log("Hello " + name)
}

greet('John');

//using function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};

greetFunc('John');


//immediately invoke function expression (IIFE)
var greeting = function(name) {
    return 'Hello ' + name;
}('Joohhnnn');

console.log(greeting);


3;
"Im a string";
{
    name: "john"
};

var firstname = 'John';


// inside IIFE
(function(name) {
    var greeting = "hello "
    console.log(greeting + name);
}(firstname));
