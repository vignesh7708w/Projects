

const getWeatherData=(city)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a302d85386msh7d2672867d523ecp1b333ajsn7c98766041cc',
            'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
        }
    };
    
   return fetch(`https://bestweather.p.rapidapi.com/weather/${city}/today?unitGroup=us`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err))

}


const searchCity=async ()=>{
    const city=document.getElementById('city-input').value;
    const data=await getWeatherData(city)
    console.log(data)
    showWeatherData(data)
    
}
const showWeatherData=(weatherData)=>{
    document.getElementById("city-name").innerText=document.getElementById('city-input').value
    document.getElementById("temp").innerText=weatherData.currentConditions.temp
    document.getElementById("weather-type").innerText=weatherData.currentConditions.conditions
    document.getElementById("min-temp").innerText=weatherData.currentConditions.humidity
    document.getElementById("max-temp").innerText=weatherData.currentConditions.dew
}