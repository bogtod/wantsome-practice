// setting variable for the output
var gradeOutput = document.getElementById('gradeOutput');

// adding click event on the button
document.getElementById('markBtn').addEventListener("click", function() {
    // get the mark input's value and make it a number then call the markToGrade function by passing the input as argument
    var markVar = document.getElementById('mark');
    markVar = markVar.value;
    markVar = Number(markVar);
    markToGrade(markVar);
}, false);


// function expression
var markToGrade = function(markVar) {
    // create undefined variable for grades
    var grade;

    // check if the input's value is between 1 and 10
    if(markVar < 1 || markVar > 10) {
        gradeOutput.innerHTML = `
            <span class='alert'>
                Nota trebuie sa fie cuprinsa intre 1 si 10, inclusiv.
            </span>
        `
    } else {
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

        // writing the output
        gradeOutput.innerHTML = `Calificativul corespunzator punctajului ${markVar} este <strong>${grade}</strong>`
    }
}


