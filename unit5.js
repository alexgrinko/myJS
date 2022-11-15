const buttonTask1 = document.querySelector('.button_t1');
const showTask1 = document.querySelector('.input_t1');

const f1 = () => {
    for (i = 0; i <= 50; i++) {
        showTask1.value += i + ' ';
    }
};

buttonTask1.onclick = f1;

const buttonTask2 = document.querySelector('.button_t2');
const showTask2 = document.querySelector('.input_t2');

const f2 = () => {
    for (i = 2; i <= 122; i = i + 2) {
        showTask2.value += i + ' ';
    }
};

buttonTask2.onclick = f2;

//task3 

const buttonTask3 = document.querySelector('.button_t3');
const showTask3 = document.querySelector('.input_t3');

const f3 = () => {
    for (i = 25; i >= 7; i--) {
        showTask3.value += i + ' ';
    }
};

buttonTask3.onclick = f3;

//task4 

const buttonTask4 = document.querySelector('.button_t4');
const showTask4 = document.querySelector('.input_t4');

const f4 = () => {
    for (i = 77; i >= 35; i = i - 3) {
        showTask4.value += i + '_';
    }
};

buttonTask4.onclick = f4;

//task5 

const buttonTask5 = document.querySelector('.button_t5');
const showTask5 = document.querySelector('.input_t5');

const f5 = () => {
    for (i = 1; i <= 17; i++) {
        if (i % 2 === 0) {
            showTask5.value += i + '(четный) ->';
        } else {
            showTask5.value += i + '(не четный) ->';
        }
    }
};

buttonTask5.onclick = f5;

//task6 

const buttonTask6 = document.querySelector('.button_t6');
const showTask6 = document.querySelector('.input_t6');

const f6 = () => {
    for (let i = 0; i < 3; i++) {
        showTask6.innerHTML += '******';
        showTask6.innerHTML += "<br>";
        console.log(showTask6.innerHTML)
    }
};

buttonTask6.onclick = f6;

//task7 

const buttonTask7 = document.querySelector('.button_t7');
const showTask7 = document.querySelector('.show_t7');
const inputTask7 = document.querySelector('.input_t7');


const f7 = () => {
    showTask7.value = '';
    const valueI = inputTask7.value;
    for (let i = valueI; i >= 0; i--) {
        if (valueI > 100) break;
        showTask7.value += i + ' ';
    }
};

buttonTask7.onclick = f7;


//task8

const buttonTask8 = document.querySelector('.button_t8');
const showTask8 = document.querySelector('.show_t8');
const inputTask81 = document.querySelector('.input_t81');
const inputTask82 = document.querySelector('.input_t82');


const f8 = () => {
    showTask8.value = '';
    const valueNumOne = inputTask81.value;
    const valueNumTwo = inputTask82.value;
    if (valueNumOne > valueNumTwo) {
        for (let i = valueNumOne; i >= valueNumTwo; i--) {
            if (valueNumOne > 100 || valueNumTwo > 100) break;
            showTask8.value += i + ' ';
        }
    } else if (valueNumOne < valueNumTwo) {
        for (let i = valueNumTwo; i >= valueNumOne; i--) {
            if (valueNumOne > 100 || valueNumTwo > 100) break;
            showTask8.value += i + ' ';
        }
    } else {
        showTask8.value = 'равные числа ';
    }
};

buttonTask8.onclick = f8;

//task10

const buttonTask10 = document.querySelector('.button_t10');
const showTask10 = document.querySelector('.show_t10');
const inputTask101 = document.querySelector('.input_t101');
const inputTask102 = document.querySelector('.input_t102');

const fff = () => {
    showTask10.value = '';
    const valueNumOne = +inputTask101.value;
    const valueNumTwo = +inputTask102.value;
    if (valueNumOne < valueNumTwo) {
        for (i = valueNumOne; i <= valueNumTwo; i = i + 2) {
            if (valueNumOne > 2030 || valueNumTwo > 2030) break;
            showTask10.value += i + ' ';
            console.log(showTask10.value);
        }
    } else if (valueNumOne > valueNumTwo) {
        for (i = valueNumTwo; i <= valueNumOne; i = i + 2) {
            if (valueNumOne > 2030 || valueNumTwo > 2030) break;
            showTask10.value += i + ' ';
            console.log(showTask10.value);
        }
    }
};

buttonTask10.onclick = fff;

//task11 

const buttonTask11 = document.querySelector('.button_t11');
const showTask11 = document.querySelector('.show_t11');
const divsTask11 = document.querySelectorAll('.div11');

const f11 = () => {
    for (let i = 0; i < divsTask11.length; i++) {
        showTask11.value += divsTask11[i].innerHTML + ' ';
        console.log(divsTask11[i].innerHTML);
    }
}

buttonTask11.onclick = f11;

//task12

const buttonTask12 = document.querySelector('.button_t12');
const divsTask12 = document.querySelectorAll('.div12');

const f12 = () => {
    for (let i = 0; i < divsTask12.length; i++) {
        divsTask12[i].style.background = "red";
    }
    buttonTask12.onclick = () => {
        for (let i = 0; i < divsTask12.length; i++) {
            divsTask12[i].style.background = "blue";
        }
    }
}

buttonTask12.onclick = f12;

//task13
const inputstask13 = document.querySelectorAll('.input13');
const buttonTask13 = document.querySelector('.button_t13');

const f13 = () => {
    for (let i = 0; i < inputstask13.length; i++) {
        inputstask13[0].value = 'первый';
        inputstask13[1].value = 'второй';
        inputstask13[2].value = 'третий';

        console.log(inputstask13[i]);
    }
}

buttonTask13.onclick = f13;

//task14
const inputstask14 = document.querySelectorAll('.input14');
const buttonTask14 = document.querySelector('.button_t14');
const showTask14 = document.querySelector('.show_t14');

const f14 = () => {
    for (let i = 0; i < inputstask14.length; i++) {
        if (inputstask14[i].checked) {
            showTask14.value = inputstask14[i].value;
        }
    }
}

buttonTask14.onclick = f14;

//task15 

const buttonTask15 = document.querySelector('.button_t15');
const showTask15 = document.querySelector('.input_t15');

const f15 = () => {
    for (i = 0; i <= 11; i++) {
        showTask15.value += 10 - i + ' ';
        showTask15.value += i + ' ';
    }
};

buttonTask15.onclick = f15;