import React from 'react'
import Header from '../Header/Header'
import CircleDetails from '../CircleDetails/CircleDetails'
import CarRentalDiv from '../CarRentalsDiv/CarRentalDiv'
import Footer from '../Footer/Footer'


const CarPage = () => {
  return (
    <div className='main'>
        <Header/>
        <CircleDetails/>
        <CarRentalDiv/>
        <Footer/>
    </div>
  )
}

export default CarPage