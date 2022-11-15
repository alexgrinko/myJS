const buttonT1 = document.querySelector('.button_t1');
const inputT1 = document.querySelector('.input_t1');

let i1 = 0;

buttonT1.onclick = () => {
    while (i1 < 50) {
        i1++;
        console.log(i1);
        inputT1.value += i1 + ' ';
    }
};

const buttonT2 = document.querySelector('.button_t2');
const inputT2 = document.querySelector('.input_t2');

let i2 = 0;

buttonT2.onclick = () => {
    while (i2 < 122) {
        i2 += 2;
        console.log(i2);
        inputT2.value += i2 + ' ';
    }
};



const buttonT3 = document.querySelector('.button_t3');
const inputT3 = document.querySelector('.input_t3');

let i3 = 26;

buttonT3.onclick = () => {
    while (i3 > 7) {
        i3--;
        console.log(i3);
        inputT3.value += i3 + ' ';
    }
};

const buttonT4 = document.querySelector('.button_t4');
const inputT4 = document.querySelector('.input_t4');

let i4 = 80;

buttonT4.onclick = () => {
    while (i4 > 35) {
        i4 -= 3;
        console.log(i4);
        inputT4.value += i4 + '_';
    }
};


const buttonT5 = document.querySelector('.button_t5');
const inputT5 = document.querySelector('.input_t5');

let i5 = 0;

buttonT5.onclick = () => {
    while (i5 < 18) {
        i5++;
        console.log(i5);
        if (i5 % 2 === 0) {
            inputT5.value += i5 + '_**';
        } else {
            inputT5.value += i5 + '_*';
        }
    }
};

const buttonT6 = document.querySelector('.button_t6');
const divT6 = document.querySelector('.div_t6');


let k1 = 0;
let outStr = '';
buttonT6.onclick = () => {
    while (k1 < 3) {
        let i6 = 0;
        while (i6 < 7) {
            i6++;
            outStr += '*';
        }
        outStr += '<br>';
        k1++;
    }

    divT6.innerHTML += outStr;
};


const buttonT7 = document.querySelector('.button_t7');
const inputT7 = document.querySelector('.input_t7');
const divT7 = document.querySelector('.div_t7');


buttonT7.onclick = () => {
    divT7.innerHTM = ' ';
    let i7 = 1 + +inputT7.value;
    console.log(i7);
    while (i7 > 0) {
        i7--;
        divT7.innerHTML += i7 + ' ';
    }
};

const buttonT8 = document.querySelector('.button_t8');
const inputT81 = document.querySelector('.input_t81');
const inputT82 = document.querySelector('.input_t82');
const divT8 = document.querySelector('.div_t8');


buttonT8.onclick = () => {
    divT8.innerHTM = ' ';
    let i81 = inputT81.value - 1;
    let i82 = inputT82.value;

    while (i81 < i82) {
        i81++;
        divT8.innerHTML += i81 + ' ';
    }
};

const buttonT9 = document.querySelector('.button_t9');
const inputT91 = document.querySelector('.input_t91');
const inputT92 = document.querySelector('.input_t92');
const divT9 = document.querySelector('.div_t9');


buttonT9.onclick = () => {

    let i91 = inputT91.value;
    let i92 = inputT92.value;

    if (i91 < i92) {
        divT9.innerHTM = ' ';
        let i91 = +inputT91.value - 1;
        while (i91 < i92) {
            i91++;
            divT9.innerHTML += i91 + ' ';
        }
    } else if (i91 > i92) {
        let i92 = +inputT92.value - 1;
        divT9.innerHTM = ' ';
        // while (i91 > i92) {
        //     i91--;
        //     divT9.innerHTML += i91 + ' ';
        // }
        while (i92 < i91) {
            i92++;
            divT9.innerHTML += i92 + ' ';
        }
    }
};

const buttonT10 = document.querySelector('.button_t10');
const divT10 = document.querySelector('.div_t10');


buttonT10.onclick = () => {
    divT10.innerHTM = ' ';
    let i101 = 1950;
    let i102 = 2000;

    while (i101 <= i102) {

        divT10.innerHTML += i101 + ' ';

        i101 += 2;
    }
};

const buttonT11 = document.querySelector('.button_t11');
const inputT11 = document.querySelector('.input_t11');
const divAbcd = document.querySelectorAll('.div_abcd');


buttonT11.onclick = () => {

    let i11 = 0;
    while (i11 < divAbcd.length) {
        inputT11.value += divAbcd[i11].innerHTML + ' ';

        console.log(divAbcd[i11].innerHTML);
        i11++;
    }
};

const buttonT12 = document.querySelector('.button_t12');
const divT12 = document.querySelectorAll('.div_task12');

buttonT12.onclick = () => {
    let i12 = 0;
    while (i12 < divT12.length) {
        divT12[i12].style.background = 'orange';
        i12++;
    }
};


const buttonT13 = document.querySelector('.button_t13');
const inputT13 = document.querySelectorAll('.input_t13');

buttonT13.onclick = () => {
    let i13 = 0;
    while (i13 < inputT13.length) {
        inputT13[i13].value = i13 + 1;
        i13++;
    }
};

const buttonT14 = document.querySelector('.button_t14');
const inputT14 = document.querySelectorAll('.input_t14');
const divT14 = document.querySelector('.div_t14');

buttonT14.onclick = () => {
    divT14.innerHTML = ' ';
    let i14 = 0;
    while (i14 < inputT14.length) {
        if (inputT14[i14].checked) {
            divT14.innerHTML += inputT14[i14].value + ' ';
        }
        i14++;
    }
};

const buttonT15 = document.querySelector('.button_t15');
const inputT15 = document.querySelector('.input_t15');

const f15 = () => {
    let i = 0;
    while (i <= 11) {
        inputT15.value += 10 - i + ' ';
        inputT15.value += i + ' ';
        i++;
    }
};

buttonT15.onclick = f15;