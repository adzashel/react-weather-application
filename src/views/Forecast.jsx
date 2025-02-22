import { Nav, Tab, Row } from "react-bootstrap";

import Cards from "../views/Cards";

export const Forecast = ({ weather, hourlyForecast , onHandleConvertTime }) =>

{
  console.log(hourlyForecast)
  return (
    <>
      <Tab.Container>
        <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="hourly" >Today</Nav.Link>
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
                      onHandleConvertTime={onHandleConvertTime}
                    />
                  ))}
                </div>
                {/* today highlight */}
                <h4 className="mt-3 mb-5">Today's Highlights</h4>
                <div className="highlight-container">
                  <div className="card-highlight">
                    <h1>Hello World</h1>
                  </div>
                  <div className="card-highlight">
                    <h1>Hello World</h1>
                  </div>
                  <div className="card-highlight">
                    <h1>Hello World</h1>
                  </div>
                  <div className="card-highlight">
                    <h1>Hello World</h1>
                  </div>
                  <div className="card-highlight">
                    <h1>Hello World</h1>
                  </div>
                  <div className="card-highlight">
                    <h1>Hello World</h1>
                  </div>
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
