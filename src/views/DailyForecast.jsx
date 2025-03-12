import React from "react";
import Cards from "../views/Cards";
import { DailyForecastCard } from "../views/DailyForecastCard";
import TodayHighlight from "../views/TodayHighlight";

const DailyForecast = ({
  onCutString,
  hourlyForecast,
  onHandleConvertTime,
  weather,
}) => {
  const dailyForecast = weather.forecast;

  return (
    <>
      <div className="card-container">
        {hourlyForecast.map((item) => (
          <Cards
            hourlyForecast={hourlyForecast}
            hourly={item}
            weather={weather.timeString}
            key={weather.hourly.time_epoch}
            onHandleConvertTime={onHandleConvertTime}
          />
        ))}
      </div>
      {/* // today highlight */}
      <h4 className="mt-3 mb-5">Today's Highlights</h4>
      <div className="highlight">
        <TodayHighlight weather={ weather }/>
        {/* daily forecast */}
        <div className="daily-forecast">
          <h3>3 Days Forecast</h3>
          {/* // daily forecast cards */}
          {dailyForecast && Array.isArray(dailyForecast) ? (
            dailyForecast.map((day , i) => (
              <DailyForecastCard day={day} onCutString={onCutString} key={i} />
            ))
          ) : (
            <h2>NO Data</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default DailyForecast;
