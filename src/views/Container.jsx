import icons from "../assets/assets/images/weather.png";
import clouds from "../assets/assets/images/cloud.png";
import rain from '../assets/assets/images/water.svg'
const Container = () => {
  return (
    <div className="weather-container">
      {/* current weather */}
      <div className="main-weather">
        {/* input field to search city */}
        <div className="searchbar">
          <div className="searchbar-wrapper">
            <div className="searchbar-left">
              <div className="search-icon-wrapper">
                <span className="search-icon searchbar-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="searchbar-center">
              <div className="searchbar-input-spacer"></div>
              <input
                type="text"
                className="searchbar-input"
                maxLength="2048"
                name="q"
                autoCapitalize="off"
                title="Search"
                role="combobox"
                placeholder="Search City"
              />
            </div>
          </div>
        </div>
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
        </div>
      </div>

      {/* forecast */}
      <div className="forecast-weather"></div>
    </div>
  );
};

export default Container;
