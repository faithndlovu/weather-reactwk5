import './App.css';
import Weather from "./Weather";
import  "./Weather.css";

function App() {  
  return (
    <div className="App">
<div className="container">
  <Weather defaultCity="Bulawayo" />

     <footer>
      This project was coded by <a href="/" target="_blank" rel="noopener referrer">Faith L Ndlovu 
      </a>
      {" "} and{" "} is <a href="https://github.com/faithndlovu/weather-reactwk5"  target="_blank" rel="noopener noreferrer">open sourced on Github
        </a> {" "}
        and {" "} <a  href="https://gregarious-bombolone-c2a93b.netlify.app/" target="_blank" rel="noopener noreferrer"> hosted on netlify
        </a>
      </footer>
    </div>
    </div>
  );
}

export default App;
