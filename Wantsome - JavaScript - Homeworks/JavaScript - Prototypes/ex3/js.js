function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'trunghi';
}

const forma = {
    type: '',
    getType: function() {
        return this.type;
    }
};



Triangle.prototype = forma;
Triangle.prototype.constructor = Triangle;
let triunghi = new Triangle(2, 4, 6);
Triangle.prototype.getPerimeter = function() {return this.a + this.b + this.c};

triunghi.constructor;                          // Triangle(a, b, c)    
forma.isPrototypeOf(triunghi);       // true
triunghi.getPerimeter();                       // 12
triunghi.getType();                            // "triunghi"

