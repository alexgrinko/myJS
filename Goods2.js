class Goods2 extends Goods {
    constructor(a, b, c, d, e, sale) {
        super(a, b, c, d, e);
        this.sale = true;
    }
}

let goods3 = new Goods2('Nokia', '50', 'img', '5', '.out-6', 'есть');
goods3.draw();