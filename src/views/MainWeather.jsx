import awan from "../assets/assets/images/cloud.png";
import hujan from "../assets/assets/images/water.svg";
import SearchInput from "./SearchInput";
import clear from "../assets/assets/images/clear.svg";
import cloudy from "../assets/assets/images/clouds.svg";
import moderateHeavyRain from "../assets/assets/images/moderate_heavy_rain.svg";
import mist from "../assets/assets/images/mist.svg";
import snow from "../assets/assets/images/snow.svg";
import thunder from "../assets/assets/images/thunder.svg";
import thunderRain from "../assets/assets/images/thunder_rain.svg";
import moon from "../assets/assets/images/moon.svg";
import nightRaining from "../assets/assets/images/nightRaining.svg";
import nightCLoudy from "../assets/assets/images//nightClouds.svg";
import rain from '../assets/assets/images/rain.svg'

const icons = {
  clear: [1000],
  clouds: [1003, 1006, 1009],
  mist: [1030, 1135, 1147],
  rain: [
    1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246,
    1273, 1276,
  ],
  moderate_heavy_rain: [
    1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246,
    1273, 1276, 1186,
  ],
  snow: [
    1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222,
    1225, 1237, 1249, 1252, 1255, 12558, 1261, 1264, 1279, 1282,
  ],
  thunder: [1087, 1279, 1282],
  thunder_rain: [1273, 1276],
};

const nightIcons = {
  moon: [1000],
  nightClouds: [1003, 1006, 1009],
  mist: [1030, 1135, 1147],
  nightRaining: [
    1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246,
    1273, 1276,
  ],
  moderate_heavy_rain: [
    1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246,
    1273, 1276, 1186,
  ],
  snow: [
    1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210 , 1213, 1216, 1219, 1222,
    1225, 1237, 1249, 1252, 1255, 12558, 1261, 1264, 1279, 1282,
  ],
  thunder: [1087, 1279, 1282],
  thunder_rain: [1273, 1276],
};

const MainWeather = ({ onHandleSearch, query, setQuery, weather }) => {
  const currentDay = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[currentDay.getDay()];
  const weatherIcon = Object.keys(icons).find((icon) =>
    icons[icon].includes(weather.codeIcon)
  );
  const iconNight = Object.keys(nightIcons).find((icon) =>
    nightIcons[icon].includes(weather.codeIcon)
  );

  const days = {
    clear ,
    mist ,
    clouds : cloudy,
    snow,
    thunder,
    rain,
    moderate_heavy_rain : moderateHeavyRain,
    thunder_rain : thunderRain,

  }[weatherIcon]

  const night = {
    moon,
    nightClouds : nightCLoudy,
    mist,
    nightRaining,
    moderate_heavy_rain : moderateHeavyRain,
    snow,
    thunder,
    thunder_rain : thunderRain
  }[iconNight]
  return (
    <div className="main-weather">
      {/* input field to search city */}
      <SearchInput
        handleSearch={onHandleSearch}
        query={query}
        setQuery={setQuery}
      />
      {/* weather icon */}
      <div className="current-weather">
        <img src={ weather.astro  ? days : night } alt="weather" />
        {/* weather details */}
        <div className="weather-detail">
          <h3 className="temp">
            {weather.temperature}
            <span>°C</span>
          </h3>
          <h5 className="city">
            {day} , {weather.time}{" "}
          </h5>
        </div>
      </div>
      <div className="horizontal-line"></div>

      {/* condition  */}
      <div className="condition">
        <div className="weather-condition">
          <img src={awan} alt="icon" />
          <h4>{weather.text}</h4>
        </div>
        <div className="weather-condition">
          <img src={hujan} alt="rain posibility" />
          <h4>{ weather.chanceOfRain }% Chance of Rain</h4>
        </div>
        <div className="city-name">
          <h3>
            {weather.city} , {weather.country}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
