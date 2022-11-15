const divT1 = document.querySelector('.div-t1');
const buttonT1 = document.querySelector('.button_t1');

buttonT1.onclick = () => {
    divT1.style.width = '150px';
    divT1.style.height = '100px';
    divT1.style.backgroundColor = 'gray';
    divT1.innerHTML = 'блок';
    buttonT1.innerHTML = 'ок';
};





const divT2 = document.querySelector('.div-t2');
const buttonT2 = document.querySelector('.button_t2');
buttonT2.onclick = () => {
    divT2.classList.add('div-nigh');
};

const divT3 = document.querySelector('.div-t3');
const buttonT3 = document.querySelector('.button_t3');
buttonT3.onclick = () => {
    divT3.classList.remove('div-nigh');
};




const divT4 = document.querySelector('.div-t4');
const buttonT4 = document.querySelector('.button_t4');
buttonT4.onclick = function() {
    divT4.classList.toggle('div-nigh');
};

const divT5 = document.querySelector('.div-t5');
const buttonT5 = document.querySelector('.button_t5');
buttonT5.onclick = function() {
    if (divT4.classList.contains('div-nigh')) {
        divT5.innerHTML = 'ночь';
    } else {
        divT5.innerHTML = 'день';
    }
};


const studend = document.querySelectorAll('.stud6');
const divT6 = document.querySelector('.div-t6');
const buttonT6 = document.querySelector('.button_t6');

buttonT6.onclick = function() {
    for (let i = 0; i < studend.length; i++) {
        divT6.innerHTML = i + 1;
    }
};

const studend7 = document.querySelectorAll('.stud7');
const buttonT7 = document.querySelector('.button_t7');

buttonT7.onclick = function() {
    for (let i = 0; i < studend7.length; i++) {
        studend7[i].classList.add('stud-form');
    }
};

const studend8 = document.querySelectorAll('.stud8');
const buttonT8 = document.querySelector('.button_t8');

buttonT8.onclick = function() {
    for (let i = 0; i < studend8.length; i++) {
        studend8[i].classList.toggle('stud-form');
        if (studend8[i].classList.contains('stud-form')) {
            buttonT8.innerHTML = 'снять';
        } else {
            buttonT8.innerHTML = 'одеть';
        }
    }
};

const studend9 = document.querySelectorAll('.stud-form-9');
for (let i = 0; i < studend9.length; i++) {
    studend9[i].onclick = () => {
        studend9[i].classList.toggle('stud-sport');
    }
};


const taskDiv11 = document.querySelector('.task11');
const buttonT11 = document.querySelector('.button_t11');

buttonT11.onclick = () => {
    let newdiv1 = document.createElement('div');
    taskDiv11.appendChild(newdiv1);
    newdiv1.innerHTML = 'я div с текстом';
    newdiv1.style.border = '2px solid black';
};


const taskDiv13 = document.querySelector('.task13');
const buttonT13 = document.querySelector('.button_t13');

buttonT13.onclick = () => {
    let newdiv13 = document.createElement('div');
    taskDiv13.appendChild(newdiv13);
    newdiv13.innerHTML = 'я не div, я кнопка';
    newdiv13.style.cursor = 'pointer';
    newdiv13.onclick = () => {
        newdiv13.innerHTML = 'красивая кнопка';
        newdiv13.style.backgroundColor = 'red';
        newdiv13.style.color = 'white';
    };
};


const taskDiv14 = document.querySelector('.task14');
const buttonT14 = document.querySelector('.button_t14');

buttonT14.onclick = () => {
    let newdiv14 = document.createElement('div');
    taskDiv14.prepend(newdiv14);
    newdiv14.innerHTML = 'я теперь первая';
    newdiv14.style.cursor = 'pointer';
    newdiv14.onclick = () => {
        newdiv14.innerHTML = 'и красивая';
        newdiv14.style.backgroundColor = 'red';
        newdiv14.style.color = 'white';
    };
};



const taskDiv15 = document.querySelector('.task15');
const buttonT15 = document.querySelector('.button_t15');

buttonT15.onclick = () => {
    let newdiv15 = document.createElement('div');
    taskDiv15.before(newdiv15);
    newdiv15.innerHTML = 'я изгой';
    newdiv15.style.cursor = 'pointer';
    newdiv15.onclick = () => {
        newdiv15.innerHTML = 'но красивый';
        newdiv15.style.backgroundColor = 'red';
        newdiv15.style.color = 'white';
    };
};


const taskDiv16 = document.querySelector('.task16');
const buttonT16 = document.querySelector('.button_t16');

buttonT16.onclick = () => {
    let newdiv16 = document.createElement('div');
    taskDiv16.after(newdiv16);
    newdiv16.innerHTML = 'я все еще изгой';
    newdiv16.style.cursor = 'pointer';
    newdiv16.onclick = () => {
        newdiv16.innerHTML = 'хочу домой';
        newdiv16.style.backgroundColor = 'green';
        newdiv16.style.color = 'white';
    };
};

const taskDiv17 = document.querySelector('.task17');
const buttonT17 = document.querySelector('.button_t17');

buttonT17.onclick = () => {
    let newdiv17 = document.createElement('div');
    taskDiv17.replaceWith(newdiv17);
    newdiv17.innerHTML = 'ха-ха-ха';
    newdiv17.style.cursor = 'pointer';
    newdiv17.onclick = () => {
        newdiv17.innerHTML = 'я победил';
        newdiv17.style.backgroundColor = 'green';
        newdiv17.style.color = 'white';
    };
};


const buttonT18 = document.querySelector('.button_t18');
const pTask18 = document.querySelector('.p-task18');
const input18 = document.querySelector('.input18');
buttonT18.onclick = () => {
    input18.value = pTask18.getAttribute('data');
};

const taskDiv20 = document.querySelector('.task20');
const buttonT20 = document.querySelector('.button_t20');
const pTask20 = document.querySelector('.p-task20');
const input20 = document.querySelector('.input20');
buttonT20.onclick = () => {
    pTask20.setAttribute('title', 'go');
    input20.value = pTask20.getAttribute('title');
};