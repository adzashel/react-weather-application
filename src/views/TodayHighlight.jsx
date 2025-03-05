import React from "react";
import sunset from "../assets/assets/images/download_arrow-removebg-preview.png";
import sunrise from "../assets/assets/images/upload_arrow-removebg-preview.png";
import sunUv from "../assets/assets/images/rays.png";
import compass from "../assets/assets/images/compass.png";

const TodayHighlight = ( { weather }) => {
  const uv = Math.floor(weather.uvIndex);
  const wind = weather.winDir;
  const airQuality = Math.floor((weather.airQuality / 6) * 100);
  const airQualityIndex =
    airQuality < 50
      ? "Good 😊"
      : airQuality < "70"
      ? "Unhealthy 👎"
      : "Hazardous 💀";

  const humidityIndex = weather.humidity;
  return (
    <div className="highlight-container">
      <div className="card-highlight">
        <div className="uv">
          <span>
            <img src={sunUv} alt="" />
          </span>
          <h3>UV Index</h3>
        </div>
        <div className="uv-value">
          <h3>{uv}</h3>
          <p>
            {uv < 3
              ? "Low"
              : uv < 6
              ? "Moderate"
              : uv < 11
              ? "High"
              : "Extreme"}
          </p>
        </div>
      </div>
      <div className="card-highlight">
        <h3 className="wind-header">Wind Status</h3>
        <div className="wind-status">
          <div className="wind">
            35 <span>km/h</span>
          </div>
          <div className="wind-dir">
            <img src={compass} alt="" />
            <h3>{wind}</h3>
          </div>
        </div>
      </div>
      <div className="card-highlight">
        <div className="sunrise-sunset">
          <h3> Sunrise & Sunset </h3>
          <div className="wrapper">
            <div className="wrapper-detail">
              <img src={sunrise} alt="" />
              <h3>{weather.sun}</h3>
            </div>
            <div className="wrapper-detail">
              <img src={sunset} alt="" />
              <h3>{weather.moon}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="card-highlight">
        <div className="humidity">
          <h3>Humidity</h3>
          <h4>{humidityIndex}%</h4>
        </div>
        <h3 className="index">
          {humidityIndex <= 30
            ? "Low 👎"
            : humidityIndex <= 60
            ? "Normal 👍"
            : "High ⚠️"}
        </h3>
      </div>
      <div className="card-highlight">
        <div className="wind-vite">
          <div>Wind Speed</div>
          <h3>
            {weather.windSpeed} <span>km</span>
          </h3>
          <p>Average</p>
        </div>
      </div>
      <div className="card-highlight">
        <div className="air-quality">
          <div>Air Quality Index</div>
          <h3>{airQuality}%</h3>
          <h4>{airQualityIndex}</h4>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;
