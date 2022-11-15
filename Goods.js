class Goods {
    constructor(a, b, c, d, e) {
        this.name = a;
        this.amount = b;
        this.image = c;
        this.count = d;
        this.div = e;
    }
    draw() {
        document.querySelector(this.div).innerHTML = `изображение ${this.image}, товар ${this.name}, цена ${this.amount} $, распрадажа есть? - ${this.sale}`
    }
}

let goods = new Goods('samsung', '500', 'img', '7');
console.log(goods);

let goods2 = new Goods('iphone', '1000', 'img', '1', '.out-4');
goods2.draw();