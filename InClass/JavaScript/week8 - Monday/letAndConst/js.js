//ex1 
function check() {
    let b = 2;
    console.log(b);
    {
        // TODO inlocuiti linia asta de cod astfel incat sa avem ambele console.log-uri sa ruleze si sa printeze amandoua pe rand 2 si 3
      let b = 3;
        console.log(b);
    }
}


function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log(foo());
// because of hoisting, the console.log() will return 8; bar() with return 8 is moved before return bar();









