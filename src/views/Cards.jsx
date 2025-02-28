import React from "react";
import clear from "../assets/assets/images/clear.svg";
import cloudy from "../assets/assets/images/clouds.svg";
import rain from "../assets/assets/images/rain.svg";
import moderateHeavyRain from "../assets/assets/images/moderate_heavy_rain.svg";
import mist from "../assets/assets/images/mist.svg";
import snow from "../assets/assets/images/snow.svg";
import thunder from "../assets/assets/images/thunder.svg";
import thunderRain from "../assets/assets/images/thunder_rain.svg";
import moon from "../assets/assets/images/moon.svg";
import nightRaining from "../assets/assets/images/nightRaining.svg";
import nightCLoudy from "../assets/assets/images//nightClouds.svg";


const icons = {
  clear : [ 1000 ],
  clouds : [ 1003, 1006, 1009 ],
  mist : [ 1030 , 1135 , 1147 ],
  rain : [ 1063 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273 , 1276],
  moderate_heavy_rain : [ 1063 , 1150, 1195 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240, 1192 , 1243 , 1246 , 1273, 1276 , 1186],
  snow : [ 1066 , 1069 , 1072 , 1114 , 1117 , 1204 , 1207 , 1210 , 1213 , 1216 , 1219 , 1222 , 1225 , 1237 , 1249 , 1252 , 1255 , 1258 , 1261 , 1264 , 1279 , 1282 ],
  thunder : [ 1087 , 1279 , 1282 ],
  thunder_rain : [1273 , 1276]
  }

  const nightIcons = {
    moon : [1000],
    nightClouds : [1003 , 1006 , 1009],
    mist : [ 1030 , 1135 , 1147 ],
    nightRaining : [1063 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273 , 1276],
    moderate_heavy_rain : [ 1063 , 1195 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273, 1276 ,1186],
    snow : [ 1066 , 1069 , 1072 , 1114 , 1117 , 1204 , 1207 , 1210 , 1213 , 1216 , 1219 , 1222 , 1225 , 1237 , 1249 , 1252 , 1255 , 1258 , 1261 , 1264 , 1279 , 1282 ],
    thunder : [ 1087 , 1279 , 1282 ],
    thunder_rain : [1273 , 1276]
  }


const Cards = ({ key , hourly , onHandleConvertTime , weather}) => {
  const dayIcon = Object.keys(icons).find(icon => icons[icon].includes(hourly.condition.code));
  const nightIcon = Object.keys(nightIcons).find(icon => nightIcons[icon].includes(hourly.condition.code));
  const isDay = hourly.is_day;
  const temp = Math.floor(hourly.temp_c);

  const iconDay = {
    clear,
    clouds : cloudy,
    rain,
    mist,
    moderate_heavy_rain : moderateHeavyRain,
    snow,
    thunder,
    thunder_rain : thunderRain
  }[dayIcon]

  const iconNight = {
    moon,
    nightClouds : nightCLoudy,
    nightRaining ,
    moderate_heavy_rain : moderateHeavyRain,
    snow,
    mist,
    thunder,
    thunder_rain : thunderRain
  }[nightIcon]


  return (
    <>
      {/* hourly forecast cards */}
      <div className="hourly-card" key={ key }>
        <h4>{ onHandleConvertTime(hourly.time_epoch , false , weather)}</h4>
        <img src={ isDay ? iconDay : iconNight} alt="clear" />
        <p>{ temp }°C</p>
      </div>
    </>
  );
};

export default Cards;
