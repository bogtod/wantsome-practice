// Ex 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
//      raporta acest lucru in consola. (exemplu: “2 este numar par”);
//      Scrieti functia in doua variante: while si for.

//creez o functie named
function exOneWithFor() {
    //folosing 'for', iteratia va porni de la 0 (i=0) si se va opri la 20 (i<21); variabila i se incrementeaza cu 1 (i++)
    for(var i = 0; i < 21; i++) {
        //pentru fiecare iteratie se verifica daca atunci cand se imparte i la 2 da valoarea reziduala 0 (i % 2)
        if(i % 2 === 0) {
            //daca valoarea reziduala este 0, inseamna ca i este numar par
            console.log(`${i} este numar par`);
        } else {
            //daca valoarea reziduala nu este 0, inseamna ca i este numar impar
            console.log(`${i} este numar impar`);
        }
    }
}

//creez o functie named
function exOneWithWhile() {
    //declara variabila i si ii dau valoarea 0;
    var i = 0;

    //pornesc while ce va rula atat timp cat i este mai mic decat 21
    while(i < 21) {
        //pentru fiecare iteratie se verifica daca atunci cand se imparte i la 2 da valoarea reziduala 0 (i % 2)
        if(i % 2 === 0) {
            //daca valoarea reziduala este 0, inseamna ca i este numar par
            console.log(`${i} este numar par`);
        } else {
            //daca valoarea reziduala nu este 0, inseamna ca i este numar impar
            console.log(`${i} este numar impar`);
        }

        //la sfarsitul fiecarei interatii, i se va incrementa cu 1
        i++;
    }
}






// Ex 2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
//     rezultatul. (exemplu: “3*9=27”).
//     Scrieti functia in doua variante: while si for

// declar named function
function exTwoWithFor() {
    //creez o variabila careia ii dau valoarea 9 (multiplicator)
    var multiplicator = 9;

    //folosind 'for', iteratia va porni de la 0 (i=0) si se va opri la 10 (i<11); variabila i se incrementeaza cu 1 (i++)
    for(var i = 0; i < 11; i++) {
        //returnam in consola variabila "i * multiplicator(9) = " apoi rezultatul inmultirii celor doua
        console.log(`${i} * ${multiplicator} = ${i*multiplicator}`)
    }
}


function exTwoWithWhile() {
    //declar variabila pentru multiplicator (9) si setez valoarea lui i la 0
    var multiplicator = 9;
    var i = 0;

    //pornesc while ce va rula atat timp cat i este mai mic decat 21
    while(i < 11) {
        //returnam in consola variabila "i * multiplicator(9) = " apoi rezultatul inmultirii celor doua
        console.log(`${i} * ${multiplicator} = ${i*multiplicator}`)

        //la sfarsitul fiecarei iteratii, i se va incrementa cu 1
        i++
    }
}



// Ex 3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
//     (exemplu: 1 * 0 = 0
//     1 * 1 = 1
//     …
//     1 * 10 = 10 )
//     Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.

//creating named function
function exThreeWithFor() {
    // vor fi nevoie de doua 'bucle' for: una pentru inmultit si alta pentru inmultitor
    // inmultitul va fi variabila i, iar inmultitorul va fi variabila x

    //prima iteratie va porni de la 0 (i=0) si se va opri la 10 (i<11); variabila i se incrementeaza cu 1 (i++)
    for(var i = 0; i < 11; i++) {
        //se declara o variabila pentru text
        var multiText = `Inmultirea lui ${i}: \n`;

        //aici porneste urmatoarea bucla pentru x (inmultitor), ce se va itera de 10 ori la fiecare iteratie a buclei anterioare
        for(var x = 0; x < 11; x++){
            //la variabila text de mai sus se va adauga rezultatul
            multiText += `${i} * ${x} = ${i*x} \n`
        }

        //dupa concatenarea tuturor rezultatelor de la fiecare iteratie a lui x, se vor printa in consola
        console.log(multiText);
    }
}


function exThreeWithWhile() {

    // vor fi nevoie de doua 'bucle' for: una pentru inmultit si alta pentru inmultitor
    // inmultitul va fi variabila i, iar inmultitorul va fi variabila x

    //se declara valoarea initiala a lui i
    var i = 0;

    //se porneste bucla while ce va rula atat timp cat i ramane mai mic decat 11
    while(i < 11) {
        //se creeaza variabila text; aceasta se va recrea la fiecare iteratie a lui 'i'
        var multiText = `Inmultirea lui ${i}: \n`;

        //se declara valoarea initiala a lui 'x'
        var x = 0;

        //se porneste bucla while ce va rula atat timp cat 'x' ramane mai mic decat 11
        while(x < 11) {
            //la fiecare iteratie a lui 'x', se adauga rezultatul in variabila text
            multiText += `${i} * ${x} = ${i*x} \n`;

            //la sfarsitul fiecarei iteratii a lui 'x', acesta se va incrementa cu 1
            x++;
        }

        //la fiecare iteratie a lui 'i' se va printa concatenarea rezultatelor inmultirii lui 'i' cu fiecare iteratie a lui 'x'
        console.log(multiText);

        //la sfarsitul fiecarei iteratii a lui 'i', acesta se va incrementa cu 1
        i++;
    }
}



// Ex 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
//     poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
//     calificativul B \n ...samd “). Atentie: Rezultatul calificativul trebuie sa fie obtinut prin utilizarea functiei
//     dezvoltate la tema anterioara !


// functia de la tema anterioara:
var markToGrade = function(markVar) {
    var grade;
    // switch between grades based on mark's value
    switch(true) {
        case markVar >= 1 && markVar <= 3:
            grade = 'E';
            break;
        case markVar >= 4 && markVar <= 6:
            grade = 'D';
            break;
        case markVar >= 7 && markVar <= 8:
            grade = 'B';
            break;
        case markVar === 9:
            grade = 'A';
            break;
        case markVar === 10:
            grade = 'A+';
            break;
        default:
            grade = '';
    }
    return grade;
}


// creez named function
function exFourWithFor() {
    //definesc o variabila goala pentru text
    var resultText = '';

    //iteratiile vor porni de la de la 0 (i=0) si se vor opri la 10 (i<11); variabila i se incrementeaza cu 1 (i++)
    for(var i = 1; i < 11; i++) {
        //la fiecare iteratie se apeleaza functia markToGrade cu argumentul i, apoi se concateneaza la variabila resultText rezultatul
        resultText += `Pentru ${i} obtii calificativul ${markToGrade(i)} \n`
    }

    //dupa toate iteratiile, se printeaza in consola textul final ce contine rezultatele de la fiecare iteratie
    console.log(resultText)
}


















