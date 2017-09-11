function makeGreeting(language){

    return function(firstname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }

        if (language === 'pl') {
            console.log('Siema ' + firstname + ' ' + lastname);   
        }
              
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish("John", "Snow");
greetSpanish("John", "Snow");
