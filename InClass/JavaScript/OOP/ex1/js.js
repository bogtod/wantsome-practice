function WantsomeStudent(nume, prenume, varsta, telefon) {
    this.nume = nume;
    this.prenume = prenume;
    this.varsta = varsta;
    this.telefon = telefon;
    this.getName = function() {
        return `${this.nume} ${this.prenume}`;
    };
    this.showNumber = function() {
        return `Numarul de telefon este ${this.telefon}`;
    };
    this.ageToRetire = function(retirement) {
        return Number.parseInt(retirement)-this.varsta;
    };
};

const John = new WantsomeStudent('John', 'Popescu', 34, '0754678678');
const Bogdan = new WantsomeStudent('Bogdan', 'Todireanu', 27, '0764757134');
const Maria = new WantsomeStudent('Maria', 'Ionescu', 20, '0745675654');

let personsArr = [John, Bogdan, Maria];

for(let i = 0; i < personsArr.length; i++) {
    console.log(`${personsArr[i].getName()} are ${personsArr[i].varsta} ani si se va pensiona peste ${personsArr[i].ageToRetire(50)} ani.`)
};