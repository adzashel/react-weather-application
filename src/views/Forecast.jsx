import { Nav, Tab, Row } from "react-bootstrap";

import HourlyForecast from "../views/DailyForecast";
export const Forecast = ({ onCutString ,weather, hourlyForecast, onHandleConvertTime }) => {
 

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
                <HourlyForecast
                  weather={weather}
                  hourlyForecast={hourlyForecast}
                  onHandleConvertTime={onHandleConvertTime}
                  onCutString={ onCutString }
                />
                {/* today highlight */}
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
