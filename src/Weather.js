import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(){

    const [weatherData, setWeatherData]= useState({ready: false});
    function handleResponse(response){
        console.log(response.data)
setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    iconurl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
    wind: response.data.wind.speed,
    city: response.data.name
});

}
if (weatherData.ready){

    return(
        <div className="Weather">
            <form>
                <div className="row mt-3">
                    <div className="col-8">
                <input type="search" 
                placeholder="Enter a city..."
                 className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" 
                value="Search" 
                className="btn btn-primary w-100"/>
           </div>
            </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                <FormattedDate date={weatherData.date}/>
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            
            <div className="row ">
                <div className="col-6 mt-3">
                    <div className="clearfix">
                    <img src={weatherData.iconurl} 
                    alt={weatherData.description}
                     className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                </div>
                </div>
                </div>
             
                <div className="col-6">
                    <ul>
                         <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind}km/h</li>
           </ul>
            </div>
        </div>
        </div>
    );
} else{
    
const apikey ="85bbd3d16a2dfe0ecf253c7ae1e8fe03";
  let city= "Bulawayo";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  axios.get(apiurl).then(handleResponse);

  return "loading!...";

}
}