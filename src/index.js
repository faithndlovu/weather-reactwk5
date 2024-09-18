import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Weather from "./Weather";
import "./Weather.css";
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Weather defaultCity='Bulawayo' />
  
   <div className="foot">
   <footer>
    This project was coded by <a href="/" target="_blank" rel="noopener referrer">Faith L Ndlovu 
      </a>
      and is <a href="https://github.com/faithndlovu/weather-reactwk5"  target="_blank" rel="noopener noreferrer">open sourced on Github
        </a>
        and <a  href="https://gregarious-bombolone-c2a93b.netlify.app/" target="_blank" rel="noopener noreferrer"> hostd on netlify
        </a></footer>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
