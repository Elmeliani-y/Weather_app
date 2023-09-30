import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./style.css";
const Weather = () => {
  let api_key = "60326e6df31d641398de65b92f21df84";
  let [wicon, setWicon] = useState(""); 

  let search = async () => {
    const element = document.getElementsByClassName("search-bar");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${element[0].value}&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = "Humidity : " + data.main.humidity + "%";
    wind[0].innerHTML = "Wind Speed : " + data.wind.speed + " km/h";
    temperature[0].innerHTML = Math.round(data.main.temp) + "°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon("./src/weather-app/assets/clear.png");
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon("./src/weather-app/assets/cloud.png");
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon("./src/weather-app /assets /drizzle.png");
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon("./src/weather-app/assets/drizzle.png");
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon("./src/weather-app/assets/rain.png");
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon("./src/weather-app/assets/rain.png");
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon("src/weather-app/assets/snow.png");
    } else {
      setWicon("src/eather-app/ssets/lear.png");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center border-radius-50px">
      <div className="card text-white bg-dark">
        <div className="card-header text-center">Weather App</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Enter a location"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary search_icon"
                type="button"
                onClick={search}
              >
                Search
              </button>
            </div>
          </div>
          <div className="weather-image text-center">
            <img src={wicon} height={70} />
          </div>
          <div className="weather-temp text-center">
            <p>
              Temperature: <span className="font-weight-bold">--</span>
            </p>
          </div>
          <div className="weather-location text-center">
            <p>
              Location: <span className="font-weight-bold">--</span>
            </p>
          </div>
          <div className="data-container">
            <div className="element">
              <img
                src="src/weather-app/assets/icons8-humidity.gif"
                alt="Humidity Icon"
              />
              <div className="data">
                <p className="humidity-percentage">
                  Humidity: <span className="font-weight-bold">--</span>
                </p>
              </div>
            </div>
            <div className="element">
              <img
                src="src/weather-app/assets/icons8-wind.gif"
                alt="Wind Icon"
              />
              <div className="data">
                <p className="wind-speed">
                  Wind Speed: <span className="font-weight-bold">--</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
