import "./App.css";
import { useState } from "react";

const api = {
  key: "21827cf62baa7c2c450aff9052f5a7e1",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
  }
}

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`
  }


    // function changeWeather (obj) {
    //   let result = obj.weather[0].main != "undefined" ? weather.weather[0].main.toLowerCase() : "";
    // }
  

  return (
    
  <div className="body">
    
    <div className={(typeof weather.main != "undefined") 
        ? ((weather.weather[0].main === "Mist") 
          ? "bg mist" 
          : ((weather.weather[0].main === "Clouds") 
          ? "bg clouds" 
          : ((weather.weather[0].main === "Clear")
          ? "bg clear"
          : ((weather.weather[0].main === "Drizzle")
          ? "bg drizzle"
          : ((weather.weather[0].main === "Rain")
          ? "bg rain"
          : ((weather.weather[0].main === "Haze")
          ? "bg haze"
          : ((weather.weather[0].main === "Fog")
          ? "bg fog"
          : "bg"
          ))))))) : "bg"}></div>
    <div className={(typeof weather.main != "undefined") 
        ? ((weather.weather[0].main === "Mist") 
          ? "app mist" 
          : ((weather.weather[0].main === "Clouds") 
          ? "app clouds" 
          : ((weather.weather[0].main === "Clear")
          ? "app clear"
          : ((weather.weather[0].main === "Drizzle")
          ? "app drizzle"
          : ((weather.weather[0].main === "Rain")
          ? "app rain"
          : ((weather.weather[0].main === "Haze")
          ? "app haze"
          : ((weather.weather[0].main === "Fog")
          ? "app fog"
          : "app"
          ))))))) : "app"}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Type Country, City, State to Check Weather..!"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search} />
        </div>
        {(typeof weather.main != "undefined") ? (
      <div>  
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
      </div> 
        ) : ("")}
      </main>
    </div>
  </div>
  );
}

export default App;
