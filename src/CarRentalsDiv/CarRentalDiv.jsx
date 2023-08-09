import React from 'react'
import "./CarRentalDiv.css";
import "./CarRentalMedia.css";

const CarRentalDiv = () => {
  return (
    <div className='thecarrentaldiv'>
        <div className='carbusdiv'>
            <h2 className='carbustext'>Car/Bus</h2>
            <h2 className='modeltext'>Model</h2>
        </div>

        <div className='carbusinputdiv'>
            <input className='inputone' type="text" />
            <input className='inputtwo' type="text" />
        </div>

        <div className='seatdiv'>
            <h2 className='Seattext'>Seat</h2>
            <h2 className='Daystext'>Days</h2>
        </div>

        <div className='seatinputdiv'>
            <input className='inputthree' type="text" />
            <input className='inputfour' type="text" />
        </div>

        <div className='rangediv'>
            <h2 className='Pricerangetext'>Price range</h2>
        </div>

        <div className='rangeinputdiv'>
            <input className='inputfive' type="text" />
            
        </div>

        <div className='spaceee'></div>

        <div className='thecarrentalbutton'>
            <button className='thesearchbutton'>Search</button>

        </div>

    </div>
  )
}

export default CarRentalDiv