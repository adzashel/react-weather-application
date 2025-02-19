import MainWeather from "./MainWeather";
import {Forecast} from './Forecast'
export const Container = () => {
  return (
    <div className="weather-container">
      {/* current weather */}
      <MainWeather />
      {/* forecast */}
      <div className="forecast-weather">
        <div className="tabs-container">
        <Forecast/>
        </div>
      </div>
    </div>
  );
};


