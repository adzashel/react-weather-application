import React from "react";
import clear from "../assets/assets/images/clear.png";

export const DailyForecastCard = ({ day }) => {
  return (
    <>
      <div className="daily-container">
          <h3>{day.date}</h3>
          <img src={clear} alt="icon" />
          <h3>{ day.day.condition.text}</h3>
          <h3>{ day.day.avgtemp_c}°C</h3>
        </div>
    </>
  );
};
