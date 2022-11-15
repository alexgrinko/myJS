// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */
const button1 = document.querySelector('.b-1');

button1.onclick = () => {
    localStorage.setItem('5', 11);
};
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

const button2 = document.querySelector('.b-2');
let a2 = [7, 6, 5];
button2.onclick = () => {
    localStorage.setItem('a2', JSON.stringify(a2));
};


// ваше событие здесь!!!


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

const button3 = document.querySelector('.b-3');
const out3 = document.querySelector('.out-3');

let t3 = localStorage.getItem('a2');
t3 = JSON.parse(t3);

button3.onclick = () => {
    for (let i = 0; i < t3.length; i++) {
        out3.innerHTML += i + ' ' + t3[i] + '<br>';
    }

};


// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
const button4 = document.querySelector('.b-4');

const arr4 = {
    'hello': 'world',
    'hi': 'mahai'
};

function t4() {
    localStorage.setItem('arr4', JSON.stringify(arr4));
}
button4.onclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */
const button5 = document.querySelector('.b-5');
const out5 = document.querySelector('.out-5');
let a5 = localStorage.getItem('arr4');
a5 = JSON.parse(a5);

function t5() {
    for (let key in a5) {
        out5.innerHTML += key + ' ' + a5[key] + '<br>';
    }
}
button5.onclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/
const button6 = document.querySelector('.b-6');

function t6() {
    localStorage.clear();
}
button6.onclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
const button7 = document.querySelector('.b-7');
const input7 = document.querySelector('.i-7');
let a7 = [];

function t7() {
    let n7 = input7.value;
    a7.push(n7);
    console.log(a7);
    localStorage.setItem('a7', JSON.stringify(a7));
    input7.value = '';
}
button7.onclick = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */
const button8 = document.querySelector('.b-8');

function t8() {
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}
button8.onclick = t8;
// ваше событие здесь!!!