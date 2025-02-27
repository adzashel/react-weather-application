import { Nav, Tab, Row } from "react-bootstrap";

import DailyForecast from "../views/DailyForecast";
export const Forecast = ({ weather, hourlyForecast, onHandleConvertTime }) => {
 

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
                <DailyForecast
                  weather={weather}
                  hourlyForecast={hourlyForecast}
                  onHandleConvertTime={onHandleConvertTime}
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
