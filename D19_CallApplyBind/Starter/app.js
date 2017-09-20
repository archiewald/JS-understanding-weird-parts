var person = {
    firstname: "Joe",
    lastname: "Black",
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log("Arguments: " + lang1 + " " + lang2);
    console.log("---------------");
};

var logPersonName = logName.bind(person);

logPersonName();

logPersonName("en");

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);

// function borrowing

var person2 = {
    firstname: "Arczi",
    lastname: "Kozubczi"
}

console.log(person.getFullName.apply(person2));

//function currying

function multiply (a,b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2)
