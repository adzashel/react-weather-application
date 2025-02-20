import icons from "../assets/assets/images/weather.png";
import clouds from "../assets/assets/images/cloud.png";
import rain from '../assets/assets/images/water.svg';
import SearchInput from './SearchInput'

const MainWeather = ({ onHandleSearch , query , setQuery  , weather }) => {
  const convertTimeEpoch = (timeEpoch) => {
    const date = new Date(timeEpoch * 1000);

    const hours = date.getHours();
    // get minutes
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${ hours } : ${ minutes }`
  }

  const time = convertTimeEpoch(weather.time_epoch);
  const currentDay = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = daysOfWeek[currentDay.getDay()];
  return (
    <div className="main-weather">
        {/* input field to search city */}
        <SearchInput handleSearch={ onHandleSearch } query={  query } setQuery={ setQuery }/>
        {/* weather icon */}
        <div className="current-weather">
          <img src={ weather.icon } alt="weather" />
          {/* weather details */}
          <div className="weather-detail">
            <h3 className="temp">
             { weather.temperature } <span>°C</span>
            </h3>
            <h5 className="city">{ day } , { time }  </h5>
          </div>
        </div>
        <div className="horizontal-line"></div>

        {/* condition  */}
        <div className="condition">
          <div className="weather-condition">
          <img src={clouds} alt="icon" />
          <h4>Partly Cloudy</h4>
          </div>
          <div className="weather-condition">
          <img src={ rain } alt="rain posibility" />
          <h4>Rain 50% chance</h4>
          </div>
          <div className="city-name">
        <h3>{ weather.city } , { weather.country }</h3>
      </div>

        </div>
      </div>
  )
}

export default MainWeather
