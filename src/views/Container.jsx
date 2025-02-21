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
  const [hourlyForecast, setHourlyForecast] = useState([]);

  // combinedhourlyforecast
  const filteredCombinedData = (combinedHour) => {
    const currentTime = new Date().setMinutes(0,0,0);
    const next7Hours = currentTime + 7 * 60 * 60 * 1000;

    const next7HoursData = combinedHour.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >= currentTime && forecastTime <= next7Hours;
    });
    console.log(next7HoursData)
    setHourlyForecast(next7HoursData);
  }


  
  // call the api
  const handleSearch = async () => {
    try {                                                                 
      const data = await fetch(
        `${api.baseURL}?key=${api.key}&q=${query}&days=7`
      );
      const response = await data.json();
      console.log(response);
      if (!response) {
        throw new Error("Error fetching");
      }
      const temperature = Math.floor(response.current.temp_c);
      const city = response.location.name;
      const country = response.location.country;
      const icon = response.current.condition.icon;
      const time = response.location.localtime;
      const text = response.current.condition.text;
      const forecast = response.forecast.forecastday;
      const hourly = forecast.map((item) => {
        return item.hour;
      });
      const combinedHour = [...hourly[0], ...hourly[1], ...hourly[2]];
      filteredCombinedData(combinedHour);
      setWeather({
        temperature,
        city,
        country,
        icon,
        text,
        time,
        forecast,
        hourly,
      });
      setQuery("");
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
        // added new prop to call the function
      />
      {/* forecast */}
      
        <div className="tabs-container">
         <div className="weather-forecast">
         <Forecast weather={weather} hourlyForecast={ hourlyForecast }/>
         </div>
        </div>
      </div>
  );
};
