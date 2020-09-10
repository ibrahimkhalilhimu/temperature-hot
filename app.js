// const weatherApi ={
//     key:'a43fd8f6dfb29d2f794e86c700e9f082',
//     baseUrl:"http://api.openweathermap.org/data/2.5/weather?"
// }
const searchInput = document.getElementById('inputBox')
document.getElementById('btn').addEventListener('click',(event) =>{
  
        console.log(searchInput.value);
    getWatherReport(searchInput.value);
    
})

function getWatherReport(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=city&APPID=a43fd8f6dfb29d2f794e86c700e9f082`)
    .then(weather => {
        return weather.json()})
    .then(showWeatherReport(searchInput.value));
}

function showWeatherReport(weather){
    console.log(weather)
    let city = document.getElementById('city');
    city.innerText =`${weather.name},${weather.sys.country}`;
    let temp =  document.getElementById('temp');
    temp.innerText =`${Math.round(weather.main.temp)}`;

    let minMaxTemp =  document.getElementById('min-max');
    minMaxTemp.innerText = `${Math.floor(weather.main.temp_min)} (min)/ ${Math.ceil(weather.main.temp_max)}`
    
    let weatherType = document.getElementById('weatherType');
    weatherType.innerText = `${weather.weather[0].main}`
    

}

