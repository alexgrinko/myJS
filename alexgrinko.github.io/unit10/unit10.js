// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1
const div1 = document.querySelector('.out-1')
let ar1 = [28, 'Alex', 1994, true];

function f1() {
    div1.innerHTML = ar1 + ' ';
}
document.querySelector('.b-1').onclick = f1;

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

const div2 = document.querySelector('.out-2')
let ar2 = [28, 'Alex', 1994, true];

function f2() {
    let out = '';
    for (let i = 0; i < ar2.length; i++) {
        out += ar2[i] + ' ';
    }
    div2.innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;

// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3
const div3 = document.querySelector('.out-3')
let ar3 = [28, 'Alex', 1994, true];

function f3() {
    for (let i = 0; i < ar3.length; i++) {
        div3.innerHTML = ar3.length;
    }
}

document.querySelector('.b-3').onclick = f3;

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 9

// let ar4 =  // переменную обьявляем эту здесь!!!!
const div4 = document.querySelector('.out-4')
let ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f4() {
    for (let i = 0; i < ar4.length; i++) {
        div4.innerHTML = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

const div5 = document.querySelector('.out-5')
let ar5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f5() {
    for (let i = 0; i < ar5.length; i++) {
        div5.innerHTML = ar5[0] + ' ' + ar5[2] + ' ' + ar5[3];
    }
}

document.querySelector('.b-5').onclick = f5;

// Task 6
//Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

// let ar6 =

const div6 = document.querySelector('.out-6')
let ar6 = ['Alex', 1994, 'Grinko', 8];

function f6() {
    for (let i = 0; i < ar6.length; i++) {
        div6.innerHTML += ar6[i] + ' ';
    }
}

document.querySelector('.b-6').onclick = f6;



// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 6. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

const div7 = document.querySelector('.out-7')
let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];


function f7() {
    for (let i = 0; i < ar7.length; i++) {
        ar7[7] = 'vietnam';
        ar7[6] = 'turkey';
        ar7[5] = 'italy';
        div7.innerHTML += ar7[i] + ' ';
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.15, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

const div8 = document.querySelector('.out-8')
let ar8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f8() {

    for (let i = 0; i < ar8.length; i++) {
        ar8[3] = '3.15';
        ar8[4] = '17';
        ar8[6] = '5';
        div8.innerHTML += ar8[i] + '-';
    }
}

document.querySelector('.b-8').onclick = f8;
// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

const div9 = document.querySelector('.out-9')
let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {
    for (let i = 0; i < ar9.length; i++) {
        div9.innerHTML = ar9[i];
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

const div10 = document.querySelector('.out-10')
let ar10 = [100, 200, 300, 400, 700, 121];

function f10() {
    for (let i = 0; i < ar10.length; i++) {
        let a = ar10[i];
        let b = ar10[0];
        div10.innerHTML = a + b;
    }
}
document.querySelector('.b-10').onclick = f10;

// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11
const div11 = document.querySelector('.out-11');
let ar11 = [2, 3, 4, 5, 6, 7];
div11.innerHTML = ar11 + ' ';

function f11() {
    let ab = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = ab;
    div11.innerHTML = ar11 + ' ';
}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

const div12 = document.querySelector('.out-12');
let ar12 = ['test', 'west', 'list', 'class', 'best'];


function f12() {
    div12.innerHTML = ' ';
    for (let i = 0; i < ar12.length; i++) {
        let ab = ar12[0];
        ar12[0] = ar12[4];
        ar12[4] = ab;
        div12.innerHTML += ar12[i] + ' ';
    }
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3


const div13 = document.querySelector('.out-13');
let ar13 = ['test', 'west', 'list', 'class', 'best'];


function f13() {
    for (let i = 0; i < ar13.length; i++) {

        div13.innerHTML += i + ' ' + ar13[i] + '  ';
    }
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

// один из вариантов но безпробелов...  
// const div14 = document.querySelector('.out-14');
// let ar14 = [1, 2, 3, 'hello', 66];

// function f14() {
//     let a = ar14.reverse();
//     div14.innerHTML = a + ' ';
// }

// document.querySelector('.b-14').onclick = f14;

const div14 = document.querySelector('.out-14');
let ar14 = [1, 2, 3, 'hello', 66];

function f14() {
    for (let i = ar14.length - 1; i >= 0; i--) {
        div14.innerHTML += ar14[i] + ' ';
    }

}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15
const div15 = document.querySelector('.out-15');
let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    for (let i = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            div15.innerHTML += ar15[i] + ' ';
        }
    }
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16
const div16Odd = document.querySelector('.out-16-odd');
const div16Even = document.querySelector('.out-16-even');
let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

function f16() {
    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2) {
            ar16_odd = ar16[i];
            div16Odd.innerHTML += ar16_odd + ' ';
        } else {
            ar16_even = ar16[i];
            div16Even.innerHTML += ar16_even + ' ';
        }
    }
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17
const div17 = document.querySelector('.out-17');
let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f17() {
    div17.innerHTML = ' ';
    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            let arCount = ar17[i];
            div17.innerHTML += arCount + ' ';
        }
    }
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18
const div18 = document.querySelector('.out-18');
let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
let max = ar18[0];

function f18() {
    for (let i = 0; i < ar18.length; i++) {
        if (ar18[i] > max) {
            max = ar18[i];
        }
    }
    div18.innerHTML = 'максимальное число ' + max;
}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

const div19 = document.querySelector('.out-19');
let ar19 = [15, 24, 13, 79, 21, 4, 45, 67];
let min = ar19[0];

function f19() {
    for (let i = 0; i < ar19.length; i++) {
        if (ar19[i] < min) {
            min = ar19[i];
        }
    }
    div19.innerHTML = 'минимум число ' + min;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20
const div20 = document.querySelector('.out-20');
let ar20 = [4, 5, 6, 7, 8, 9, 10];
let sum = 0;

function f20() {
    for (let i = 0; i < ar20.length; i++) {
        sum += ar20[i];
    }
    div20.innerHTML = 'сумма ' + sum;
}


document.querySelector('.b-20').onclick = f20;