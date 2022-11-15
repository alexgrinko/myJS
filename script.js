//keybord

const input11 = document.querySelector('.i-11');
const keyS = document.querySelectorAll('.key');


function t11(event) {
    keyS.forEach((elem) => {
        elem.classList.remove('active_key');
    });
    document.querySelector(`.key[data-key="${event.keyCode}"]`).classList.add('active_key');
}

for (let key of keyS) {
    key.onclick = function() {
        let a = key.textContent;
        if (a.length < 2) {
            input11.value += a;
        } else if (a.length > 1) {
            input11.value = '';
        }

    }
}

input11.onkeydown = t11;


//calc

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


/// Прогноз погоды

const cityName = document.querySelector('.city_name');
const degree = document.querySelector('.degree');
const shape = document.querySelector('.shape');
const iconWeather = document.querySelector('.icon-weather');
const footerMap = document.querySelector('.footer-map');
const inputWeather = document.querySelector('.plagin_input');
let cityId = 5746545;

const cityAndCauntry = [{
        "id": 625144,
        "name": "Минск",
        "state": "",
        "country": "BY",
        "coord": {
            "lon": 27.566668,
            "lat": 53.900002
        }
    },
    {
        "id": 703448,
        "name": "Киев",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 30.516666,
            "lat": 50.433334
        }
    },
    {
        "id": 5746545,
        "name": "Портленд",
        "state": "OR",
        "country": "US",
        "coord": {
            "lon": -122.676208,
            "lat": 45.523449
        }
    },
    {
        "id": 1220988,
        "name": "Москва",
        "state": "",
        "country": "TJ",
        "coord": {
            "lon": 69.627747,
            "lat": 37.661968
        }
    }, {
        "id": 456172,
        "name": "Рига",
        "state": "",
        "country": "LV",
        "coord": {
            "lon": 24.1,
            "lat": 56.950001
        }
    }, {
        "id": 756135,
        "name": "Варшава",
        "state": "",
        "country": "PL",
        "coord": {
            "lon": 21.01178,
            "lat": 52.229771
        }
    }, {
        "id": 2950159,
        "name": "Берлин",
        "state": "",
        "country": "DE",
        "coord": {
            "lon": 13.41053,
            "lat": 52.524368
        }
    }, {
        "id": 2643743,
        "name": "Лондон",
        "state": "",
        "country": "GB",
        "coord": {
            "lon": -0.12574,
            "lat": 51.50853
        }
    },
    {
        "id": 686967,
        "name": "Житомир",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 28.676689,
            "lat": 50.26487
        }
    }
]

function getWeather(cityId) {
    let fetchStart = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=16403621bbdc99a926696744d1eba624`;
    fetch(fetchStart)
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            console.log(data);
            cityName.textContent = data.name;
            if (data.name === 'Kyiv') {
                cityName.textContent = 'Киев';
            }
            if (data.name === 'Zhytomyr') {
                cityName.textContent = 'Житомир';
            }
            if (data.name === 'London') {
                cityName.textContent = 'Лондон';
            }
            if (data.name === 'Berlin') {
                cityName.textContent = 'Берлин';
            }
            if (data.name === 'Warsaw') {
                cityName.textContent = 'Варшава';
            }
            if (data.name === 'Minsk') {
                cityName.textContent = 'Минск';
            }
            if (data.name === 'Portland') {
                cityName.textContent = 'Портленд';
            }
            if (data.name === 'Riga') {
                cityName.textContent = 'Рига';
            }
            if (data.name === 'Moskva') {
                cityName.textContent = 'Москва';
            }
            degree.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            shape.textContent = data.weather[0]['description'];
            if (data.weather[0]['description'] === 'overcast clouds') {
                shape.textContent = 'пасмурные облака';
            }
            if (data.weather[0]['description'] === 'scattered clouds') {
                shape.textContent = 'рассеянные облака';
            }
            if (data.weather[0]['description'] === 'broken clouds') {
                shape.textContent = 'чистое небо';
            }
            if (data.weather[0]['description'] === 'clear sky') {
                shape.textContent = 'ясное небо';
            }
            if (data.weather[0]['description'] === 'light rain') {
                shape.textContent = 'небольшой дождь';
            }
            if (data.weather[0]['description'] === 'few clouds') {
                shape.textContent = 'облачно';
            }
            if (data.weather[0]['description'] === 'clear sky') {
                shape.textContent = 'ясное небо';
            }
            iconWeather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
        })
        .catch(function() {

        });
}

inputWeather.onchange = () => {
    for (let key in cityAndCauntry) {
        if (inputWeather.value == cityAndCauntry[key].name) {
            console.log('нашел ' + cityAndCauntry[key].name);
            cityId = cityAndCauntry[key].id;
        }
    }
    getWeather(cityId);
    return cityId;
};


// slaider
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

//// 

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.input__file');
const preview = document.querySelector('.file_img');
const imgEffect = document.querySelector('.effect_img');

fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
        return fileName.endsWith(it);
    });

    if (matches) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            preview.src = reader.result;


            let imgEffectbachground = preview.src;
            let img = new Image();
            img.src = imgEffectbachground;
            imgEffect.style.backgroundImage = "url('" + img.src + "')";

            // "url('preview.src')";
        });

        reader.readAsDataURL(file);
    }
});