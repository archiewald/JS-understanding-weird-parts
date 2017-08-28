var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
console.log(person.firstname);

person.address = new Object();
person.address.street = "Walowa 1"
person.address.city = "Olza"

console.log(person.address.city);