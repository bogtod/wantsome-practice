
const Forma = function() {};

function Triangle(a, b, c) {
    this.name = 'triunghi';
    this.l1 = a;
    this.l2 = b;
    this.l3 = c;
    this.getPerimeter = function() {
        return a+b+c;
    }
    this.getType = function() {
        return this.name;
    }
}

// Triangle.prototype = new Forma();


let triunghi = new Triangle(2, 4, 6);

triunghi.constructor;                          // Triangle(a, b, c)    
Forma.prototype.isPrototypeOf(triunghi);       // true
triunghi.getPerimeter();                       // 12
triunghi.getType();                            // "triunghi"

