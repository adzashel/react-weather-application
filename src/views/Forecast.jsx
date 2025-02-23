import { Nav, Tab, Row } from "react-bootstrap";
import sunset from '../assets/assets/images/download_arrow-removebg-preview.png'
import sunrise from '../assets/assets/images/upload_arrow-removebg-preview.png'

import Cards from "../views/Cards";

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
                    <div>UV Index</div>
                    <div className="gauge">
                      <div className="inner-gauge">
                        <div className="percentage"></div>
                        <div className="mask"></div>
                        <span className="value">25</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-highlight">
                      <div>Wind Status</div>
                    <div className="wind-status">
                      <div className="wind">
                        35 <span>km/h</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-highlight">
                      <div className="sunrise-sunset">
                       <div> Sunrise & Sunset </div>
                       <div className="wrapper">
                        <div className="wrapper-detail">
                          <img src={ sunrise } alt="" />
                          <h3>07:00 AM</h3>
                        </div>
                        <div className="wrapper-detail">
                          <img src = {sunset} alt="" />
                          <h3>07:00 AM</h3>
                        </div>
                       </div>
                      </div>
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
