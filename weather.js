const cords_ls = 'coords'
const API_KEY = '7195cbcd987fa42436cbb17aff2731f3';

const weatherContainer = document.querySelector('.js-weather')

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(response){
           return (response.json())
        })
        .then(function(json){   
            const temperature = Math.floor(json.main.temp);
            const place = json.name;
            weatherContainer.innerText = `${temperature} °C`;
        });
};

function saveCoords(positionObj) {
    localStorage.setItem(cords_ls, JSON.stringify(positionObj));
}

function geoSuccessHandler(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.latitude;
    const positionObj = {
        latitude,
        longitude
    };
    saveCoords(positionObj);
    getWeather(latitude, longitude);
}
function geoErrorHandler(error) {
    console.log('ошибка');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler);
}

function getCords(){
    const coords = localStorage.getItem(cords_ls);
    if (coords === null) {
        askForCoords()
    } else {
        const loadedCoords = JSON.parse(coords);
        getWeather(loadedCoords.latitude, loadedCoords.longitude);
    };
}

function init() {
    getCords();
}

init()