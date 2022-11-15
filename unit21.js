// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */
const div1 = document.querySelector('.div-1');
const out1 = document.querySelector('.out-1');

div1.addEventListener("touchstart", t1);

function t1() {
    out1.textContent += 'touch ';
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

const div2 = document.querySelector('.div-2');
const out2 = document.querySelector('.out-2');

div2.addEventListener("touchstart", t2);
let count2 = 0;

function t2(event) {
    count++;
    out2.textContent = count;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
const div31 = document.querySelector('.div-3_1');
const div32 = document.querySelector('.div-3_2');
const out3 = document.querySelector('.out-3');

function t3(event) {
    out3.textContent = event.path[0].innerText; /*?? */
};


div31.addEventListener("touchstart", t3);
div32.addEventListener("touchstart", t3);
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */
const div4 = document.querySelector('.div-4');
const out4 = document.querySelector('.out-4');
const button4 = document.querySelector('.b-4');


function t4() {
    console.log('кликнул кнопку');
    button4.classList.add('active');
    div4.addEventListener("touchstart", t4);
    out4.textContent += div4.textContent;
    // div4.ontouchstart = () => {
    //     console.log('кликнул div');
    //     out4.textContent += div4.textContent;
    // };
    // return div4;
}
button4.onclick = t4;


// task5

const button5 = document.querySelector('.b-5');

function t5() {
    button5.classList.add('active');
    console.log('хочу выключить т4');
    div4.removeEventListener("touchstart", t4);
}

button5.onclick = t5;


// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */
const out6 = document.querySelector('.out-6');


function t6() {
    out6.textContent += "touchend ";
}

div4.onclick = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
const div7 = document.querySelector('.div-7');

function t7() {
    div7.style.background = 'red';
}
div7.addEventListener("touchstart", t7);

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
const a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
const div8 = document.querySelector('.div-8');


function t8() {
    div8.style.backgroundColor = a8[Math.round(Math.random() * (a8.length - 0) + 0)];
}
div8.addEventListener("touchstart", t8);
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
const out9 = document.querySelector('.out-9');
const div9 = document.querySelector('.div-9');

function t9(event) {
    out9.innerHTML = event.touches.length;
}

div9.addEventListener("touchstart", t9);

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
const div10 = document.querySelector('.div-10');
let w10 = 75;

function t10() {
    div10.style.width = w10 + 'px';
    w10++;
}
div10.addEventListener("touchmove", t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
const out11 = document.querySelector('.out-11');
const div11 = document.querySelector('.div-11');

function t11(event) {
    out11.innerHTML =
        "radiusX: " +
        event.targetTouches[0].radiusX +
        "<br>" +
        "radiusY: " +
        event.targetTouches[0].radiusY;
}

div11.addEventListener("touchstart", t11);

// ваше событие здесь!!!

// Task 13 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;
next.addEventListener("touchstart", nextFunction);

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;
prev.addEventListener("touchstart", prevFunction);

const reset = document.querySelector('.reset');
reset.onclick = resetImg;
reset.addEventListener("touchstart", resetImg);

const divMax = document.querySelector('.div-12-max');
// let innerImgMax = '`<img src="img/${maxImg}.png" alt="" class="img-12-max">`';

function nextFunction() {
    images[count].classList.remove("active-img");
    if (count === 5) {
        count = 0;
    } else {
        count = count + 1;
    }
    images[count].classList.add("active-img");

    divMax.innerHTML = `<img src="img/${count + 1}.png" alt="" class="img-12-max">`;
}

function prevFunction() {
    images[count].classList.remove("active-img");
    if (count === 0) {
        count = 5;
    } else {
        count = count - 1;
    }
    images[count].classList.add("active-img");

    divMax.innerHTML = `<img src="img/${count + 1}.png" alt="" class="img-12-max">`;
}

function resetImg() {
    images[count].classList.remove("active-img");
    count = 0;
    images[count].classList.add("active-img");

    divMax.innerHTML = `<img src="img/${count + 1}.png" alt="" class="img-12-max">`;
}