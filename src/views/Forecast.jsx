import { Nav, Tab, Row } from "react-bootstrap";
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
import Cards from "../views/Cards";

export const Forecast = ({ weather, hourlyForecast }) => {
  return (
    <>
      <Tab.Container>
        <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="hourly">Today</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="daily">Week</Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
        <div className="tab-pane">
          <Tab.Content>
            <Tab.Pane eventKey="hourly">
              <Row>
                {/* hourly forecast cards */}
                <div className="card-container">
                {hourlyForecast.map((item) => (
                  <Cards
                    hourlyForecast={hourlyForecast}
                    hourly={item}
                    key={weather.hourly.time_epoch}
                  />
                ))}
                </div>
                
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="daily">
              <Row>
                {/* daily forecast cards */}
                <h3>Daily Forecast</h3>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </>
  );
};
