const cityName = document.querySelector('.city_name');
const degree = document.querySelector('.degree');
const shape = document.querySelector('.shape');
const iconWeather = document.querySelector('.icon-weather');

const btnWeather = document.querySelector('.btn-weather');
const inputWeather = document.querySelector('.plagin_input');
// https: //api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=16403621bbdc99a926696744d1eba624
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
            degree.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            shape.textContent = data.weather[0]['description'];
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
            // console.log(cityId);
        }
    }
    getWeather(cityId);
    return cityId;
};
console.log('hi');