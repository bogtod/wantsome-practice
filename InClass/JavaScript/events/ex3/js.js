//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

//3
// Bonus: faceti sa functioneze si la key press pe langa click
let solution = document.getElementById('sol')


document.getElementById('sqr-btn').addEventListener('click', sqrNum);
document.getElementById('square').addEventListener('keyup', sqrNum);
function sqrNum() {
    let val = document.getElementById('square').value;
    solution.innerHTML = val * val;
}


document.getElementById('half-btn').addEventListener('click', halfNum);
document.getElementById('half').addEventListener('keyup', halfNum);
function halfNum() {
    let halfVal = document.getElementById('half').value;
    solution.innerHTML = halfVal / 2
}


document.getElementById('prc-btn').addEventListener('click', percentNum);
document.getElementById('percent1').addEventListener('keyup', percentNum);
document.getElementById('percent2').addEventListener('keyup', percentNum);
function percentNum() {
    let percent1 = document.getElementById('percent1').value;
    let percent2 = document.getElementById('percent2').value;
    
    solution.innerHTML = `${percent1/percent2 * 100}%`
}


document.getElementById('area-btn').addEventListener('click', areaCircle);
document.getElementById('area').addEventListener('keyup', areaCircle);
function areaCircle() {
    let raza = document.getElementById('area').value;
    solution.innerHTML = 3.14 * (raza * raza)
}












