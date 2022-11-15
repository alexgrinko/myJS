const inputTask1 = document.querySelector('.input_t1');
const buttonTask1 = document.querySelector('.button_t1');

buttonTask1.onclick = () => {
    let valueInp = inputTask1.value;
    for (let i = 0; i < 3; i++) {
        inputTask1.value += '*** ';
        console.log(valueInp);
        for (let k = 0; k < 1; k++) {
            inputTask1.value += '_';
        }
    }
};

const divTask2 = document.querySelector('.div_t2');
const buttonTask2 = document.querySelector('.button_t2');

buttonTask2.onclick = () => {
    for (let i = 1; i <= 3; i++) {
        divTask2.innerHTML += i + '<br>';
        for (let k = 0; k < 3; k++) {
            divTask2.innerHTML += '*_';
        }
        divTask2.innerHTML += '<br>';
    }
};


const divTask3 = document.querySelector('.div_t3');
const buttonTask3 = document.querySelector('.button_t3');

buttonTask3.onclick = () => {
    for (let i = 0; i <= 3; i++) {
        divTask3.innerHTML += '<br>';
        for (let k = 0; k < 3; k++) {
            divTask3.innerHTML += '*_';
        }
    }
};

const divTask4 = document.querySelector('.div_t4');
const buttonTask4 = document.querySelector('.button_t4');

buttonTask4.onclick = () => {
    for (let i = 1; i <= 3; i++) {
        divTask4.innerHTML += i + '_';
        for (let k = 1; k <= 5; k++) {
            divTask4.innerHTML += k + ' ';
        }
    }
};

//task5 

const divTask5 = document.querySelector('.div_t5');
const buttonTask5 = document.querySelector('.button_t5');

buttonTask5.onclick = () => {
    for (let i = 1; i <= 3; i++) {
        divTask5.innerHTML += '<br>';
        for (let k = 0; k < 6; k++) {
            if (k % 2 == 0) {
                divTask5.innerHTML += '1';
            } else {
                divTask5.innerHTML += '0';
            }
        }
    }
};

//task6 

const divTask6 = document.querySelector('.div_t6');
const buttonTask6 = document.querySelector('.button_t6');

buttonTask6.onclick = () => {
    for (let i = 1; i <= 3; i++) {
        divTask6.innerHTML += '<br>';
        for (let k = 1; k <= 6; k++) {
            if (k % 3 == 0) {
                divTask6.innerHTML += 'x';
            } else if (k % 2 == 0) {
                divTask6.innerHTML += '0';
            } else {
                divTask6.innerHTML += '1';
            }
        }
    }
};

//task7 

const divTask7 = document.querySelector('.div_t7');
const buttonTask7 = document.querySelector('.button_t7');

buttonTask7.onclick = () => {
    for (let i = 0; i <= 6; i++) {
        divTask7.innerHTML += '<br>';
        for (let k = 0; k <= i; k++) {
            divTask7.innerHTML += '*';
        }
    }
};

//task8 


const divTask8 = document.querySelector('.div_t8');
const buttonTask8 = document.querySelector('.button_t8');

buttonTask8.onclick = () => {
    for (let i = 6; i >= 0; i--) {
        divTask8.innerHTML += '<br>';
        for (let k = 0; k <= i; k++) {
            divTask8.innerHTML += '*';
        }
    }
};


//task9 

const divTask9 = document.querySelector('.div_t9');
const buttonTask9 = document.querySelector('.button_t9');

buttonTask9.onclick = () => {
    for (let i = 1; i <= 6; i++) {
        divTask9.innerHTML += '<br>';
        for (let k = 1; k <= i; k++) {
            divTask9.innerHTML += i;
        }
    }
};


//task10 

const divTask10 = document.querySelector('.div_t10');
const buttonTask10 = document.querySelector('.button_t10');

buttonTask10.onclick = () => {
    for (let i = 0; i <= 6; i++) {
        divTask10.innerHTML += '<br>';
        for (let k = 0; k < 9; k++) {
            if (k < 10) {
                divTask10.innerHTML += 0 + k;
            }
            divTask10.innerHTML += i + ' ';
        }
    }
};


// Дополнительные задачи на прокачку 

//task1 

const divPumping1 = document.querySelector('.div_t1p');
const buttonPumping1 = document.querySelector('.button_t1p');

buttonPumping1.onclick = () => {
    for (let i = 1; i <= 10; i++) {
        // divPumping1.innerHTML += i;
        for (let k = 1; k <= 10; k++) {
            // divPumping1.innerHTML += i + '*' + k + '=' + i * k + '<br>';
            divPumping1.innerHTML += `${i}*${k}=${i*k}` + '<br>';
            if (k === 10) {
                divPumping1.innerHTML += '<br>';
            }
        }
    }
};

const divPumping2 = document.querySelector('.div_t2p');
const buttonPumping2 = document.querySelector('.button_t2p');

buttonPumping2.onclick = () => {
    for (let i = 0; i < 3; i++) {
        divPumping2.innerHTML += '<br>';
        for (let k = 0; k < 5; k++) {
            // divPumping1.innerHTML += i + '*' + k + '=' + i * k + '<br>';
            divPumping2.innerHTML += '*';
        }
    }
};

const divPumping3 = document.querySelector('.div_t3p');
const buttonPumping3 = document.querySelector('.button_t3p');

buttonPumping3.onclick = () => {
    for (let i = 4; i >= 0; i--) {
        divPumping3.innerHTML += '<br>';
        for (let k = 0; k <= i; k++) {
            divPumping3.innerHTML += '*';
        }
    }
};

const divPumping4 = document.querySelector('.div_t4p');
const buttonPumping4 = document.querySelector('.button_t4p');

buttonPumping4.onclick = () => {
    for (let i = 0; i < 3; i++) {
        divPumping4.innerHTML += '<br>';
        for (let k = 0; k < 5; k++) {
            // divPumping1.innerHTML += i + '*' + k + '=' + i * k + '<br>';
            divPumping4.innerHTML += '*';
        }
    }
};


/* const divPumping5 = document.querySelector('.div_t5p');
const buttonPumping5 = document.querySelector('.button_t5p');

buttonPumping5.onclick = () => {
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            divPumping5.innerHTML += '&nbsp' + '&nbsp';
        } else if (i === 1) {
            divPumping5.innerHTML += '&nbsp';
        }
        for (let k = 0; k < 5; k++) {

            divPumping5.innerHTML += '*';
        }
        divPumping5.innerHTML += '<br>';
    }
}; */

// const divPumping5 = document.querySelector('.div_t5p');
// const buttonPumping5 = document.querySelector('.button_t5p');



// buttonPumping5.onclick = () => {

//     const LINES = 9
//     const stars = '*****'

//     for (let i = LINES; i >= 0; i--) {

//         let tab = ''

//         for (let j = 1; j <= i; j++) {
//             tab += ' '
//         }

//         const d = tab + stars

//         console.log('---', d)

//         divPumping5.innerHTML += d
//         divPumping5.innerHTML += '<br>';
//     }
// };


const divPumping5 = document.querySelector('.div_t5p');
const buttonPumping5 = document.querySelector('.button_t5p');

buttonPumping5.onclick = () => {

    for (let i = 1; i <= 3; i++) {
        divPumping5.innerHTML += '<br>';
        for (let k = 5; k >= i; k--) {
            divPumping5.innerHTML += '&nbsp';
        }

        for (let g = 0; g < 5; g++) {
            divPumping5.innerHTML += '*';

        }
    }
};

const divPumping6 = document.querySelector('.div_t6p');
const buttonPumping6 = document.querySelector('.button_t6p');

buttonPumping6.onclick = () => {
    for (let i = 0; i <= 3; i++) {
        divPumping6.innerHTML += '<br>';
        for (let k = 0; k < i; k++) {
            // divPumping1.innerHTML += i + '*' + k + '=' + i * k + '<br>';
            divPumping6.innerHTML += '* ';
        }
    }
    for (let i = 2; i >= 0; i--) {
        divPumping6.innerHTML += '<br>';
        for (let k = 0; k < i; k++) {
            // divPumping1.innerHTML += i + '*' + k + '=' + i * k + '<br>';
            divPumping6.innerHTML += '* ';
        }
    }
};

const divPumping7 = document.querySelector('.div_t7p');
const buttonPumping7 = document.querySelector('.button_t7p');

buttonPumping7.onclick = () => {
    for (let i = 0; i < 5; i++) {
        divPumping7.innerHTML += '<br>';
        if (i === 0 || i === 4) {
            divPumping7.innerHTML += '******';
        } else {
            divPumping7.innerHTML += '*' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '*';
        }
    }
};


const divPumping8 = document.querySelector('.div_t8p');
const buttonPumping8 = document.querySelector('.button_t8p');

buttonPumping8.onclick = () => {
    for (let i = 5; i >= 1; i--) {
        divPumping8.innerHTML += '<br>';
        for (let k = i; k >= 1; k--) {
            divPumping8.innerHTML += k;
        }
    }
};

const divPumping9 = document.querySelector('.div_t9p');
const buttonPumping9 = document.querySelector('.button_t9p');

buttonPumping9.onclick = () => {

    for (let i = 1; i <= 5; i++) {
        divPumping9.innerHTML += '<br>';
        for (let k = 5; k >= i; k--) {
            divPumping9.innerHTML += '&nbsp';
        }

        for (let k = i; k >= 1; k--) {
            divPumping9.innerHTML += k;

        }
    }
};

const divPumping10 = document.querySelector('.div_t10p');
const buttonPumping10 = document.querySelector('.button_t10p');

buttonPumping10.onclick = () => {

    for (let i = 1; i <= 5; i++) {
        divPumping10.innerHTML += '<br>';
        for (let k = 4; k >= i; k--) {
            divPumping10.innerHTML += 'X ';
        }

        for (let k = i; k >= 1; k--) {
            divPumping10.innerHTML += k + ' ';

        }
    }
};


const divPumping11 = document.querySelector('.div_t11p');
const buttonPumping11 = document.querySelector('.button_t11p');

buttonPumping11.onclick = () => {
    for (let i = 1; i <= 5; i++) {
        divPumping11.innerHTML += '<br>';
        for (let k = 1; k <= i; k++) {
            divPumping11.innerHTML += i + ' ';
        }
    }
};

const divPumping12 = document.querySelector('.div_t12p');
const buttonPumping12 = document.querySelector('.button_t12p');

buttonPumping12.onclick = () => {
    for (let i = 5; i >= 1; i--) {
        divPumping12.innerHTML += '<br>';
        for (let k = 5; k >= i; k--) {
            if (i % 2 == 0) {
                divPumping12.innerHTML += 'X';
            }
            divPumping12.innerHTML += i + ' ';
        }
    }
};

const divPumping13 = document.querySelector('.div_t13p');
const buttonPumping13 = document.querySelector('.button_t13p');

buttonPumping13.onclick = () => {
    for (let i = 5; i <= 9; i += 2) {
        divPumping13.innerHTML += '<br>';
        for (let g = 7; g >= i; g--) {
            divPumping13.innerHTML += '&nbsp';
        }
        for (let k = 1; k <= i; k++) {
            divPumping13.innerHTML += '*';
        }

    }
};

const divPumping14 = document.querySelector('.div_t14p');
const buttonPumping14 = document.querySelector('.button_t14p');

buttonPumping14.onclick = () => {
    for (let i = 2; i <= 6; i += 2) {
        divPumping14.innerHTML += '<br>';
        for (let g = 5; g >= i; g--) {
            divPumping14.innerHTML += '&nbsp';
        }
        for (let k = 1; k <= i; k++) {
            divPumping14.innerHTML += '*';
        }
    }

    for (let i = 4; i >= 2; i -= 2) {
        divPumping14.innerHTML += '<br>';
        for (let g = 5; g >= i; g--) {
            divPumping14.innerHTML += '&nbsp';
        }
        for (let k = 1; k <= i; k++) {
            divPumping14.innerHTML += '*';
        }
    }

};