greet();

function greet() {
    console.log('Hi');
}

// anonymousGreet();

var anonymousGreet = function () {
    console.log('HI!');
}

anonymousGreet();

function log(a){
    a();
}

log(function() {
    console.log("HI (function passed to function so cool!!!)");
});