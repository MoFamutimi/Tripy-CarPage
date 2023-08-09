import React from 'react'
import "./CircleDetails.css";
import "./CircleDetailsMedia.css";

const CircleDetails = () => {
  return (
    <div className='circleDetailsDiv'>
        <div className='titlenamediv'>
          <h2 className='thenames'>Details/Booking</h2>
        </div>
        <div className='circleandlines'>
                <div className='movethem'>
                            <div className="Flightbar1 Circle"></div>
                            <div className="Flightbar2 Line"></div>
                            <div className="Flightbar3 Circle"></div>
                            <div className="Flightbar4 Line"></div>
                            <div className="Flightbar5 Circle"></div>
                            <div className="Flightbar6 Line"></div>
                            <div className="Flightbar7 Circle"></div>
                            <div className="Flightbar8 Line"></div>
                            <div className="Flightbar9 Circle"></div>
                </div>
        </div>
        <div className='carrentaltitle'>
          <h2 className='sytlethename'>Car Rental Details</h2>
        </div>
    </div>
  )
}

export default CircleDetails