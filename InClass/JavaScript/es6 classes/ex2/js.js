//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 

class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    };
    eatFood() {
        return `${this.name} is eating`;
    };
    sleep() {
        return `${name} is sleeping`;
    };
    wakingUp() {
        return `${name} is waking up`;
    };
};

class Elephant extends Animal {
    
    walking() {
        return `${this.name} is walking`;
    };
    rage() {
        return `${this.name} is rageing`;
    };
    showBehaviour() {
        return `${super.eatFood()} ${this.rage()}`;
    };
    dailyRoutine() {
        return `${super.wakingUp()} ${this.rage()} ${super.eatFood()} ${super.sleep()}`;
    };
}

let jon = new Elephant('jon', 350);