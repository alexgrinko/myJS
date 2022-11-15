const buttonT1 = document.querySelector('.b-1');
const outT1 = document.querySelector('.out-1');

let a1 = {
    "one": 15,
    "two": 16,
    "five": 20
};

buttonT1.onclick = () => {
    outT1.innerHTML = a1.two;
    return a1.two;
}

const buttonT2 = document.querySelector('.b-2');
const outT2 = document.querySelector('.out-2');

let a2 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi"
};

buttonT2.onclick = () => {
    outT2.innerHTML = a2.five;
    return a2.five;
}

const buttonT3 = document.querySelector('.b-3');
const outT3 = document.querySelector('.out-3');

let a3 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};

buttonT3.onclick = () => {
    outT3.innerHTML = a3.odd + ' ' + a3.five;
    return a3.odd;
}

const buttonT4 = document.querySelector('.b-4');
const outT4 = document.querySelector('.out-4');

let a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};

buttonT4.onclick = () => {
    let out = '';
    for (let key in a4) {
        out += key + '-' + a4[key] + '<br>';
    }
    outT4.innerHTML = out;
}


const buttonT5 = document.querySelector('.b-5');
const outT5 = document.querySelector('.out-5');
let a5 = {
    "one": 1,
    "two": 2
}

function f5(arr, block) {
    let out = '';
    for (let key in arr) {
        out += `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block).innerHTML = out;
    return (a5, '.out-5')
}

// давайте протестируем f5

buttonT5.onclick = () => {
    f5(a5, '.out-5');
}


const buttonT6 = document.querySelector('.b-6');
const outT6 = document.querySelector('.out-6');
const inputT61 = document.querySelector('.input-61');
const inputT62 = document.querySelector('.input-62');

let a6 = {};

buttonT6.onclick = () => {
    a6[inputT61.value] = inputT62.value;;
    console.log(a6);
    f5(a6, '.out-6');
}


const buttonT7 = document.querySelector('.b-7');
const outT7 = document.querySelector('.out-7');
const inputT7 = document.querySelector('.input-7');


let a7 = {
    'Белый гриб': 'съедобный',
    'Рыжик': 'съедобный',
    'Груздь': 'съедобный',
    'Лисички': 'съедобный',
    'Опята': 'съедобный',
    'Сыроежка': 'съедобный',
    'Масленок': 'съедобный',
    'Польский гриб': 'съедобный',
    'Дождевик': 'съедобный',
    'Подберезовик': 'съедобный',
    'Мухомор жемчужный': 'съедобный',
    'Свинушка тонкая': 'несъедобный',
    'Желчный гриб': 'несъедобный',
    'Бледная поганка': 'несъедобный',
    'Рядовка ядовитая': 'несъедобный',
    'Сатанинский гриб': 'несъедобный',
    'Боровик прекрасный': 'несъедобный',
    'Зонтик чешуйчатый': 'несъедобный',
    'Мицена чистая': 'несъедобный',
    'Боровик ле Галь': 'несъедобный',
    'Мухомор белый': 'несъедобный'
};

buttonT7.onclick = () => {
    outT7.innerHTML = 'нет данных';
    for (let key in a7) {
        if (inputT7.value == key) {
            outT7.innerHTML = a7[key];
        }
    }
}

const buttonT8 = document.querySelector('.b-8');
const outT8 = document.querySelector('.out-8');
const inputT8 = document.querySelector('.input-8');


let a8 = {
    'Белый гриб': 'съедобный',
    'Рыжик': 'съедобный',
    'Груздь': 'съедобный',
    'Лисички': 'съедобный',
    'Опята': 'съедобный',
    'Сыроежка': 'съедобный',
    'Масленок': 'съедобный',
    'Польский гриб': 'съедобный',
    'Дождевик': 'съедобный',
    'Подберезовик': 'съедобный',
    'Мухомор жемчужный': 'съедобный',
    'Свинушка тонкая': 'несъедобный',
    'Желчный гриб': 'несъедобный',
    'Бледная поганка': 'несъедобный',
    'Рядовка ядовитая': 'несъедобный',
    'Сатанинский гриб': 'несъедобный',
    'Боровик прекрасный': 'несъедобный',
    'Зонтик чешуйчатый': 'несъедобный',
    'Мицена чистая': 'несъедобный',
    'Боровик ле Галь': 'несъедобный',
    'Мухомор белый': 'несъедобный'
};

buttonT8.onclick = () => {

    for (let key in a8) {
        if (inputT8.value === key) {
            outT8.innerHTML = a8[key];
            break;
        } else if (inputT8.value === '') {
            outT8.innerHTML = 'введи гриб';
        } else {
            outT8.innerHTML = 'нет данных';
        }
    }
}

const buttonT9 = document.querySelector('.b-9');
const outT9 = document.querySelector('.out-9');
const inputT9 = document.querySelector('.input-9');
const edible = document.querySelector('.b-91');
const inedible = document.querySelector('.b-92');

let a9 = {
    'Белый гриб': 'съедобный',
    'Рыжик': 'съедобный',
    'Груздь': 'съедобный',
    'Лисички': 'съедобный',
    'Опята': 'съедобный',
    'Сыроежка': 'съедобный',
    'Масленок': 'съедобный',
    'Польский гриб': 'съедобный',
    'Дождевик': 'съедобный',
    'Подберезовик': 'съедобный',
    'Мухомор жемчужный': 'съедобный',
    'Свинушка тонкая': 'несъедобный',
    'Желчный гриб': 'несъедобный',
    'Бледная поганка': 'несъедобный',
    'Рядовка ядовитая': 'несъедобный',
    'Сатанинский гриб': 'несъедобный',
    'Боровик прекрасный': 'несъедобный',
    'Зонтик чешуйчатый': 'несъедобный',
    'Мицена чистая': 'несъедобный',
    'Боровик ле Галь': 'несъедобный',
    'Мухомор белый': 'несъедобный'
};

edible.onclick = () => {
    inputT9.value = 'съедобный';
}

inedible.onclick = () => {
    inputT9.value = 'несъедобный';
}
buttonT9.onclick = () => {
    let out9 = '';
    for (let key in a9) {
        if (inputT9.value == a9[key]) {
            out9 += key + ', ';
        }
    }
    outT9.innerHTML = out9;
}

let a10 = {
    'Белый гриб': 'съедобный',
    'Рыжик': 'съедобный',
    'Груздь': 'съедобный',
    'Лисички': 'съедобный',
    'Опята': 'съедобный',
    'Сыроежка': 'съедобный',
    'Масленок': 'съедобный',
    'Польский гриб': 'съедобный',
    'Дождевик': 'съедобный',
    'Подберезовик': 'съедобный',
    'Мухомор жемчужный': 'съедобный',
    'Свинушка тонкая': 'несъедобный',
    'Желчный гриб': 'несъедобный',
    'Бледная поганка': 'несъедобный',
    'Рядовка ядовитая': 'несъедобный',
    'Сатанинский гриб': 'несъедобный',
    'Боровик прекрасный': 'несъедобный',
    'Зонтик чешуйчатый': 'несъедобный',
    'Мицена чистая': 'несъедобный',
    'Боровик ле Галь': 'несъедобный',
    'Мухомор белый': 'несъедобный'
};

const buttonT10 = document.querySelector('.b-10');
const outT10 = document.querySelector('.out-10');
const inputT10 = document.querySelector('.input-10');

buttonT10.onclick = () => {
    let out10 = '';
    for (let key in a9) {
        if (inputT10.value === a9[key]) {
            console.log('true');
            out10 = 'есть (true)';
            break;
        } else {
            out10 = 'нет (false)';
        }

    }
    outT10.innerHTML = out10;
    inputT10.value = '';
}


const buttonT11 = document.querySelector('.b-11');
const outT11 = document.querySelector('.out-11');
const inputT11 = document.querySelector('.input-11');
const outT111 = document.querySelector('.out-111');
buttonT11.onclick = () => {
    let inpOut11 = inputT11.value;
    for (let key in a9) {
        if (inpOut11 == a9[key]) {
            delete a9[key];
        }
        f5(a9, '.out-11');
    }
    // inputT11.value = '';
    outT111.innerHTML = 'удалил ' + inpOut11;
    inputT11.value = '';
}

const buttonT12 = document.querySelector('.b-12');
const outT12 = document.querySelector('.out-12');
const inputT12 = document.querySelector('.input-12');
const outT121 = document.querySelector('.out-121');
buttonT12.onclick = () => {
    let inpOut12 = inputT12.value;
    for (let key in a10) {
        if (inpOut12 == key) {
            delete a10[key];
        }
        f5(a10, '.out-12');
    }
    // inputT12.value = '';
    outT121.innerHTML = 'удалил ' + inpOut12;
    inputT12.value = '';
}



let a13 = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};
const buttonT13 = document.querySelector('.b-13');
const outT13 = document.querySelector('.out-13');

const buttonArr13 = document.querySelector('.b-13-1');

buttonArr13.onclick = () => {
    f5(a13, '.out-131')
}
let sum = 0;
buttonT13.onclick = () => {

    for (let key in a13) {
        if (typeof a13[key] == 'number') {
            sum += a13[key];
        }
        outT13.innerHTML = sum;
    }

}


let a14 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

const buttonT14 = document.querySelector('.b-14');
const outT14 = document.querySelector('.out-14');

const buttonArr14 = document.querySelector('.b-14-1');

buttonArr14.onclick = () => {
    f5(a14, '.out-141')
}
buttonT14.onclick = () => {
    for (let key in a14) {
        outT14.innerHTML += a14[key][0] + ' ';
    }
}

let a15 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

const buttonT15 = document.querySelector('.b-15');
const outT15 = document.querySelector('.out-15');

const buttonArr15 = document.querySelector('.b-15-1');

buttonArr15.onclick = () => {
    f5(a15, '.out-151')
}
buttonT15.onclick = () => {
    for (let key in a15) {
        outT15.innerHTML += a15[key] + ' ';
    }
}

let a16 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

const buttonT16 = document.querySelector('.b-16');
const outT16 = document.querySelector('.out-16');

const buttonArr16 = document.querySelector('.b-16-1');

buttonArr16.onclick = () => {
    f5(a16, '.out-161')
}
buttonT16.onclick = () => {
    for (let key in a16) {
        outT16.innerHTML += a16[key].name + ' ';
    }
}



let a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

const buttonT17 = document.querySelector('.b-17');
const outT17 = document.querySelector('.out-17');


buttonT17.onclick = () => {
    for (let key in a17) {
        if (a17[key].age > 30) {
            outT17.innerHTML += a17[key].name + ' ';
        }
    }
};



let a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}
const buttonT18 = document.querySelector('.b-18');
const outT18 = document.querySelector('.out-18');
const inputT18 = document.querySelector('.input-18');

buttonT18.onclick = () => {
    let out18 = '';
    for (let key in a18) {
        for (let key2 in a18[key]) {
            if (inputT18.value == key) {
                out18 += a18[key][key2] + ' ';
                outT18.innerHTML = out18 + ' ';
            }
        }
    }
}


const buttonT19 = document.querySelector('.b-19');
const outT19 = document.querySelector('.out-19');
const inputT19 = document.querySelector('.input-19');

buttonT19.onclick = () => {
    let out19 = '';
    for (let key in a18) {
        for (let key2 in a18[key]) {
            if (inputT19.value == a18[key][key2]) {
                out19 = key + ' ';
                outT19.innerHTML = out19;
            }
        }
    }
}

let a20 = {
    "red": [
        ['Akademmistechko', 1],
        ['Nyvky', 0],
        ['Universytet', 3],
        ['Lisova', 1]
    ],
    "blue": [
        ['Minska', 1],
        ['Obolon', 0],
        ['Pochaina', 2],
        ['Holosiivska', 0]
    ],
    "green": [
        ['Syrets', 1],
        ['Zoloti Vorota', 2],
        ['Klovska', 0],
        ['Vidubichi', 1]
    ],
}

const buttonT20 = document.querySelector('.b-20');
const outT20 = document.querySelector('.out-20');


buttonT20.onclick = () => {
    let out20 = '';
    for (let key in a20) {
        for (let key2 in a20[key]) {
            for (let key3 in a20[key][key2]) {
                if (a20[key][key2][key3] == 2) {
                    out20 += a20[key][key2][0] + ', ';
                    outT20.innerHTML = out20;
                }
            }
        }
    }
}