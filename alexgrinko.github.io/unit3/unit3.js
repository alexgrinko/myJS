const inputTask1 = document.querySelector('.task_1');
const answerTask1 = document.querySelector('.answer_task1');
const buttonTask1 = document.querySelector('.button_task_1');

const f1 = () => {
    let num1 = +inputTask1.value;
    if (num1 >= 4) {
        answerTask1.value = 'больше';
        console.log('число больше 4');
    } else if (num1 < 4) {
        answerTask1.value = 'меньше';
        console.log('число меньше 4');
    }
};

buttonTask1.onclick = f1;

// task2 - 3


const inputTask21 = document.querySelector('.task_21');
const inputTask22 = document.querySelector('.task_22');
const answerTask2 = document.querySelector('.answer_task2');
const buttonTask2 = document.querySelector('.button_task_2');

const f2 = () => {
    let num1 = +inputTask21.value;
    let num2 = +inputTask22.value;
    if (num1 > num2) {
        answerTask2.value = 'число ' + num1 + ' больше';
        console.log('первое число больше');
    } else if (num1 < num2) {
        answerTask2.value = 'число ' + num2 + ' больше';
        console.log('второе число больше');
    }
};

buttonTask2.onclick = f2;


// task4 

const inputTask4 = document.querySelector('.task_4');
const answerTask4 = document.querySelector('.answer_task4');
const buttonTask4 = document.querySelector('.button_task_4');

const f4 = () => {
    let num1 = +inputTask4.value;
    let year = 2022;
    let age = year - num1;
    if (age >= 18) {
        answerTask4.value = 'тебе ' + age + ', ты совершеннолетний!';
        console.log(age + 'взрослый');
    } else if (age < 18) {
        answerTask4.value = 'иди домой  ' + age + 'летний  ребенок!';
    }
};

buttonTask4.onclick = f4;

// task5 

const inputTask5 = document.querySelector('.task_5');
const answerTask5 = document.querySelector('.answer_task5');
const buttonTask5 = document.querySelector('.button_task_5');

const f5 = () => {
    let num1 = +inputTask5.value;
    if (num1 < 0) {
        answerTask5.value = 'число отрицацельное';
    } else if (num1 === 0) {
        answerTask5.value = 'число ноль';
    } else {
        answerTask5.value = 'число положительное';
    }
};

buttonTask5.onclick = f5;

// task6 

const inputTask6 = document.querySelector('.task_6');
const answerTask6 = document.querySelector('.answer_task6');
const buttonTask6 = document.querySelector('.button_task_6');

const f6 = () => {
    let num1 = +inputTask6.value;
    if (num1 % 2 == 0) {
        answerTask6.value = 'четное';
    } else {
        answerTask6.value = 'нечетное';
    }
};

buttonTask6.onclick = f6;



// task7 

const inputTask7 = document.querySelector('.task_71');
const inputDegree = document.querySelector('.task_72');
const answerTask7 = document.querySelector('.answer_task7');
const buttonTask7 = document.querySelector('.button_task_7');

const f7 = () => {
    let num1 = +inputTask7.value;
    let degreeNum = +inputDegree.value;
    let res = Math.pow(num1, degreeNum);
    answerTask7.value = res;
};

buttonTask7.onclick = f7;


// task8 

const selectTask8 = document.querySelector('.task_8');

const answerTask8 = document.querySelector('.answer_task8');
const buttonTask8 = document.querySelector('.button_task_8');

const f8 = () => {
    let num = +selectTask8.value;
    switch (num) {
        case 1:
            console.log('один');
            answerTask8.value = 'one';
            break;
        case 2:
            console.log('два');
            answerTask8.value = 'two';
            break;
        case 3:
            console.log('три');
            answerTask8.value = 'three';
            break;
        case 4:
            console.log('четыре');
            answerTask8.value = 'four';
            break;
        case 5:
            console.log('пять');
            answerTask8.value = 'five';
            break;
        case 6:
            console.log('шесть');
            answerTask8.value = 'six';
            break;
        case 7:
            console.log('семь');
            answerTask8.value = 'seven';
            break;
        case 8:
            console.log('восемь');
            answerTask8.value = 'eight';
            break;
        case 9:
            console.log('девять');
            answerTask8.value = 'nine';
            break;
        case 10:
            console.log('десять');
            answerTask8.value = 'ten';
            break;
        default:
            console.log('это мы не учили, это нам не задавали.. парам пам пааам');
    }
};

buttonTask8.onclick = f8;

//task9 

const inputTask9 = document.querySelector('.task_9');
const answerTask9 = document.querySelector('.answer_task9');
const buttonTask9 = document.querySelector('.button_task_9');

const f9 = () => {
    let num = +inputTask9.value;
    if (num >= 1 && num <= 32) {
        console.log('1');
        answerTask9.value = 'ты из подъезда №' + 1;
    } else if (num >= 33 && num <= 43) {
        console.log('2');
        answerTask9.value = 'ты из подъезда №' + 2;
    } else if (num >= 44 && num <= 64) {
        console.log('3');
        answerTask9.value = 'ты из подъезда №' + 3;
    } else {
        answerTask9.value = 'беги незнакомец';
    }
};

buttonTask9.onclick = f9;

//task10

const selectTask10 = document.querySelector('.task_10');
const answerTask10 = document.querySelector('.answer_task10');
const buttonTask10 = document.querySelector('.button_task_10');

const f10 = () => {
    answerTask10.value = 'твой выбор ' + selectTask10.value;
};

buttonTask10.onclick = f10;

//task11

const selectTask11 = document.querySelector('.task_11');
const answerTask11 = document.querySelector('.answer_task11');
const buttonTask11 = document.querySelector('.button_task_11');

selectTask11.onchange = () => {
    answerTask11.value = 'твой выбор ' + selectTask11.value;
};


//task12

const inputTask12 = document.querySelector('.task_12');
const answerTask12 = document.querySelector('.answer_task12');
const buttonTask12 = document.querySelector('.button_task_12');

const f12 = () => {
    let num = inputTask12.value;
    answerTask12.value = (typeof num);
};

buttonTask12.onclick = f12;

//task13

const inputTask13 = document.querySelector('.task_13');
const answerTask13 = document.querySelector('.answer_task13');
const buttonTask13 = document.querySelector('.button_task_13');

const f13 = () => {
    let num = +inputTask13.value;
    answerTask13.value = (typeof num);
};

buttonTask13.onclick = f13;


//task14

const inputTask141 = document.querySelector('.task_141');
const inputTask142 = document.querySelector('.task_142');
const selectTask143 = document.querySelector('.task_143');
const answerTask14 = document.querySelector('.answer_task14');
const buttonTask14 = document.querySelector('.button_task_14');

const f14 = () => {
    let num1 = +inputTask141.value;
    let num2 = +inputTask142.value;
    let select = selectTask143.value;
    if (select === '+') {
        answerTask14.value = num1 + num2;
    } else if (select === '-') {
        answerTask14.value = num1 - num2;
    } else if (select === '*') {
        answerTask14.value = num1 * num2;
    } else if (select === '/') {
        answerTask14.value = num1 / num2;
    }
};

buttonTask14.onclick = f14;

//task15

const selectTask151 = document.querySelector('.task_151');
const selectTask152 = document.querySelector('.task_152');
const selectTask153 = document.querySelector('.task_153');
const answerTask15 = document.querySelector('.answer_task15');
const buttonTask15 = document.querySelector('.button_task_15');

const f15 = () => {

    console.log(selectTask151.value + selectTask153.value + selectTask152.value);
    if (selectTask153.value === '&&') {
        answerTask15.value = selectTask151.value + ' или ' + selectTask152.value;
    } else {
        answerTask15.value = selectTask151.value + ' и ' + selectTask152.value;
    }
};

buttonTask15.onclick = f15;


///// 

const buttonCalcs = document.querySelectorAll('.button_calc');
const displayCalc = document.querySelector('.answer_calc');
const clear = document.querySelector('.dell');
const enter = document.querySelector('.button_big');
const plus = document.querySelector('.button_plus');
const numberCalcs = document.querySelectorAll('.number_calc');
const actions = document.querySelectorAll('.action_calc');
const multiply = document.querySelector('.multiply_calc');

for (let numberCalc of numberCalcs) {
    numberCalc.onclick = () => {
        displayCalc.value = displayCalc.value + +numberCalc.textContent;
        console.log(numberCalc.textContent);
    }
};

for (let action of actions) {
    action.onclick = () => {
        displayCalc.value = displayCalc.value + action.textContent;
        console.log(action.textContent);
    }
};

multiply.onclick = () => {
    displayCalc.value += '*';
};

clear.onclick = () => {
    displayCalc.value = '';
};


enter.onclick = () => {
    displayCalc.value = eval(displayCalc.value);
}

displayCalc.addEventListener('keydown', function(enter) {
    if (enter.keyCode === 13) {
        let countCalc = eval();
        displayCalc.value = raschet(displayCalc.value);
    }
});