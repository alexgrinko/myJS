const buttonT1 = document.querySelector('.b-1');
const outT1 = document.querySelector('.out-1');
let a1 = [12, [45, 87],
    [55, 13]
];

function f1() {

    outT1.innerHTML = a1[2][0];
    return a1[2][0];
}

buttonT1.onclick = f1;


let a2 = [
    [12, 'hi'],
    [45, 87],
    [55, 13]
];
const buttonT2 = document.querySelector('.b-2');
const outT2 = document.querySelector('.out-2');

function f2() {
    outT2.innerHTML = a2[0][1];
    return a2[0][1];
}
buttonT2.onclick = f2;


let a3 = [
    [1, 2, 3],
    [3, 4, 5],
    [6, [7, 'my']]
];
const buttonT3 = document.querySelector('.b-3');
const outT3 = document.querySelector('.out-3');

function f3() {
    outT3.innerHTML = a3[2][1][1];
    return a3[2][1][1];
}
buttonT3.onclick = f3;



a4 = [
    [1, 2, 3], 'go', [3, 4, 5],
    [6, [7, 'my']]
];
const buttonT4 = document.querySelector('.b-4');
const outT4 = document.querySelector('.out-4');

function f4() {
    outT4.innerHTML = a4[1];
    return a4[1];
}
buttonT4.onclick = f4;


let a5 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [21, 34],
    [44, 56],
];
const buttonT5 = document.querySelector('.b-5');
const outT5 = document.querySelector('.out-5');
let out5 = '';

function f5() {
    for (let i = 0; i < a5.length; i++) {
        if (a5[i][0] % 2 == 0) {
            out5 += a5[i][0] + ' ';
        }
        if (a5[i][1] % 2 == 0) {
            out5 += a5[i][1] + ' ';
        }
    }
    outT5.innerHTML = out5;
}
buttonT5.onclick = f5;



const buttonT6 = document.querySelector('.b-6');
const outT6 = document.querySelector('.out-6');
let out6 = '';

function f6() {
    for (let i = 0; i < a5.length; i++) {
        if (a5[i][0] % 2 !== 0) {
            out6 += a5[i][0] + ' ';
        }
        if (a5[i][1] % 2 !== 0) {
            out6 += a5[i][1] + ' ';
        }
    }
    outT6.innerHTML = out6;
}
buttonT6.onclick = f6;


const buttonT7 = document.querySelector('.b-7');
const outT7 = document.querySelector('.out-7');

function f7() {
    let out7 = '';
    let a7 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];
    for (let i = 0; i < a7.length; i++) {
        for (let k = 0; k < a7[i].length; k++) {
            if (a7[i][k] % 2 == 0) out7 += a7[i][k] + ' ';
        }
    }
    outT7.innerHTML = out7;

}

buttonT7.onclick = f7;

const buttonT8 = document.querySelector('.b-8');
const outT8 = document.querySelector('.out-8');

function f8() {
    let out8 = '';
    let a8 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];
    for (let i = 0; i < a8.length; i++) {
        for (let k = 0; k < a8[i].length; k++) {
            if (a8[i][k] % 2 !== 0) out8 += a8[i][k] + ' ';
        }
    }
    outT8.innerHTML = out8;

}

buttonT8.onclick = f8;



const buttonT9 = document.querySelector('.b-9');
const outT9 = document.querySelector('.out-9');

function f9() {
    let out9 = '';
    let a9 = [
        [-2, 7, -3],
        [3, 4, -7],
        [-5, 6, -8, 32],
        [21, -34, -43],
        [44, -56]
    ];
    for (let i = 0; i < a9.length; i++) {
        for (let k = 0; k < a9[i].length; k++) {
            if (a9[i][k] > 0) out9 += a9[i][k] + ' ';
        }
    }
    outT9.innerHTML = out9;

}

buttonT9.onclick = f9;


const buttonT10 = document.querySelector('.b-10');
const outT10 = document.querySelector('.out-10');

function f10() {
    let out10 = '';
    let a10 = [
        [-2, '7', -3],
        [3, 4, -7],
        [-5, 6, -8, 32, 'a'],
        ['st', 21, -34, -43],
        [44, -56, 'task']
    ];
    for (let i = 0; i < a10.length; i++) {
        for (let k = 0; k < a10[i].length; k++) {
            if (typeof a10[i][k] === 'string') out10 += a10[i][k] + ' ';
        }
    }
    outT10.innerHTML = out10;

}

buttonT10.onclick = f10;

const buttonT11 = document.querySelector('.b-11');
const outT11 = document.querySelector('.out-11');

function f11() {
    let out11 = '';
    let a11 = [
        [4, 5, 6],
        [7, 8],
        [9, 10, 11, 12, 13]
    ];

    for (let i = 0; i < a11.length; i++) {
        for (let k = a11[i].length - 1; k >= 0; k--) {
            out11 += a11[i][k] + ' ';
        }
    }
    outT11.innerHTML = out11;

}

buttonT11.onclick = f11;



let a12 = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
];

const buttonT12 = document.querySelector('.b-12');
const outT12 = document.querySelector('.out-12');

function f12() {
    let out12 = '';
    for (let i = 0; i < a12.length; i++) {
        for (let k = 0; k < a12[i].length; k++) {
            if (a12[i][k] > 0) out12 += a12[i][k] + ' ';
        }
    }
    outT12.innerHTML = out12;

}

buttonT12.onclick = f12;



let a13 = [];
const buttonT13 = document.querySelector('.b-13');
const outT13 = document.querySelector('.out-13');

function f13() {
    let out13 = [];
    for (let i = 0; i < 8; i++) {
        let temp = [];
        for (let k = 0; k < 9; k++) {
            temp.push(k);
            if (i % 2 == 0) {
                (temp[k] % 2 == 0) ? temp[k] = 0: temp[k] = 1;
            } else {
                (temp[k] % 2 != 0) ? temp[k] = 0: temp[k] = 1;
            }
        }
        outT13.innerHTML += '<br>';
        out13.push(temp);
    }
    a13 = out13;
    console.log(a13);
}

buttonT13.onclick = f13;

//

const buttonT14 = document.querySelector('.b-14');
const outT14 = document.querySelector('.out-14');

let a14 = [
    [],
    [1, 0],
    [1, 0, 0, 0],
    [3, 4, 5, 6, 7, 8],
    [1, 2]
];

function f14() {
    for (let i = 0; i < a14.length; i++) {
        outT14.innerHTML += a14[i].length + ' ';
    }

}
buttonT14.onclick = f14;

const buttonT15 = document.querySelector('.b-15');
const outT15 = document.querySelector('.out-15');

let a15 = [
    [],
    [1, 0],
    [1, 0, 0, 0],
    [3, 4, 5, 6, 7, 8],
    [1, 2]
];
let maxString = a15[0].length;

function f15() {
    for (let i = 0; i < a15.length; i++) {
        if (a15[i].length > maxString) {
            maxString = a15[i].length;
            outT15.innerHTML = maxString;
        }
    }
}
buttonT15.onclick = f15;

const buttonT16 = document.querySelector('.b-16');
const outT16 = document.querySelector('.out-16');

let a16 = [
    [0, 7, 0, 6],
    0,
    8,
    8
];

function f16() {
    if (a16[3] == 8 || a16[0][1] == 7 || a16[0][3] == 6) {
        outT16.innerHTML = 'при [' + a16 + '] будет true';
    }
}
// console.group('Task 16 ================');
// console.log(a16[3] == 8);
// console.log(a16[0][1] == 7);
// console.log(a16[0][3] == 6);

// console.groupEnd();

buttonT16.onclick = f16;


const buttonT17 = document.querySelector('.b-17');
const outT17 = document.querySelector('.out-17');

let a17 = [
    [0, 0, 6],
    [0, 7],
    0, [0, 0, 8],
];

function f17() {
    outT17.innerHTML = 'массив, который соответствует всем условиям:<br> [' + a17[0] + '] ' + ' [' + a17[1] + '] ' + ' [' + a17[2] + '] ' + ' [' + a17[3] + ']';
}

// console.log(a17[3][2] == 8);
// console.log(a17[1][1] == 7);
// console.log(a17[0][2] == 6);

buttonT17.onclick = f17;


const buttonT18 = document.querySelector('.b-18');
const outT18 = document.querySelector('.out-18');

let a18 = [
    [3],
    [0, 7],
    [0, 12],
    [0, 0, 8],
    [8],

];

function f18() {
    outT18.innerHTML = 'массив, который соответствует всем условиям:<br> [' + a18[0] + '] ' + ' [' + a18[1] + '] ' + ' [' + a18[2] + '] ' + ' [' + a18[3] + ']' + ' [' + a18[4] + ']';
}

// console.log(a18[0] == 3);
// console.log(a18[4][0] == 8);
// console.log(a18[2][1] == 12);

buttonT18.onclick = f18;

const buttonT19 = document.querySelector('.b-19');
const outT19 = document.querySelector('.out-19');

let a19 = [
    [
        [
            [0],
            [3],
            [0],
        ],
        [
            [0],
            [0],
            [0],
        ],
        [
            [0],
            [0],
            [0],
        ],
    ],
    [
        [
            [0],
            [0],
            [8],
        ],
        [
            [0],
            [0],
            [0],
        ],
        [
            [0],
            [0],
            [0],
        ],
    ],
    [
        [
            [0],
            [0],
            [0],
        ],
        [
            [12],
            [0],
            [0],
        ],
        [
            [0],
            [0],
            [0],
        ],
    ],
];

function f19() {
    outT19.innerHTML = 'массив, который соответствует всем условиям:<br> [' + a19[0] + '] ' + ' [' + a19[1] + '] ' + ' [' + a19[2] + ']';
}

// console.log(a19[0][0][1] == 3);
// console.log(a19[1][0][2] == 8);
// console.log(a19[2][1][0] == 12);

buttonT19.onclick = f19;


const buttonT20 = document.querySelector('.b-20');
const outT20 = document.querySelector('.out-20');

let a20 = [
    [0],
    [
        [
            [0],
            [0],
            [0],
        ],
        [
            [0],
            [9],
            [0],
        ],
        [
            [0],
            [0],
            [0],
        ],
    ],
    [
        [0],
        [0],
        [18],
    ],
    [12],
];

function f20() {
    outT20.innerHTML = 'массив, который соответствует всем условиям:<br> [' + a20[0] + '] ' + ' [' + a20[1] + '] ' + ' [' + a20[2] + '] ' + ' [' + a20[3] + ']';
}

console.log(a20[1][1][1] == 9);
console.log(a20[2][2] == 18);
console.log(a20[3] == 12);

buttonT20.onclick = f20;