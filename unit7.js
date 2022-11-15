let a1 = 8;
const inputT1 = document.querySelector('.input_t1');

function t1() {
    inputT1.value = a1;
}
document.querySelector('.button_t1').onclick = t1;

//2 
const buttonT2 = document.querySelector('.button_t2');
const divT2 = document.querySelector('.out-2');

let a2 = 8;

function f2() {
    return a2;
}

buttonT2.onclick = function() {
    divT2.textContent = f2();
}

//3
function t3(a, b) {
    return a * b;
}
document.querySelector('.button_t31').onclick = function() {
    document.querySelector('.out-31').textContent = t3(3, 4);
}
document.querySelector('.button_t32').onclick = function() {
    document.querySelector('.out-32').textContent = t3(5, 6);
}

//4
const buttonT4 = document.querySelector('.button_t4');
const divT4 = document.querySelector('.out-4');
const inputT4 = document.querySelector('.input_t4');

function t4(a, b) {
    return a - b;
}

buttonT4.onclick = () => {
    const dateOld = t4(2022, +inputT4.value);
    if (dateOld === 1) {
        divT4.textContent = `${dateOld} год`;
    } else if (dateOld < 5) {
        divT4.textContent = `${dateOld} года`;
    } else {
        divT4.textContent = `${dateOld} лет`;
    }
};

//4
const buttonT5 = document.querySelector('.button_t5');
const divT5 = document.querySelector('.out-5');
const inputT5 = document.querySelector('.input_t5');

function t5(massge, name) {
    return (massge + name);
}

buttonT5.onclick = () => {
    const name = inputT5.value;
    divT5.textContent = t5('Hello my frend ', name);

};

//6
const buttonT6 = document.querySelector('.button_t6');
const divT6 = document.querySelector('.out-6');
const inputT61 = document.querySelector('.input_t61');
const inputT62 = document.querySelector('.input_t62');

let t6 = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

buttonT6.onclick = () => {
    let a6 = inputT61.value;
    let b6 = inputT62.value;
    divT6.textContent = t6(a6, b6);

};

//7
const buttonT7 = document.querySelector('.button_t7');
const inputT7 = document.querySelector('.input_t7');
const divT7 = document.querySelector('.out7');

const t7 = () => {
    return `rgb(${Math.random()*256<<0},${Math.random()*256<<0},${Math.random()*256<<0})`;
}

buttonT7.onclick = () => {
    inputT7.value = t7();
    divT7.style.backgroundColor = t7();
}

//8 

const buttonT8 = document.querySelector('.button_t8');
const inputT8 = document.querySelector('.input_t8');
const divT8 = document.querySelector('.out-8');

function t8(str) {
    return str.trim();
}

buttonT8.onclick = function() {
    let a8 = inputT8.value;
    divT8.textContent = t8(a8);
}

//9 

const buttonT9 = document.querySelector('.button_t9');
const inputT9 = document.querySelector('.input_t9');
const textT9 = document.querySelector('.out-9');

function t9() {
    let a9 = inputT9.value;
    return (!(a9 % 2)) ? 'четное' : 'не четное';
};

buttonT9.onclick = function() {
    textT9.textContent = t9();
}

//10

const buttonT10 = document.querySelector('.button_t10');
const inputT101 = document.querySelector('.input_t101');
const inputT102 = document.querySelector('.input_t102');
const textT10 = document.querySelector('.out-10');

function t10() {
    let a10 = inputT101.value;
    let b10 = inputT102.value;
    return (!(a10 > b10)) ? b10 : a10;
};

buttonT10.onclick = function() {
    textT10.textContent = t10() + ' больше';
}