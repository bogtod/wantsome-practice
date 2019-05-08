
const forma = function() {};

function Triangle(l1, l2, l3) {
    this.name = 'triunghi';
    this.l1 = l1;
    this.l2 = l2;
    this.l3 = l3;
    this.getPerimeter = function() {
        return l1 + l2 + l3;
    }
    this.getType = function() {
        return this.name;
    }
}

Triangle.prototype = new forma();


let triunghi = new Triangle(2, 4, 6);
triunghi.prototype = new forma();
triunghi.constructor;                 // Triangle(a, b, c)    
forma.isPrototypeOf(triunghi);        // true
triunghi.getPerimeter();              // 48
triunghi.getType();                   // "triunghi"

