import './App.css';
import Weather from "./Weather";
import FormattedDate from "./FormattedDate";
import  "./Weather.css";

function App() {  
  return (
    <div className="App">
     <Weather/>
     <footer>This project was coded by <a href="/" target="_blank">Faith L Ndlovu 
      </a>
      and is <a href="https://github.com/faithndlovu/weather-reactwk5"  target="_blank">open sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
