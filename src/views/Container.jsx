import MainWeather from "./MainWeather";
import { Forecast } from "./Forecast";
import { useState } from "react";

// api
const api = {
  key: "766b389336c246ab9b5141950241012",
  baseURL: "https://api.weatherapi.com/v1/forecast.json",
};

export const Container = () => {
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState("");

  // call the api
  const handleSearch = async () => {
    try {
      const data = await fetch(
        `${api.baseURL}?key=${api.key}&q=${query}&days=3`
      );
      const response = await data.json();
      console.log(response);
      if(!response){
        throw new Error('Error fetching')
      }
      const temperature = Math.floor(response.current.temp_c)
      const city = response.location.name;
      const country = response.location.country;
      const icon = response.current.condition.icon;
      const time_epoch = response.location.localtime_epoch;
      setWeather({
        temperature,
        city,
        country,
        icon,
        time_epoch
      });
      setQuery('')
    } catch (e) {
      console.error("failed to fetch" + e);
    }
  };
  return (
    <div className="weather-container">
      {/* current weather */}
      <MainWeather
        onHandleSearch={handleSearch}
        query={query}
        setQuery={setQuery}
        weather={weather}
      />
      {/* forecast */}
      <div className="forecast-weather">
        <div className="tabs-container">
          <Forecast />
        </div>
      </div>
    </div>
  );
};
