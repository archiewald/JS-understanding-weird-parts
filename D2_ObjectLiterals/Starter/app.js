var me = {
    firstname: 'Arczi',
    lastname: 'Kozubczi',
    address: {
        street: 'Walowa 1',
        city: 'Olza'
    }
};

function greet(person){
    console.log("hi " + person.firstname)
}

greet(me);

greet({
    firstname: "Kasia",
    lastname: "Charuza"
})