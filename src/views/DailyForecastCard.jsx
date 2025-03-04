import React from "react";
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
import rain from "../assets/assets/images/rain.svg";

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
    1273, 1276, 1186,1189
  ],
  snow: [
    1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222,
    1225, 1237, 1249, 1252, 1255, 12558, 1261, 1264, 1279, 1282,
  ],
  thunder: [1087, 1279, 1282],
  thunder_rain: [1273, 1276],
};

export const DailyForecastCard = ({ day, onCutString }) => {
  const dayIcon = Object.keys(icons).find((icon) =>
    icons[icon].includes(day.day.condition.code)
  );

  const days = {
    clear,
    mist,
    clouds: cloudy,
    snow,
    thunder,
    rain,
    moderate_heavy_rain: moderateHeavyRain,
    thunder_rain: thunderRain,
  }[dayIcon];

  return (
    <>
      <div className="daily-container">
        <h3>{onCutString(day.date)}</h3>
        <img src={ days } alt="icon" />
        <h3>{day.day.condition.text}</h3>
        <h3>{Math.floor(day.day.avgtemp_c)}°C</h3>
      </div>
    </>
  );
};
