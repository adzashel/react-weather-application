import icons from "../assets/assets/images/weather.png";
import clouds from "../assets/assets/images/cloud.png";
import rain from '../assets/assets/images/water.svg';
import SearchInput from './SearchInput'

const MainWeather = () => {
  return (
    <div className="main-weather">
        {/* input field to search city */}
        <SearchInput/>
        {/* weather icon */}
        <div className="current-weather">
          <img src={icons} alt="weather" />
          {/* weather details */}
          <div className="weather-detail">
            <h3 className="temp">
              15<span>°C</span>
            </h3>
            <h5 className="city">Toronto , Canada</h5>
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
        <h3>Toronto , Canada</h3>
      </div>

        </div>
      </div>
  )
}

export default MainWeather
