import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props){

    const [weatherData, setWeatherData]= useState({ready: false});
    const [city, setCity]= useState(props.defaultCity);
   
    function handleResponse(response){
setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    wind: response.data.wind.speed,
    city: response.data.name
});

}
function search(){
    const apikey ="281450ec88936f4fa8ee9864682b49a0";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
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
                 onChange={handleChangeCity}/>
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