const cityName = document.querySelector('.city_name');
const degree = document.querySelector('.degree');
const shape = document.querySelector('.shape');
const iconWeather = document.querySelector('.icon-weather');

const footerMap = document.querySelector('.footer-map');
// const btnWeather = document.querySelector('.btn-weather');
const inputWeather = document.querySelector('.plagin_input');
// https: //api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=16403621bbdc99a926696744d1eba624


let cityId = 5746545;
// cityName.textContent = 'Минск';
// let lonX = 27.566668;
// let latY = 53.900002;

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
    let fetchStart = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=16403621bbdc99a926696744d1eba624`;
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
            //https://openweathermap.org/img/wn/02d@2x.png
            iconWeather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
        })
        .catch(function() {
            // catch any errors
        });
}




inputWeather.onchange = () => {
    for (let key in cityAndCauntry) {
        if (inputWeather.value == cityAndCauntry[key].name) {
            console.log('нашел ' + cityAndCauntry[key].name);
            cityId = cityAndCauntry[key].id;
            // lonX = cityAndCauntry[key].coord.lon;
            // latY = cityAndCauntry[key].coord.lat;
            // console.log(cityId);
        }
    }
    // console.log(lonX + ' ' + latY);
    getWeather(cityId);
    // getMap(lonX, latY);
    return cityId;
};
// console.log('hi');
// console.log(lonX + '5' + latY);


// function getMap(lonX, latY) {
//     let divMap = `<div style="position:relative;overflow:hidden;"><a href="https://yandex.by/maps/157/berlin/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Берлин></a><a href="https://yandex.by/maps/157/berlin/?ll=${lonX}%2C${latY}&utm_medium=mapframe&utm_source=maps&z=12" style="color:#eee;font-size:12px;position:absolute;top:14px;">Минск — Яндекс Карты</a><iframe src="https://yandex.by/map-widget/v1/-/CCUueRszCC" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>`;
//     footerMap.innerHTML = divMap;
// }