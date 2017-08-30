// by value - primitives

var a = 3;
var b;

b=a;
a=2;

console.log(a);
console.log(b);

// by reference - objects includig functions

var c = {greeting: 'hi!'}

var d;

d = c;

c.greeting = 'hello!'

console.log(c);
console.log(d);

// by reference (even as parameters)

function changeGreeting(obj){
    obj.greeting = 'Hola';
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals operator sets new memoryu space

c = {greeting: "Hough"};

console.log(c);
console.log(d);