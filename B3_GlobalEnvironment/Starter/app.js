b();
console.log(a); //why undefined? hoisting!

var a = 'Hello World';

function b() {
    console.log('Called b!');
}

