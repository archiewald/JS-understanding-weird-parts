function greet(firstname ="Default 1", lastname = "Default 2", language, ...other) { // "modern way" to set default parameter
    
    language = language || 'en'; // "oldschool" way

    if (!arguments.length){
        console.log("missing parameters")
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log("arg 0: " + arguments[0]);
    console.log("-------------------");
    console.log(other) // log extra parameters!
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', "Doe", "es");
greet('John', "Doe", "es", 'additional1', 'additional2');