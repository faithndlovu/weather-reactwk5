import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props){

    const [weatherData, setWeatherData]= useState({ready: false});
    const [cityName, setCity]= useState(props.defaultCity);
   
    function handleResponse(response){
setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    wind: response.data.wind.speed,
    cityName: response.data.name
});

}
function search(){
    const apikey ="a3739c77d5b9d0b613e5cf74c39c86d0";
    let apiurl = `https://openweathermap.org/data/2.5/weather?q=${cityName}}&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(handleResponse);

}

function handleSubmit(event) {
    event.preventDefault();
    search();
}


function handleChangeCity(event){
setCity(event.target.value);

}


if (weatherData.ready){

    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row mt-3">
                    <div className="col-8">
                <input type="search" 
                placeholder="Enter a city..."
                 className="form-control" autoFocus="on"
                 onChange={handleChangeCity} value={cityName}/>
                </div>
                <div className="col-3">
                <input type="submit" 
                value="Search" 
                className="btn btn-primary w-100"/>
           </div>
            </div>
            </form>
            <WeatherInfo data={weatherData} />
           
        </div>
    );
} else{
 search();   
  return "loading!...";
  
}
}