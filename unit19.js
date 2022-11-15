// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
const button1 = document.querySelector('.div-1');
const out1 = document.querySelector('.out-1');

function t1() {
    out1.textContent = button1.textContent;
}
button1.onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
const button2 = document.querySelector('.div-2');
const out2 = document.querySelector('.out-2');

function t2(event) {
    if (event.altKey) {
        out2.textContent = true;
    } else {
        out2.textContent = false;
    }
    return event.altKey;
}
button2.onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */
const button3 = document.querySelector('.div-3');
const out3 = document.querySelector('.out-3')
let w3 = 75;

function t3() {
    button3.style.width = w3 + 'px';
    w3 = w3 + 5;
    out3.textContent = `ширина блока ${w3}px`;
}
button3.onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
const button4 = document.querySelector('.div-4');
const out4 = document.querySelector('.out-4')

function t4() {
    out4.textContent = button4.textContent;
}
button4.ondblclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

const button5 = document.querySelector('.div-5');
const out5 = document.querySelector('.out-5')

function t5() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }

}
button5.ondblclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

const button6 = document.querySelector('.div-6');
const out6 = document.querySelector('.out-6')
const ul6 = document.querySelector('.ul-6')

function t6() {
    if (ul6.classList.contains('hide')) {
        ul6.classList.remove('hide');
    } else {
        ul6.classList.add('hide');
    }

}
button6.ondblclick = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

const button7 = document.querySelector('.div-7');
const out7 = document.querySelector('.out-7')


function t7() {
    if (button7.classList.contains('active')) {
        button7.classList.remove('active');
    } else {
        button7.classList.add('active');
    }

}
button7.oncontextmenu = t7;

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */


const out8 = document.querySelector('.out-8')
const checkbox = document.querySelector('.ch-8')
const formControl8 = document.querySelector('.form-control');

function t8() {
    formControl8.oncontextmenu = () => {
        if (checkbox.checked) {
            return false;
        } else {
            return true;
        }
    }
}
checkbox.onchange = t8;

// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
const div9 = document.querySelector('.div-9');
let png9 = 1;
// let img9 = `<img src="img/${png9}.png" alt="">`;


function t9() {
    png9 = 2;
    div9.innerHTML = `<img src="img/${png9}.png" alt="">`;
}
div9.oncontextmenu = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
const div10 = document.querySelector('.div-10');
let png10 = 1;

function t10() {
    png10 = 2;
    div10.innerHTML = `<img src="img/${png10}.png" alt="">`;
}
div10.onmouseenter = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
const div11 = document.querySelector('.div-11');
let png11 = 1;



div11.onmouseenter = () => {
    div11.innerHTML = `<img src="img/${png11}.png" alt="">`;
    png11 = 1;
}
div11.onmouseleave = () => {
    div11.innerHTML = `<img src="img/${png11}.png" alt="">`;
    png11 = 2;
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
const div12 = document.querySelector('.div-12');
div12.onmousedown = () => {
    div12.classList.add('active');
}

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

const div13 = document.querySelector('.div-13');
div13.onmousedown = () => {
    div13.classList.add('active');
}
div13.onmouseup = () => {
    div13.classList.remove('active');
}

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
const div14 = document.querySelector('.div-14');
const button14 = document.querySelector('.b-14');

function t14() {
    div14.classList.add('active');
}
button14.onclick = t14
    // document.querySelector('t-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
const div15 = document.querySelector('.div-15');
let contenetDiv = 1;

function t15() {
    contenetDiv++;
    div15.textContent = contenetDiv;
}
// ваше событие здесь!!!
div15.onmousemove = t15;

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
const div16 = document.querySelector('.div-16');
const out16 = document.querySelector('.out-16');
let w16 = 75;

function t16() {
    div16.style.width = w16 + 'px';
    w16 = w16 + 1;
    out16.textContent = `ширина блока ${w16}px`;
}
div16.onmousemove = t16;
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
const b17On = document.querySelector('.b-17_on');
const b17Off = document.querySelector('.b-17_off');

function t17On() {
    div16.onmousemove = t16;
}

function t17Off() {
    div16.onmousemove = null;
}
b17On.onclick = t17On;
b17Off.onclick = t17Off;
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let w18 = 75;
const div18 = document.querySelector('.div-18');

function t18() {
    div18.style.width = w18 + 'px';
    w18++;
    div18.textContent = w18 + 'px';
}
div18.onmouseenter = t18;

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
const div19 = document.querySelector('.div-19');

function t19() {
    div19.textContent = div19.classList;
}
div19.onmouseout = t19;
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
const progress = document.querySelector('progress');
let valueP = 1;

function t20() {
    valueP++;
    progress.value = valueP;
}
progress.onmousemove = t20;
// ваше событие здесь!!!