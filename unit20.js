// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
const input1 = document.querySelector('.i-1');
const out1 = document.querySelector('.out-1');

function t1(event) {
    out1.innerHTML = event.key;
    return event;
}
input1.onkeypress = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */
const input2 = document.querySelector('.i-2');
const out2 = document.querySelector('.out-2');

function t2(event) {
    out2.innerHTML = event.charCode;
    return event;
}
input2.onkeypress = t2;

// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */
const input3 = document.querySelector('.i-3');
const out3 = document.querySelector('.out-3');


function t3(event) {

    let code3 = event.charCode;
    if (code3 >= 48 && code3 <= 57) {
        out3.innerHTML = 'false - цифра';
    } else {
        out3.innerHTML = 'true - символ';
    }
    return event;
}
input3.onkeypress = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
const input4 = document.querySelector('.i-4');
const out4 = document.querySelector('.out-4');

function t4(event) {
    let code4 = event.charCode;
    if (code4 >= 65 && code4 <= 90) {
        out4.innerHTML += event.key.toLowerCase();
    } else {
        out4.innerHTML += event.key;
    }
    // out4.innerHTML = event.charCode;
    return event;
}

input4.onkeypress = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

const input5 = document.querySelector('.i-5');
const out5 = document.querySelector('.out-5');

function t5(event) {
    let code5 = event.charCode;
    if (code5 <= 65 && code5 >= 90) {
        out5.innerHTML += event.key;
    } else {
        out5.innerHTML += event.key.toUpperCase();
    }
    // out5.innerHTML = event.charCode;
    return event;
}

input5.onkeypress = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

const input6 = document.querySelector('.i-6');
const out6 = document.querySelector('.out-6');

function t6(event) {
    let code6 = event.charCode;
    let simvol = event.key;
    if (code6 >= 65 && code6 <= 90) {
        return false;
    } else if ((code6 >= 97 && code6 <= 122) || (code6 >= 48 && code <= 57)) {
        out6.innerHTML += simvol;
    }
    // out6.innerHTML = event.charCode;
    return event;
}

input6.onkeypress = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
const input7 = document.querySelector('.i-7');
const out7 = document.querySelector('.out-7');
const a7 = [];

function t7(event) {

    a7.push(event.key);
    let rand = a7.sort(function() { return 0.5 - Math.random() })[0];
    out7.innerHTML = rand;
}
input7.onkeypress = t7;


// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
const input8 = document.querySelector('.i-8');
const out8 = document.querySelector('.out-8');
const arr8 = {
    i: '1',
    o: '0',
    l: '7',
    v: 'w'
}

function t8(event) {
    // out8.textContent = event.key;
    // input8.value += event.key;
    for (let key in arr8) {
        if (event.key === key) {
            out8.textContent += arr8[key];
        }
    }

    // return false;
}
input8.onkeypress = t8;
// _______
const input9 = document.querySelector('.i-9');
const out9 = document.querySelector('.out-9');
let count = 0;

function t9(event) {
    if (event.key === "ArrowDown") {
        count++;
    }
    out9.textContent = count;
    return false;
}
input9.onkeydown = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
const input10 = document.querySelector('.i-10');
const out10 = document.querySelector('.out-10');
const div10 = document.querySelector('.div-10');
let w = 75;
let h = 75;

function t10(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        w++;
        div10.style.width = w + 'px';
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        h++;
        div10.style.height = h + 'px';
    }
    return false;
}
input10.onkeydown = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/
const input11 = document.querySelector('.i-11');
const keyS = document.querySelectorAll('.key');


function t11(event) {
    keyS.forEach((elem) => {
        elem.classList.remove('active_key');
    });
    document.querySelector(`.key[data-key="${event.keyCode}"]`).classList.add('active_key');
}

input11.onkeydown = t11;


// console.log(arr11);