// const inputT1 = document.querySelector('.input_t1');
// const out1 = document.querySelector('.out-1');
// const bT1 = document.querySelector('.b-1');
// let d1 = [33, 'best', 66, 'best'];

// function f1() {
//     out1.innerHTML = '';
//     let a = inputT1.value;
//     d1.push(a);
//     for (let i = 0; i < d1.length; i++) {
//         out1.innerHTML += d1[i] + ' ';
//     }
//     inputT1.value = ' ';
// }

// document.querySelector('.b-1').onclick = f1;


// const out2 = document.querySelector('.out-2');
// const bT2 = document.querySelector('.b-2');


// function f2() {
//     out2.innerHTML = '';

//     d1.pop();
//     for (let i = 0; i < d1.length; i++) {
//         out2.innerHTML += d1[i] + ' ';
//     }

// }

// document.querySelector('.b-2').onclick = f2;


// const out3 = document.querySelector('.out-3');
// const bT3 = document.querySelector('.b-3');


// function f3() {
//     out3.innerHTML = '';

//     d1.shift();
//     for (let i = 0; i < d1.length; i++) {
//         out3.innerHTML += d1[i] + ' ';
//     }

// }

// document.querySelector('.b-3').onclick = f3;

// const inputT4 = document.querySelector('.input_t4');
// const out4 = document.querySelector('.out-4');
// const bT4 = document.querySelector('.b-4');


// function f4() {
//     out4.innerHTML = '';
//     let a = inputT4.value;
//     d1.push(a);
//     for (let i = 0; i < d1.length; i++) {
//         out4.innerHTML += d1[i] + ' ';
//     }
//     inputT4.value = ' ';
// }

// document.querySelector('.b-4').onclick = f4;

// const inputT5 = document.querySelector('.input_t5');
// const out5 = document.querySelector('.out-5');
// const bT5 = document.querySelector('.b-5');


// function f5() {
//     out5.innerHTML = '';
//     let a = inputT5.value;
//     d1.unshift(a);
//     for (let i = 0; i < d1.length; i++) {
//         out5.innerHTML += d1[i] + ' ';
//     }
//     inputT5.value = ' ';
// }

// document.querySelector('.b-5').onclick = f5;

// const inputT6 = document.querySelector('.input_t6');
// const out6 = document.querySelector('.out-6');
// const bT6 = document.querySelector('.b-6');
// let d6 = ['test', 5, 12];

// function f6() {
//     out6.innerHTML = '';
//     let a = inputT6.value;
//     d6 = [...d6, a]
//     out6.innerHTML = d6;
//     inputT6.value = '';
// }

// document.querySelector('.b-6').onclick = f6;


// const out7 = document.querySelector('.out-7');
// const bT7 = document.querySelector('.b-7');
// d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

// function f7() {
//     if (!d7.length) {
//         out7.innerHTML = 'массив закончился';
//         return undefined;
//     } else {
//         d7.length = d7.length - 1;
//         out7.innerHTML = d7;
//     }
// }

// document.querySelector('.b-7').onclick = f7;

// d8 = [2, '4', 12, 67, 'hello'];
// const inputT8 = document.querySelector('.input_t8');
// const out8 = document.querySelector('.out-8');
// const bT8 = document.querySelector('.b-8');

// function f8() {
//     out8.innerHTML = '';
//     let a = inputT8.value;
//     d8 = [a, ...d8]
//     out8.innerHTML = d8;
//     inputT8.value = '';
// }

// document.querySelector('.b-8').onclick = f8;

// const out9 = document.querySelector('.out-9');
// const bT9 = document.querySelector('.b-9');
// d9 = [100, 200, 300, 400, 700, 121];

// function f9() {
//     t9 = [];
//     for (let i = 1; i < d9.length; i++) {
//         t9[i - 1] = d9[i];
//     }
//     d9 = t9;
//     out9.innerHTML = d9;
//     1
// }

// document.querySelector('.b-9').onclick = f9;



// const out10 = document.querySelector('.out-10');
// const bT10 = document.querySelector('.b-10');
// let d10 = [3, 14, 15, 92, 6];

// function f10() {
//     out10.innerHTML = '';
//     d10.reverse();
//     out10.innerHTML = d10;
// }

// document.querySelector('.b-10').onclick = f10;


// d11 = [2, 3, 4, 5, 6, 7];
// const inputT11 = document.querySelector('.input_t11');
// const out11 = document.querySelector('.out-11');
// const bT11 = document.querySelector('.b-11');

// function f11() {
//     out11.innerHTML = '';
//     let a = +inputT11.value;
//     let b = d11.indexOf(a);
//     out11.innerHTML = b;
//     inputT11.value = '';
// }

// document.querySelector('.b-11').onclick = f11;

// d12 = [6, 62, 60, 70, 1, 5]
// const inputT12 = document.querySelector('.input_t12');
// const out12 = document.querySelector('.out-12');
// const bT12 = document.querySelector('.b-12');

// function f12() {
//     out12.innerHTML = '';
//     let a = +inputT12.value;
//     out12.innerHTML = '-1';
//     for (let i = 0; i < d12.length; i++) {
//         if (d12[i] === a) {
//             out12.innerHTML = i;
//         }
//         inputT12.value = '';
//     }
// }

// document.querySelector('.b-12').onclick = f12;


// const out13 = document.querySelector('.out-13');
// const bT13 = document.querySelector('.b-13');
// let d13 = [6, 0, 22, 1, 4, 76];

// function f13() {
//     let t13 = [];
//     out13.innerHTML = '';
//     for (let i = d13.length; i >= 0; i--) {
//         t13.push(d13[i]);
//     }
//     out13.innerHTML = t13;
// }

// document.querySelector('.b-13').onclick = f13;

// let d14 = [];
// const inputT14 = document.querySelector('.input_t14');
// const out14 = document.querySelector('.out-14');
// const bT14 = document.querySelector('.b-14');

// function f14() {

//     out14.innerHTML = '';
//     let a = +inputT14.value;
//     let b = '';

//     for (i = 0; i < a; i++) {
//         b += '1, ';
//     }
//     d14 = b;
//     out14.innerHTML = 'd14 = [' + d14 + ']';
//     inputT14.value = '';
// }

// document.querySelector('.b-14').onclick = f14;


// let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// const inputT15 = document.querySelector('.input_t15');
// const out15 = document.querySelector('.out-15');
// const bT15 = document.querySelector('.b-15');

// function f15() {

//     let a = +inputT15.value;

//     if (d15.indexOf(a) == -1) {
//         d15.push(a);
//         console.log(1);
//         out15.innerHTML = d15;
//     } else {
//         out15.innerHTML = 'есть такое число';
//     }
//     inputT15.value = '';
// }

// document.querySelector('.b-15').onclick = f15;






// const out16 = document.querySelector('.out-16');
// const bT16 = document.querySelector('.b-16');

// let d16 = [];
// let d161 = [5, 6, 7, 8, 9];
// let d162 = [23, 24, 56, 87];

// function f16() {

//     let a = d161.concat(d162);
//     d16 = a;
//     out16.innerHTML = d16;
//     console.log(d16);
// }

// document.querySelector('.b-16').onclick = f16;

// const out17 = document.querySelector('.out-17');
// const bT17 = document.querySelector('.b-17');

// let d17 = [];
// let d171 = ['a', 'b', 'c', 'd'];
// let d172 = [1, 2, 3, 4, 5];

// function f17() {

//     d17 = [...d171, ...d172];

//     for (let i = 0; i < d17.length; i++) {

//         out17.innerHTML = d17;
//     }

//     console.log(d17);
// }

// document.querySelector('.b-17').onclick = f17

// let d18 = ['b', 'c', '45', 'e', 'z', 'y'];
// const inputT18 = document.querySelector('.input_t18');
// const out18 = document.querySelector('.out-18');
// const bT18 = document.querySelector('.b-18');

// function f18() {
//     let a = inputT18.value;
//     if (d18.includes(a)) {
//         console.log(1);
//         out18.innerHTML = 'есть такое';
//     } else {
//         out18.innerHTML = 'нет  такого';
//     }
//     inputT18.value = '';
// }

// document.querySelector('.b-18').onclick = f18;

// let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
// const out19 = document.querySelector('.out-19');
// const bT19 = document.querySelector('.b-19');
// let maxString = d19[0];

// function f19() {
//     for (i = 0; i < d19.length; i++) {
//         if (d19[i].length > maxString.length) {
//             maxString = d19[i]
//         }
//     }
//     out19.innerHTML = maxString;
// }

// document.querySelector('.b-19').onclick = f19;


// const out20 = document.querySelector('.out-20');
// const bT20 = document.querySelector('.b-20');
// let d20 = [4, 5, 6, 7, 8, 9, 10]

// function f20() {
//     out20.innerHTML = '';
//     let a = d20.join("");
//     out20.innerHTML = a;
// }

// document.querySelector('.b-20').onclick = f20;

// const box = document.querySelector('.box');
// const buttonBox = document.querySelector('.box_button');
// buttonBox.onclick = () => {
//     buttonBox.classList.add('box2');
//     console.log('hi');
//     if (value === 'fdfsd') {

//     } else if () {

//     }
// }