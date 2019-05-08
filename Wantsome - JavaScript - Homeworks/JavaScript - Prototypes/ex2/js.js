var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]
let Trainer = function() {
    this.teach = function(subject) {
        console.log(`${this.name} is teaching ${subject}`);
    }
}

Trainer.prototype = new Person();

let trainer = new Trainer();

trainer.initialize("Ovi", 29);
trainer.teach("Prototypes");