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
    const currentTime = new Date().setMinutes(0, 0, 0);
    const next7Hours = currentTime + 7 * 60 * 60 * 1000;

    const next7HoursData = combinedHour.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >= currentTime && forecastTime <= next7Hours;
    });
    console.log(next7HoursData);
    setHourlyForecast(next7HoursData);
  };

  // convert time
  const convertTimeEpoch = (hour, format24 = true) => {
    const date = new Date(hour * 1000);
    // create date object
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    let amPm = "PM"
    if(!format24) {
      amPm = hours <= 12 ? "AM" : "PM";
      hours = hours % 12 || 12;
    }
    console.log(hours)
    return `${hours}:${minutes} ${amPm}`;
  };

  // call the api
  const handleSearch = async () => {
    try {
      const data = await fetch(
        `${api.baseURL}?key=${api.key}&q=${query}&days=7&aqi=yes`
      );
      const response = await data.json();
      console.log(response);
      if (!response) {
        throw new Error("Error fetching");
      }
      const temperature = Math.floor(response.current.temp_c);
      const city = response.location.name;
      const windSpeed = response.current.vis_km;
      const country = response.location.country;
      const icon = response.current.condition.icon;
      const time = response.location.localtime;
      const spaceIndex = time.indexOf(" ");
      const timeString = time.slice(spaceIndex + 1);
      const text = response.current.condition.text;
      const forecast = response.forecast.forecastday;
      const codeIcon = response.current.condition.code;
      const hourly = forecast.map((item) => {
        return item.hour;
      });
      const dailyForecast = response.forecast.forecastday;
      const moon = dailyForecast[0].astro.sunset;
      const chanceOfRain = dailyForecast[0].day.daily_chance_of_rain;
      const sun = dailyForecast[0].astro.sunrise;
      const winDir = response.current.wind_dir;
      const uvIndex = response.current.uv;
      const astro = response.current.is_day;
      const combinedHour = [...hourly[0], ...hourly[1], ...hourly[2]];
      const humidity = response.current.humidity;
      const airQuality = response.current.air_quality["us-epa-index"];

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
        timeString,
        codeIcon,
        astro,
        uvIndex,
        winDir,
        windSpeed,
        chanceOfRain,
        humidity,
        sun,
        airQuality,
        moon
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
          <Forecast
            weather={weather}
            hourlyForecast={hourlyForecast}
            onHandleConvertTime={convertTimeEpoch}
          />
        </div>
      </div>
    </div>
  );
};
