 UNIT 1!!

     console.log('Alex Grinko');
 console.log(7);
 console.log('Добро ' + 'пожаловать ' + ' на курс');

 const title = document.querySelector('.hello');
 title.innerHTML = 'Goodbae';
 // alert('2019');
 // alert('2019' - '200');

 const one = document.getElementById('one');
 one.innerHTML = 'Hello World';

 const two = document.getElementById('two');
 two.innerHTML = '12' * '12';

 const spanTitle = document.querySelector('span');
 spanTitle.innerHTML = 'world';

 const three = document.querySelector('.three');
 three.innerHTML = '<h3>привет заголовок</h3>';

 const four = document.querySelector('.four');
 four.innerHTML = '<h4>еще заголовок</h4>';
 four.innerHTML += '<p>с произвольным текстом</p>';

 const a = document.querySelector('.five');
 a.innerHTML = '3.1415';

 const div7 = document.querySelector('.seven')
 div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';

 const z1 = 6;
 const z2 = 3;

 let divSix = document.querySelector('.six');
 divSix.innerHTML = z1 * z2;


 const y1 = 6;
 const y2 = 3;

 let div8 = document.querySelector('.div8');
 div8.innerHTML = y1 / y2;


 const x1 = 'Hello';
 const x2 = 5;

 let div9 = document.querySelector('.div9');
 div9.innerHTML = x1 + x2;

 const d1 = document.querySelector('.test-1');
 console.log(d1);

 // const d2 = document.querySelector('.test-2');
 // console.log(d2);
 // d2 = 25;

 const divS3 = document.querySelector('.s3');
 console.log(divS3);

 // const divS3 = document.querySelector('.s4');
 // console.log(divS3);

 const body = document.querySelector('body');
 body.innerHTML = '...innerHTML = ';

 UNIT 2!!!

     // <body>
     //     <div class="container">
     //         <h1>Урок от Александра Лущенко</h1>
     //         <p class="hello">Hello</p>
     //     </div>
     //     <div>
     //         <input class="input_text" type="text" value="hi">
     //         <button class="input_button">ok</button>
     //     </div>
     //     <div>
     //         <input class="input_text_2" type="text" value="hi">
     //         <button class="input_button_2">ok</button>
     //     </div>
     //     <div>
     //         <input class="input_text_3" type="text" value="множим на 10">
     //         <button class="input_button_3">ok</button>
     //     </div>
     //     <div>
     //         <input class="input_text_4" type="text" value="прибавлю на 10">
     //         <button class="input_button_4">ok</button>
     //     </div>
     //     <div>
     //         <input class="name" type="text" value="имя">
     //         <input class="firstname" type="text" value="фамилия">
     //         <button class="input_button_5">отправить</button>
     //     </div>
     //     <div>
     //         <input class="a1" type="text" value="">
     //         <input class="b1" type="text" value="">
     //         <button class="input_button_6">отправить</button>
     //     </div>
     //     <div>
     //         <input class="task14" type="text" value="77">
     //     </div>
     //     <div>
     //         <input class="task15" type="text" value="">
     //     </div>
     //     <div class="task16">
     //         <input class="calc" type="text" placeholder="результат">
     //         <input class="task16_1" type="number" value="" placeholder="число 1">
     //         <input class="task16_2" type="number" value="" placeholder="число 2">
     //         <button class="input_button_8">посчитать</button>
     //     </div>
     //     <div>
     //         <input class="task17" type="text" value="">
     //         <button class="input_button_9">клик</button>
     //     </div>
     //     <div>
     //         <input class="task18" type="text" value="">
     //         <button class="input_button_18">клик</button>
     //     </div>
     //     <div class="task19">
     //         <input class="calc19" type="text" placeholder="результат">
     //         <input class="task19_1" type="number" value="" placeholder="число 1">
     //         <input class="task19_2" type="number" value="" placeholder="число 2">
     //         <button class="input_button_19">посчитать</button>
     //     </div>
     //     <div class="anketa container">
     //         <h2>Анкета</h2>
     //         <input class="usser input_anket" type="text" placeholder="имя">
     //         <br>
     //         <input class="fuelname input_anket" type="text" placeholder="фамилия">
     //         <br>
     //         <input class="data_old input_anket" type="text" placeholder="сколько лет">
     //         <br>
     //         <input class="profession input_anket" type="text" placeholder="любимая професcия">
     //         <br>
     //         <textarea class="textarea input_anket" placeholder="тут что-то есть" rows="7"></textarea>
     //         <br>
     //         <button class="input_button_20">узнать что</button>
     //     </div>
     // </body>
     const a = 7;
 const b = 9;

 const c = 7;
 const d = 9;

 const e = 3;
 const f = 5;

 const e1 = '3';
 const f1 = 5;

 const e2 = 3;
 const f2 = 0;

 const e3 = 3;
 const f3 = 'Hello';

 console.log(a * b);
 console.log(c / d);
 console.log(e + f);
 console.log(e1 + f1);

 console.log(e2 / f2);
 console.log(e3 + f3);

 const inputText = document.querySelector('.input_text');
 const inputButton = document.querySelector('.input_button');

 inputButton.onclick = function() {
     console.log(inputText.value);
 };

 const inputTextTwo = document.querySelector('.input_text_2');
 const inputButtonTwo = document.querySelector('.input_button_2');

 inputButtonTwo.onclick = function() {
     console.log(inputTextTwo.value);
     inputTextTwo.value = '';
 };

 const inputText3 = document.querySelector('.input_text_3');
 const inputButton3 = document.querySelector('.input_button_3');

 inputButton3.onclick = function() {
     console.log(inputText3.value * 10);
     inputText3.value = '';
 };

 const inputText4 = document.querySelector('.input_text_4');
 const inputButton4 = document.querySelector('.input_button_4');

 inputButton4.onclick = function() {
     console.log(+inputText4.value + 10);
     inputText4.value = '';
 };

 const userName = document.querySelector('.name');
 const firstName = document.querySelector('.firstname');
 const inputButton5 = document.querySelector('.input_button_5');

 inputButton5.onclick = function() {
     console.log(userName.value + ' ' + firstName.value);
     firstName.value = '';
     userName.value = '';
 };

 const a1 = document.querySelector('.a1');
 const b1 = document.querySelector('.b1');
 const inputButton6 = document.querySelector('.input_button_6');

 inputButton6.onclick = function() {
     const aa = +a1.value;
     const bb = +b1.value;
     console.log(aa + bb);
     a1.value = '';
     b1.value = '';
 };

 const task14 = document.querySelector('.task14');
 task14.value = 'Hello';

 const y = document.querySelector('.task15');
 y.style.border = '2px solid red';


 const div16 = document.querySelector('.task16');
 const numberOne = document.querySelector('.task16_1');
 const numberTwo = document.querySelector('.task16_2');
 const Calculator = document.querySelector('.calc');
 const inputButton8 = document.querySelector('.input_button_8');
 inputButton8.onclick = function() {
     const num1 = +numberOne.value;
     const num2 = +numberTwo.value;
     Calculator.value = num1 + num2;
 };

 const task17 = document.querySelector('.task17');
 const inputButton9 = document.querySelector('.input_button_9');
 inputButton9.onclick = function() {
     let t = task17.value;
     t = parseInt(t);
     console.log(t);
 };

 const task18 = document.querySelector('.task18');
 const inputButton18 = document.querySelector('.input_button_18');
 inputButton18.onclick = function() {
     let t = task18.value;
     t = parseFloat(t);
     console.log(t);
 };


 const numberOne19 = document.querySelector('.task19_1');
 const numberTwo19 = document.querySelector('.task19_2');
 const Calculator19 = document.querySelector('.calc19');
 const inputButton19 = document.querySelector('.input_button_19');
 inputButton19.onclick = function() {
     const one19 = +numberOne19.value;
     // one19 = parseInt(one19);
     // two19 = parseInt(two19);
     const two19 = +numberTwo19.value;
     Calculator19.value = one19 + two19;
 };


 {
     /* <input class="usser" type="text" placeholder="имя">
             <br>
             <input class="fuelname" type="text" placeholder="фамилия">
             <br>
             <input class="data_old" type="text" placeholder="сколько лет">
             <br>
             <input class="profession" type="text" placeholder="любимая професcия">
             <br>
             <textarea class="textarea" placeholder="тут что-то есть" rows="10"></textarea>
             <button class="input_button_20">узнать что</button> */
 }

 const usserName = document.querySelector('.usser');
 const fuelName = document.querySelector('.fuelname');
 const dataOld = document.querySelector('.data_old');
 const profession = document.querySelector('.profession');
 const textarea = document.querySelector('.textarea');
 const inputButton20 = document.querySelector('.input_button_20');
 inputButton20.onclick = function() {

     textarea.value = 'Привет меня зовут ' + usserName.value + ' ' + fuelName.value + '!' + ' Я уже большой, мне ' + dataOld.value + 'годика. Когда я выросту я хочу работать ' + profession.value + 'ом! У меня все получится!';
 };