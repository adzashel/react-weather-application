import React from 'react'
import clear from "../assets/assets/images/clear.svg";
 const Cards = () => {
  return (
  <>
              {/* hourly forecast cards */}
              <div className="hourly-card">
                <h4>09:00 AM</h4>
                <img src={ clear } alt="clear" />
                <p>55°C</p>
              </div>
  
  </>

  )
}

export default Cards;