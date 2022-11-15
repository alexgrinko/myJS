const buttonTask1 = document.querySelector('.button_t1');

buttonTask1.onclick = () => {
    alert('задача 1');
}

const inputTask2 = document.querySelector('.input_t2');
inputTask2.onclick = () => {
    alert('задача 2');
}

// Task3 

const paragraf = document.querySelector('.p_t3');
paragraf.onclick = () => {
    alert('задача 3');
}


const buttonTask4 = document.querySelector('.button_t4');
const inputTask4 = document.querySelector('.input_t4');
const showTask4 = document.querySelector('.show_t4');

buttonTask4.onclick = () => {
    if (inputTask4.checked) {
        showTask4.value = 'молодец';
    } else {
        showTask4.value = 'не кликнул';
    }
}

//Task5 

const buttonTask5 = document.querySelector('.button_t5');
const inputTask5 = document.querySelector('.input_t5');
const showTask5 = document.querySelector('.show_t5');

buttonTask5.onclick = () => {
    if (inputTask5.checked) {
        showTask5.value = inputTask5.value;
    } else {
        showTask5.value = 'не кликнул';
    }
};


//Task6 

const buttonTask6 = document.querySelector('.button_t6');
const inputTask6 = document.querySelector('.input_t6');
const showTask6 = document.querySelector('.show_t6');
const task6 = document.querySelector('.task6');


buttonTask6.onclick = () => {
    showTask6.value = inputTask6.value;
};

task6.onclick = () => {
    showTask6.value = '';
};

//Task7 

const buttonTask7 = document.querySelector('.button_t7');
const inputTask7 = document.querySelector('.input_t7');
const inputTask71 = document.querySelector('.input_t71');
const showTask7 = document.querySelector('.show_t7');



buttonTask7.onclick = () => {
    showTask7.value = inputTask7.value;
    let curt = showTask7.value;
    if (curt.length < 3) {
        inputTask71.value = 'пароль слишком короткий';
    } else if (curt.length > 10) {
        inputTask71.value = 'пароль слишком длинный';
    } else {
        inputTask71.value = 'пароль что надо';
    }
};


const buttonTask8 = document.querySelector('.button_t8');

const inputTask8 = document.querySelector('.input_t8');

const divTask8 = document.querySelector('.task8');
const showTask8 = document.querySelector('.show_t8');

buttonTask8.onclick = () => {
    divTask8.innerHTML = '<input type="text" value="смс" class="input_t81"><button class="button_t81">отправть</button>';
    const buttonTask81 = document.querySelector('.button_t81');
    const inputTask81 = document.querySelector('.input_t81');

    buttonTask81.onclick = () => {
        showTask8.value = inputTask81.value;
        console.log('работаю');
    };
};


//Task9 

const buttonTask9 = document.querySelector('.button_t9');
const inputTask9 = document.querySelector('.input_t9');
const showTask9 = document.querySelector('.show_t9');

buttonTask9.onclick = () => {
    if (inputTask9.checked) {
        showTask9.value = 'кликнул';
    } else {
        showTask9.value = 'не кликнул';
    }
};

//task10  

const buttonTask10 = document.querySelector('.button_t10');
const inputTask10 = document.querySelector('.input_t10');
const divColor10 = document.querySelector('.task10');

buttonTask10.onclick = () => {
    divColor10.style.backgroundColor = inputTask10.value;
    console.log(inputTask10.value);
};

//task11  

const buttonColor1 = document.querySelector('.button_t11-1');
const buttonColor2 = document.querySelector('.button_t11-2');
const inputColor1 = document.querySelector('.input_t11-1');
const inputColor2 = document.querySelector('.input_t11-2');


buttonColor1.onclick = () => {
    inputColor2.value = inputColor1.value;
};

buttonColor2.onclick = () => {
    inputColor1.value = inputColor2.value;
};


//task12  

const buttonTask12 = document.querySelector('.button_t12');
const inputTask12 = document.querySelector('.input_t12');
const showTask12 = document.querySelector('.show_t12');

buttonTask12.onclick = () => {
    showTask12.value = inputTask12.value;
};

//task13

const inputTask13 = document.querySelector('.input_t13');
const showTask13 = document.querySelector('.show_t13');

inputTask13.oninput = () => {
    showTask13.value = inputTask13.value;
};

//task14

const buttonTask14 = document.querySelector('.button_t14');
const textTask14 = document.querySelector('.text-task14');
const showTask14 = document.querySelector('.show_t14');

buttonTask14.onclick = () => {
    showTask14.value = textTask14.value;
};

//task15
const inputTask15 = document.querySelector('.input_t15');
const buttonTask15 = document.querySelector('.button_t15');
const textTask15 = document.querySelector('.text-task15');


buttonTask15.onclick = () => {
    textTask15.value = inputTask15.value;
};

//task16
const inputTask16 = document.querySelector('.input_t16');
const buttonTask16 = document.querySelector('.button_t16');
const selectTask16 = document.querySelector('.select_t16');


buttonTask16.onclick = () => {
    inputTask16.value = selectTask16.value;
};

//task17 - 18

const selectTask17 = document.querySelector('.select_t17');
const inputTask17 = document.querySelector('.input_t17');

let f17 = () => {
    inputTask17.value = 'твой выбор ' + selectTask17.value;
};

selectTask17.onchange = f17;

//19 

const text19 = document.querySelector('.input_t19');
const password19 = document.querySelector('.input_p19');
const buttonTask19 = document.querySelector('.button_t19');
const divTask19 = document.querySelector('.task19');

buttonTask19.onclick = () => {
    divTask19.innerHTML = 'пароль: ' + password19.value + ', а логин ' + text19.value;
    console.log('пароль: ' + password19.value + ', а логин ' + text19.value);
};

//20 

const text20 = document.querySelector('.input_t20');
const password20 = document.querySelector('.input_p20');
const buttonTask20 = document.querySelector('.button_t20');
const divTask20 = document.querySelector('.task20');
const formTask = document.querySelector('.form20');


buttonTask20.onclick = () => {
    divTask20.innerHTML = 'пароль: ' + formTask.elements[1].value + ', а логин ' + formTask.elements[0].value;
};