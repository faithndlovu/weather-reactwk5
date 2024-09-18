import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
function maxTemperaturature(){
    let temperature= Math.round(props.data.temp.max);
    return `${temperature}°`
}
function minTemperaturature(){
    let temperature= Math.round(props.data.temp.min);
    return `${temperature}°`
}

function day(){
    let date= new Date(props.data.dt * 1000);
    let day= date.getDay();
    
    let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];


    return days[day];
}
    return(
 <div>
 <div className="WeatherFocast-day">
    {day()} 
     </div>
    <WeatherIcon code={props.data.weather[0].icon} size={36} />
    <div className="WeatherFocast-temperatures">
        <span className="WeatherForecast-temperature-max">
            {maxTemperaturature()}</span>
    <span className="WeatherForecast-temperature-min">
        {minTemperaturature()}
    </span>
     </div>
     </div>
     );
}