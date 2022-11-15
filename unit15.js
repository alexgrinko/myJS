const buttonT1 = document.querySelector('.b-1');
const inputT1 = document.querySelector('.input_t1');
let s1 = new Set();
s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h');
console.log(s1);

buttonT1.onclick = () => {
    inputT1.value = ' посмотри в console';
}

const buttonT2 = document.querySelector('.b-2');
const inputT2 = document.querySelector('.input_t2');
const out2 = document.querySelector('.out2');
let s2 = new Set();

buttonT2.onclick = () => {
    s2.add(inputT2.value);
    out2.innerHTML = 'посмотри в console';
    console.log(s2);
    inputT2.value = '';
}



// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3 строку, которую пользователь вводит в i-3. Функция должна выводить в консоль s3 после каждого удаления элемента.
const buttonT3 = document.querySelector('.b-3');
const inputT3 = document.querySelector('.input_t3');
const out3 = document.querySelector('.out3');

let s3 = new Set(['one', 'two', 'four']); // обратите внимание, как просто можно добавить массив в набор!

const f3 = () => {

    s3.delete(inputT3.value);
    console.log(s3);
    out3.innerHTML = 'посмотри в console';
}

buttonT3.onclick = f3;


// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.
const buttonT4 = document.querySelector('.b-4');
const inputT4 = document.querySelector('.i-4');
const out4 = document.querySelector('.out-4');
let s4 = new Set(['a', 'b', 'c', 'z']);

const f4 = () => {
    out4.innerHTML = s4.has(inputT4.value);
}

buttonT4.onclick = f4;

// Task 5
//  При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 количество элементов в наборе s5.

const buttonT5 = document.querySelector('.b-5');
const out5 = document.querySelector('.out-5');
let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => {
    out5.innerHTML = s5.size;
}

buttonT5.onclick = f5;

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.
const buttonT6 = document.querySelector('.b-6');
const out6 = document.querySelector('.out-6');
let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];
let s6 = new Set(a6);
const f6 = () => {
    out6.innerHTML = s6.size;
    console.log(s6.size);
}

buttonT6.onclick = f6;

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.
const buttonT7 = document.querySelector('.b-7');
const out7 = document.querySelector('.out-7');
const inputT7 = document.querySelector('.i-7');

const f7 = () => {
    let stringT7 = inputT7.value;
    let s7 = new Set(stringT7);
    console.log(s7);
    if (stringT7.length == s7.size && stringT7 > 6) {
        console.log(stringT7);
        out7.textContent = '1';
    } else {
        out7.textContent = '0';
    }
}

buttonT7.onclick = f7;

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна перебрать набор s8 и добавить в массив ar8 только числа больше 5. Выведите массив в консоль.
const buttonT8 = document.querySelector('.b-8');
let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => {
    let task8 = Array.from(s8);
    for (let i = 0; i < task8.length; i++) {
        if (task8[i] > 5) {
            ar8.push(task8[i]);
        }
        console.log(ar8);
    }
}

buttonT8.onclick = f8;

// Task 9
//  При нажатии b-9 выполняете функцию f9. Функция должна принимать набор our_set в качестве параметра, преобразовывать его в строку, причем после каждого символа строки должен быть пробел. Функция должна возвращать результирующую строку. 
// В нашем примере результат должен быть 9 8 7 6 5 
const buttonT9 = document.querySelector('.b-9');
const out9 = document.querySelector('.out-9');
const f9 = our_set => {
    return Array.from(our_set).join(' ');
}

buttonT9.onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    out9.innerHTML = f9(s9);
}

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.
const buttonT10 = document.querySelector('.b-10');
const out10 = document.querySelector('.out-10');
const f10 = (out_set, elem) => {
    let s10 = Array.from(out_set).join(' ');
    elem.innerHTML = s10;
    return (out_set, elem);
}

buttonT10.onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, out10);
};


// Task 11
//  При нажатии b-11 выполняете функцию f11. Функция должна преобразовать массив a11 в набор. И выводить в консоль. Изучите вывод получившегося набора. Разберитесь почему так происходит.
// Да, эта задача решена! Просто разберитесь.
const buttonT11 = document.querySelector('.b-11');
const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
}

buttonT11.onclick = f11;

// Task 12
//   При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, так, что каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.
const buttonT12 = document.querySelector('.b-12');
let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = () => {
    let a12 = Array.from(str12);
    let s12 = new Set(a12);
    return s12;
}

buttonT12.onclick = () => {
    console.log(f12());
}

// Task 13
//  При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде объекта типа { символ : количество, символ : количество } вывести в консоль и возвратить.
// пример результата для строки 'Hello ho'
// { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}
const buttonT13 = document.querySelector('.b-13');
let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';


const f13 = () => {

    let a13 = Array.from(str13);
    let abc = {};
    let s13 = new Set(str13);

    for (let item of s13) {
        let counter = 0;
        // console.log(item + ' : ' + str13.length);
        for (let i = 0; i < str13.length; i++) {
            if (str13[i] === item) {
                counter++;
            }
            abc[item] = counter;
            console.log(abc[item]);
        }

    }

    return s13;
    // return
}

buttonT13.onclick = f13;